import { publicApiClient, type RequestConfig } from '../client'
import type {
    ConteudoResumo,
    ConteudoCompleto,
    FiltrosConteudo,
    PaginatedResponse,
} from './types'

class ConteudosPublicAPI {
    private baseUrl = '/public/conteudos'

    /**
     * Listar conteúdos públicos com filtros e paginação
     * @example
     * ```ts
     * const result = await conteudosPublicAPI.listar({
     *   tipoConteudoId: 1,
     *   destaque: true,
     *   pageSize: 10
     * })
     * ```
     */
    async listar(
        filtros?: FiltrosConteudo,
        config?: RequestConfig
    ): Promise<PaginatedResponse<ConteudoResumo>> {
        const tenantId = publicApiClient.getTenantId()

        return publicApiClient.get<PaginatedResponse<ConteudoResumo>>(
            `${this.baseUrl}/${tenantId}`,
            {
                params: filtros,
                skipErrorHandling: false,
                ...config,
            }
        )
    }

    /**
     * Obter conteúdo completo por slug
     * @example
     * ```ts
     * const conteudo = await conteudosPublicAPI.obterPorSlug('meu-artigo')
     * ```
     */
    async obterPorSlug(
        slug: string,
        config?: RequestConfig
    ): Promise<ConteudoCompleto> {
        const tenantId = publicApiClient.getTenantId()

        return publicApiClient.get<ConteudoCompleto>(
            `${this.baseUrl}/${tenantId}/slug/${slug}`,
            {
                skipErrorHandling: false,
                ...config,
            }
        )
    }

    /**
     * Listar conteúdos em destaque
     * @example
     * ```ts
     * const destaques = await conteudosPublicAPI.listarDestaques(5)
     * ```
     */
    async listarDestaques(
        limit: number = 5,
        tipoConteudoId?: number,
        config?: RequestConfig
    ): Promise<ConteudoResumo[]> {
        const result = await this.listar(
            {
                destaque: true,
                pageSize: limit,
                tipoConteudoId,
            },
            config
        )

        return result.data
    }

    /**
     * Listar conteúdos por categoria
     * @example
     * ```ts
     * const artigos = await conteudosPublicAPI.listarPorCategoria(5, 1, 10)
     * ```
     */
    async listarPorCategoria(
        categoriaId: number,
        page: number = 1,
        pageSize: number = 10,
        config?: RequestConfig
    ): Promise<PaginatedResponse<ConteudoResumo>> {
        return this.listar(
            {
                categoriaId,
                page,
                pageSize,
            },
            config
        )
    }

    /**
     * Listar conteúdos por tag
     * @example
     * ```ts
     * const artigos = await conteudosPublicAPI.listarPorTag('tecnologia')
     * ```
     */
    async listarPorTag(
        tag: string,
        page: number = 1,
        pageSize: number = 10,
        config?: RequestConfig
    ): Promise<PaginatedResponse<ConteudoResumo>> {
        return this.listar(
            {
                tag,
                page,
                pageSize,
            },
            config
        )
    }

    /**
     * Pesquisar conteúdos
     * @example
     * ```ts
     * const resultados = await conteudosPublicAPI.pesquisar('nextjs')
     * ```
     */
    async pesquisar(
        texto: string,
        page: number = 1,
        pageSize: number = 10,
        config?: RequestConfig
    ): Promise<PaginatedResponse<ConteudoResumo>> {
        return this.listar(
            {
                textoPesquisa: texto,
                page,
                pageSize,
            },
            config
        )
    }

    /**
     * Listar conteúdos recentes
     * @example
     * ```ts
     * const recentes = await conteudosPublicAPI.listarRecentes(10)
     * ```
     */
    async listarRecentes(
        limit: number = 10,
        tipoConteudoId?: number,
        config?: RequestConfig
    ): Promise<ConteudoResumo[]> {
        const result = await this.listar(
            {
                pageSize: limit,
                tipoConteudoId,
                page: 1,
            },
            config
        )

        return result.data
    }
}

export const conteudosPublicAPI = new ConteudosPublicAPI()