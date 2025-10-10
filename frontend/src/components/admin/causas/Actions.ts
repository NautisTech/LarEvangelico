import { useConteudoMutations, useAnexoMutations } from "@/hooks";
import { type CreateConteudoData, type UpdateConteudoData, type BulkUpdateConteudoRequest, type BulkUpdateConteudoItem, type BulkCreateAnexoRequest, type BulkCreateAnexoItem } from "@/services";
import { toast } from "react-toastify";
import { useConfirm } from '@/hooks';
import { TipoConteudo } from "@/utils";

export const Actions = () => {
    const mutations = useConteudoMutations();
    const anexoMutations = useAnexoMutations();
    const { confirm } = useConfirm();

    const createCausa = async (causa: CreateConteudoData) => {
        try {
            const causaData = { ...causa, tipo: TipoConteudo.Causa };
            await mutations.create.mutateAsync({ data: causaData });
            toast.success("Causa criada com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar causa.");
        }
    };

    const editCausa = async (id: string | number, causa: UpdateConteudoData) => {
        try {
            await mutations.update.mutateAsync({ id, conteudo: causa });
            toast.success("Causa editada com sucesso!");
        } catch (error) {
            toast.error("Erro ao editar causa.");
        }
    };

    const deleteCausa = async (id: string | number, titulo?: string) => {
        const confirmacao = await confirm({
            title: "Confirmação de Ação",
            message: `Tem a certeza que quer apagar a causa ${titulo ? `"${titulo}"` : `${id}`}?`,
            cancelText: "Cancelar",
            confirmText: "Apagar",
        });
        if (!confirmacao) return false;

        try {
            await mutations.delete.mutateAsync(id);
            toast.success("Causa apagada com sucesso!");
            return true;
        } catch (error) {
            toast.error("Erro ao apagar causa.");
            return false;
        }
    };

    const bulkDeleteCausas = async (ids: (string | number)[]) => {
        if (ids.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer apagar ${ids.length} causas?`,
                cancelText: "Cancelar",
                confirmText: "Apagar",
            }
        );
        if (!confirmacao) return;

        try {
            await mutations.bulkDelete.mutateAsync(ids);
            toast.success(`${ids.length} causas apagadas com sucesso!`);
        } catch (error) {
            toast.error("Erro ao apagar causas.");
        }
    };

    const approveCausa = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer publicar esta causa?`,
                    cancelText: "Cancelar",
                    confirmText: "Publicar",
                }
            );
            if (!confirmacao) return;

            await mutations.approve.mutateAsync(id);
            toast.success("Causa publicada com sucesso!");
        } catch (error) {
            toast.error("Erro ao publicar causa.");
        }
    };

    const disapproveCausa = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer ocultar esta causa?`,
                    cancelText: "Cancelar",
                    confirmText: "Ocultar",
                }
            );
            if (!confirmacao) return;

            await mutations.disapprove.mutateAsync(id);
            toast.success("Causa ocultada com sucesso!");
        } catch (error) {
            toast.error("Erro ao ocultar causa.");
        }
    };

    const bulkEditCausas = async (editedData: BulkUpdateConteudoItem[]) => {
        if (editedData.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer editar ${editedData.length} causas?`,
                cancelText: "Cancelar",
                confirmText: "Editar",
            }
        );
        if (!confirmacao) return;

        try {
            const bulkUpdateData: BulkUpdateConteudoRequest = {
                updates: editedData.map(item => ({
                    id: Number(item.id),
                    data: item.data
                }))
            };

            await mutations.bulkUpdate.mutateAsync(bulkUpdateData);
            toast.success(`${editedData.length} causas editadas com sucesso!`);
        } catch (error) {
            toast.error("Erro ao editar causas.");
        }
    };

    const createAnexo = async (anexos: CreateConteudoData) => {
        try {
            const anexosData = { ...anexos };
            await mutations.create.mutateAsync({ data: anexosData });
            toast.success("Anexo criado com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar anexos.");
        }
    };

    const bulkCreateAnexos = async (createdData: BulkCreateAnexoItem[]) => {
        if (createdData.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer criar ${createdData.length} anexos?`,
                cancelText: "Cancelar",
                confirmText: "Criar",
            }
        );
        if (!confirmacao) return;

        try {
            const bulkCreateData: BulkCreateAnexoRequest = {
                creates: createdData.map(item => ({
                    id: item.id,
                    data: item.data
                }))
            };

            // bulkCreate mutation expects { files: File[]; dto: BulkCreateAnexoRequest }
            await anexoMutations.bulkCreate.mutateAsync({ files: [], dto: bulkCreateData });
            toast.success(`${createdData.length} anexos criados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao criar anexos.");
        }
    };

    const deleteAnexo = async (id: string | number) => {
        try {
            await anexoMutations.delete.mutateAsync(+id);
            toast.success("Anexo apagado com sucesso!");
        } catch (error) {
            toast.error("Erro ao apagar anexo.");
        }
    };

    const bulkDeleteAnexos = async (ids: (string | number)[]) => {
        if (ids.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer apagar ${ids.length} anexos?`,
                cancelText: "Cancelar",
                confirmText: "Apagar",
            }
        );
        if (!confirmacao) return;

        try {
            await anexoMutations.bulkDelete.mutateAsync(ids.map(id => +id));
            toast.success(`${ids.length} anexos apagados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao apagar anexos.");
        }
    };

    return {
        createCausa,
        editCausa,
        deleteCausa,
        approveCausa,
        disapproveCausa,
        bulkDeleteCausas,
        bulkEditCausas,

        createAnexo,
        bulkCreateAnexos,
        deleteAnexo,
        bulkDeleteAnexos,
        isLoading: mutations.isLoading,
    };
};