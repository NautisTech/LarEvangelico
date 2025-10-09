import { useConteudoMutations, useAnexoMutations } from "@/hooks";
import { type CreateConteudoData, type UpdateConteudoData, type BulkUpdateConteudoRequest, type BulkUpdateConteudoItem, type BulkCreateAnexoRequest, type BulkCreateAnexoItem } from "@/services";
import { toast } from "react-toastify";
import { useConfirm } from '@/hooks';
import { TipoConteudo } from "@/utils";

export const Actions = () => {
    const mutations = useConteudoMutations();
    const anexoMutations = useAnexoMutations();
    const { confirm } = useConfirm();

    const createEvento = async (evento: CreateConteudoData) => {
        try {
            const eventoData = { ...evento, tipo: TipoConteudo.Evento };
            await mutations.create.mutateAsync({ data: eventoData });
            toast.success("Evento criado com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar evento.");
        }
    };

    const editEvento = async (id: string | number, evento: UpdateConteudoData) => {
        try {
            await mutations.update.mutateAsync({ id, conteudo: evento });
            toast.success("Evento editado com sucesso!");
        } catch (error) {
            toast.error("Erro ao editar evento.");
        }
    };

    const deleteEvento = async (id: string | number, titulo?: string) => {
        const confirmacao = await confirm({
            title: "Confirmação de Ação",
            message: `Tem a certeza que quer apagar o evento ${titulo ? `"${titulo}"` : `${id}`}?`,
            cancelText: "Cancelar",
            confirmText: "Apagar",
        });
        if (!confirmacao) return false;

        try {
            await mutations.delete.mutateAsync(id);
            toast.success("Evento apagado com sucesso!");
            return true;
        } catch (error) {
            toast.error("Erro ao apagar evento.");
            return false;
        }
    };

    const bulkDeleteEventos = async (ids: (string | number)[]) => {
        if (ids.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer apagar ${ids.length} eventos?`,
                cancelText: "Cancelar",
                confirmText: "Apagar",
            }
        );
        if (!confirmacao) return;

        try {
            await mutations.bulkDelete.mutateAsync(ids);
            toast.success(`${ids.length} eventos apagados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao apagar eventos.");
        }
    };

    const approveEvento = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer publicar este evento?`,
                    cancelText: "Cancelar",
                    confirmText: "Publicar",
                }
            );
            if (!confirmacao) return;

            await mutations.approve.mutateAsync(id);
            toast.success("Evento publicado com sucesso!");
        } catch (error) {
            toast.error("Erro ao publicar evento.");
        }
    };

    const disapproveEvento = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer ocultar este evento?`,
                    cancelText: "Cancelar",
                    confirmText: "Ocultar",
                }
            );
            if (!confirmacao) return;

            await mutations.disapprove.mutateAsync(id);
            toast.success("Evento ocultado com sucesso!");
        } catch (error) {
            toast.error("Erro ao ocultar evento.");
        }
    };

    const bulkEditEventos = async (editedData: BulkUpdateConteudoItem[]) => {
        if (editedData.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer editar ${editedData.length} eventos?`,
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
            toast.success(`${editedData.length} eventos editados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao editar eventos.");
        }
    };

    const createAnexo = async (anexos: CreateConteudoData) => {
        try {
            const anexosData = { ...anexos };
            await mutations.create.mutateAsync({ data: anexosData });
            toast.success("Anexos criado com sucesso!");
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
        createEvento,
        editEvento,
        deleteEvento,
        approveEvento,
        disapproveEvento,
        bulkDeleteEventos,
        bulkEditEventos,

        createAnexo,
        bulkCreateAnexos,
        deleteAnexo,
        bulkDeleteAnexos,
        isLoading: mutations.isLoading,
    };
};