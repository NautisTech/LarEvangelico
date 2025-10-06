import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchEtiquetas,
    createEtiqueta,
    updateEtiqueta,
    deleteEtiqueta,
    bulkDeleteEtiquetas,
    bulkUpdateEtiquetas,
    type CreateEtiquetaData,
    type UpdateEtiquetaData,
    type BulkUpdateEtiquetaRequest,
} from "@/services";
import { type Etiqueta } from "@/models";

const refreshInterval = 1000 * 60 * 60; // 60 minutos

export const useEtiquetaHook = () => {
    return useQuery<Etiqueta[]>({
        queryKey: ["etiquetas"],
        queryFn: () => fetchEtiquetas(),
        staleTime: refreshInterval,
        retry: 1,
    });
};

export const useEtiquetaMutations = () => {
    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: ["etiquetas"] });
        queryClient.invalidateQueries({ queryKey: ["noticias"] });
    };

    const create = useMutation({
        mutationFn: createEtiqueta,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const update = useMutation({
        mutationFn: ({ id, etiqueta }: { id: string | number; etiqueta: UpdateEtiquetaData }) =>
            updateEtiqueta(id, etiqueta),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const _delete = useMutation({
        mutationFn: deleteEtiqueta,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkDelete = useMutation({
        mutationFn: bulkDeleteEtiquetas,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkUpdate = useMutation({
        mutationFn: bulkUpdateEtiquetas,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    return {
        create: create,
        update: update,
        delete: _delete,
        bulkDelete: bulkDelete,
        bulkUpdate: bulkUpdate,

        isLoading: create.isPending || update.isPending || _delete.isPending || bulkDelete.isPending || bulkUpdate.isPending,
        error: create.error || update.error || _delete.error || bulkDelete.error || bulkUpdate.error
    };
};
