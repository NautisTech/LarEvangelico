import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import type { UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query'
import { conteudosPublicAPI } from './api'
import type {
    ConteudoResumo,
    ConteudoCompleto,
    FiltrosConteudo,
    PaginatedResponse,
    ApiError,
} from './types'

// ==================== LISTAGEM ====================

/**
 * Hook para listar conteúdos com filtros e paginação
 * @example
 * ```tsx
 * function BlogPage() {
 *   const { data, isLoading, error } = useConteudos({
 *     tipoConteudoId: 1,
 *     destaque: true,
 *     pageSize: 10
 *   })
 *   
 *   if (isLoading) return <Loading />
 *   if (error) return <Error />
 *   
 *   return <ConteudosList conteudos={data.data} />
 * }
 * ```
 */
export function useConteudos(
    filtros?: FiltrosConteudo,
    options?: Omit<UseQueryOptions<PaginatedResponse<ConteudoResumo>, ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<PaginatedResponse<ConteudoResumo>, ApiError>({
        queryKey: ['conteudos-public', filtros],
        queryFn: () => conteudosPublicAPI.listar(filtros),
        staleTime: 1000 * 60 * 5, // 5 minutos
        ...options,
    })
}

// ==================== CONTEÚDO INDIVIDUAL ====================

/**
 * Hook para obter conteúdo completo por slug
 * @example
 * ```tsx
 * function ConteudoPage({ slug }: { slug: string }) {
 *   const { data: conteudo, isLoading } = useConteudoBySlug(slug)
 *   
 *   if (isLoading) return <Loading />
 *   if (!conteudo) return <NotFound />
 *   
 *   return <ConteudoDetail conteudo={conteudo} />
 * }
 * ```
 */
export function useConteudoBySlug(
    slug: string,
    options?: Omit<UseQueryOptions<ConteudoCompleto, ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<ConteudoCompleto, ApiError>({
        queryKey: ['conteudo-public', slug],
        queryFn: () => conteudosPublicAPI.obterPorSlug(slug),
        enabled: !!slug,
        staleTime: 1000 * 60 * 10, // 10 minutos
        ...options,
    })
}

// ==================== DESTAQUES ====================

/**
 * Hook para listar conteúdos em destaque
 * @example
 * ```tsx
 * function DestaquesSection() {
 *   const { data: destaques } = useConteudosDestaque(5)
 *   
 *   return (
 *     <div>
 *       {destaques?.map(conteudo => (
 *         <DestaqueCard key={conteudo.id} {...conteudo} />
 *       ))}
 *     </div>
 *   )
 * }
 * ```
 */
export function useConteudosDestaque(
    limit: number = 5,
    tipoConteudoId?: number,
    options?: Omit<UseQueryOptions<ConteudoResumo[], ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<ConteudoResumo[], ApiError>({
        queryKey: ['conteudos-public-destaque', limit, tipoConteudoId],
        queryFn: () => conteudosPublicAPI.listarDestaques(limit, tipoConteudoId),
        staleTime: 1000 * 60 * 10,
        ...options,
    })
}

// ==================== POR CATEGORIA ====================

/**
 * Hook para listar conteúdos por categoria
 * @example
 * ```tsx
 * function CategoriaPage({ categoriaId }: { categoriaId: number }) {
 *   const { data, isLoading } = useConteudosPorCategoria(categoriaId, 1, 10)
 *   
 *   return <ConteudosList conteudos={data?.data} />
 * }
 * ```
 */
export function useConteudosPorCategoria(
    categoriaId: number,
    page: number = 1,
    pageSize: number = 10,
    options?: Omit<UseQueryOptions<PaginatedResponse<ConteudoResumo>, ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<PaginatedResponse<ConteudoResumo>, ApiError>({
        queryKey: ['conteudos-public-categoria', categoriaId, page, pageSize],
        queryFn: () => conteudosPublicAPI.listarPorCategoria(categoriaId, page, pageSize),
        enabled: categoriaId > 0,
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}

// ==================== POR TAG ====================

/**
 * Hook para listar conteúdos por tag
 * @example
 * ```tsx
 * function TagPage({ tag }: { tag: string }) {
 *   const { data } = useConteudosPorTag(tag)
 *   
 *   return <ConteudosList conteudos={data?.data} />
 * }
 * ```
 */
export function useConteudosPorTag(
    tag: string,
    page: number = 1,
    pageSize: number = 10,
    options?: Omit<UseQueryOptions<PaginatedResponse<ConteudoResumo>, ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<PaginatedResponse<ConteudoResumo>, ApiError>({
        queryKey: ['conteudos-public-tag', tag, page, pageSize],
        queryFn: () => conteudosPublicAPI.listarPorTag(tag, page, pageSize),
        enabled: !!tag,
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}

// ==================== PESQUISA ====================

/**
 * Hook para pesquisar conteúdos
 * @example
 * ```tsx
 * function SearchPage() {
 *   const [searchTerm, setSearchTerm] = useState('')
 *   const { data, isLoading } = usePesquisarConteudos(searchTerm)
 *   
 *   return (
 *     <>
 *       <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
 *       {isLoading ? <Loading /> : <ResultsList resultados={data?.data} />}
 *     </>
 *   )
 * }
 * ```
 */
export function usePesquisarConteudos(
    texto: string,
    page: number = 1,
    pageSize: number = 10,
    options?: Omit<UseQueryOptions<PaginatedResponse<ConteudoResumo>, ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<PaginatedResponse<ConteudoResumo>, ApiError>({
        queryKey: ['conteudos-public-search', texto, page, pageSize],
        queryFn: () => conteudosPublicAPI.pesquisar(texto, page, pageSize),
        enabled: texto.length >= 2,
        staleTime: 1000 * 60 * 2,
        ...options,
    })
}

// ==================== RECENTES ====================

/**
 * Hook para listar conteúdos recentes
 * @example
 * ```tsx
 * function RecentesSection() {
 *   const { data: recentes } = useConteudosRecentes(10)
 *   
 *   return <ConteudosList conteudos={recentes} />
 * }
 * ```
 */
export function useConteudosRecentes(
    limit: number = 10,
    tipoConteudoId?: number,
    options?: Omit<UseQueryOptions<ConteudoResumo[], ApiError>, 'queryKey' | 'queryFn'>
) {
    return useQuery<ConteudoResumo[], ApiError>({
        queryKey: ['conteudos-public-recentes', limit, tipoConteudoId],
        queryFn: () => conteudosPublicAPI.listarRecentes(limit, tipoConteudoId),
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}