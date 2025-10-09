import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchConteudos,
    fetchAllConteudos,
    fetchConteudoById,
    createConteudo,
    updateConteudo,
    bulkUpdateConteudos,
    deleteConteudo,
    bulkDeleteConteudos,
    approveConteudo,
    disapproveConteudo,
    bulkapproveConteudos,
    bulkDisapproveConteudos,
    type CreateConteudoData,
    type UpdateConteudoData
} from "@/services";
import { type Conteudo } from "@/models";
import { TipoConteudo } from "@/utils";

const refreshInterval = 1000 * 60 * 45; // 45 minutos

export const useConteudoHook = (tipo: TipoConteudo, isPublic: boolean = false) => {
    return useQuery<Conteudo[]>({
        queryKey: ["conteudos", tipo],
        queryFn: () => fetchConteudos(tipo, isPublic || false),
        staleTime: refreshInterval,
        retry: 1,
    });
};

export const useConteudoGeralHook = () => {
    return useQuery<Conteudo[]>({
        queryKey: ["conteudos"],
        queryFn: () => fetchAllConteudos(),
        staleTime: refreshInterval,
        retry: 1,
    });
};

export const useConteudoByIdHook = (id: string, isPublic: boolean = false) => {
    return useQuery<Conteudo>({
        queryKey: ["conteudo", id],
        queryFn: () => fetchConteudoById(id, isPublic),
        enabled: !!id,
        staleTime: 0, // Sempre considerar stale para garantir dados frescos
        retry: 1,
    });
};

export const useConteudoMutations = () => {
    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: ["conteudos"] });
        queryClient.invalidateQueries({ queryKey: ["anexos"] });
        queryClient.invalidateQueries({ queryKey: ["etiquetas"] });

    };

    const create = useMutation({
        mutationFn: ({ data }: { data: CreateConteudoData }) =>
            createConteudo(data),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const update = useMutation({
        mutationFn: ({ id, conteudo }: { id: string | number; conteudo: UpdateConteudoData }) =>
            updateConteudo(id, conteudo),
        onSuccess: () => {
            invalidateQueries();
        },
    })

    const bulkUpdate = useMutation({
        mutationFn: bulkUpdateConteudos,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const _delete = useMutation({
        mutationFn: deleteConteudo,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkDelete = useMutation({
        mutationFn: bulkDeleteConteudos,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const approve = useMutation({
        mutationFn: approveConteudo,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const disapprove = useMutation({
        mutationFn: disapproveConteudo,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkApprove = useMutation({
        mutationFn: bulkapproveConteudos,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkDisapprove = useMutation({
        mutationFn: bulkDisapproveConteudos,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    return {
        create: create,
        update: update,
        bulkUpdate: bulkUpdate,
        delete: _delete,
        bulkDelete: bulkDelete,
        approve: approve,
        disapprove: disapprove,
        bulkApprove: bulkApprove,
        bulkDisapprove: bulkDisapprove,

        isLoading: create.isPending || update.isPending || bulkUpdate.isPending || _delete.isPending || bulkDelete.isPending || bulkApprove.isPending || bulkDisapprove.isPending || approve.isPending || disapprove.isPending,
        error: create.error || update.error || bulkUpdate.error || _delete.error || bulkDelete.error || bulkApprove.error || bulkDisapprove.error || approve.error || disapprove.error
    };
};
