import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { type Utilizador } from "@/models";
import {
    fetchUtilizadores,
    fetchUtilizadoresBase,
    createUtilizador,
    updateUtilizador,
    changeUtilizadorPassword,
    activateUtilizador,
    deactivateUtilizador,
    bulkActivateUtilizadores,
    bulkDeactivateUtilizadores,
    bulkUpdateUtilizadores,
    UpdateUtilizadorData,
} from "@/services";

const refreshInterval = 1000 * 60 * 30; // 30 minutos

export const useUtilizadorHook = () => {
    return useQuery<Utilizador[]>({
        queryKey: ["utilizadores"],
        queryFn: () => fetchUtilizadores(),
        staleTime: refreshInterval,
        retry: 1,
    });
};

export const useUtilizadorBaseHook = () => {
    return useQuery<Utilizador[]>({
        queryKey: ["utilizadores", "base"],
        queryFn: () => fetchUtilizadoresBase(),
        staleTime: refreshInterval,
        retry: 1,
    });
};

export const useUtilizadorMutations = () => {
    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: ["utilizadores"] });
    };

    const create = useMutation({
        mutationFn: createUtilizador,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const update = useMutation({
        mutationFn: (params: { id: string | number; utilizador: UpdateUtilizadorData }) =>
            updateUtilizador(params.id, params.utilizador),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const changePassword = useMutation({
        mutationFn: (params: { id: string | number; password: string }) =>
            changeUtilizadorPassword(params.id, params.password),
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const activate = useMutation({
        mutationFn: activateUtilizador,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const deactivate = useMutation({
        mutationFn: deactivateUtilizador,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkActivate = useMutation({
        mutationFn: bulkActivateUtilizadores,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkDeactivate = useMutation({
        mutationFn: bulkDeactivateUtilizadores,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    const bulkUpdate = useMutation({
        mutationFn: bulkUpdateUtilizadores,
        onSuccess: () => {
            invalidateQueries();
        },
    });

    return {
        create,
        update,
        changePassword,
        activate,
        deactivate,
        bulkDeactivate,
        bulkActivate,
        bulkUpdate,
        isLoading: create.isPending || update.isPending || changePassword.isPending || activate.isPending || deactivate.isPending || bulkActivate.isPending || bulkDeactivate.isPending || bulkUpdate.isPending,
        error: create.error || update.error || changePassword.error || activate.error || deactivate.error || bulkActivate.error || bulkDeactivate.error || bulkUpdate.error
    };
};
