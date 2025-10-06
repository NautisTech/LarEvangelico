import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createAnexo,
    deleteAnexo,
    bulkDeleteAnexos,
    bulkCreateAnexos,
    type CreateAnexoData,
    type BulkCreateAnexoRequest,
} from "@/services";
import { type Anexo } from "@/models";

const refreshInterval = 1000 * 60 * 15; // 15 minutos

export const useAnexoMutations = () => {
    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: ["anexos"] });
        queryClient.invalidateQueries({ queryKey: ["conteudos"] });
    };

    const create = useMutation({
        mutationFn: ({ file, dto }: { file: File; dto: CreateAnexoData }) => createAnexo(file, dto),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const _delete = useMutation({
        mutationFn: deleteAnexo,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkCreate = useMutation({
        mutationFn: ({ files, dto }: { files: File[]; dto: BulkCreateAnexoRequest }) => bulkCreateAnexos(files, dto),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkDelete = useMutation({
        mutationFn: bulkDeleteAnexos,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    return {
        create: create,
        delete: _delete,
        bulkCreate: bulkCreate,
        bulkDelete: bulkDelete,

        isLoading: create.isPending || _delete.isPending || bulkCreate.isPending || bulkDelete.isPending,
        error: create.error || _delete.error || bulkCreate.error || bulkDelete.error
    };
};
