import { useConteudoMutations, useAnexoMutations } from "@/hooks";
import { type CreateConteudoData, type UpdateConteudoData, type BulkUpdateConteudoRequest, type BulkUpdateConteudoItem, type BulkCreateAnexoRequest, type BulkCreateAnexoItem } from "@/services";
import { toast } from "react-toastify";
import { useConfirm } from '@/hooks';
import { TipoConteudo } from "@/utils";

export const Actions = () => {
    const mutations = useConteudoMutations();
    const anexoMutations = useAnexoMutations();
    const { confirm } = useConfirm();

    const createNoticia = async (noticia: CreateConteudoData) => {
        try {
            const noticiaData = { ...noticia, tipo: TipoConteudo.Noticia };
            await mutations.create.mutateAsync({ data: noticiaData });
            toast.success("Noticia criado com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar noticia.");
        }
    };

    const editNoticia = async (id: string | number, noticia: UpdateConteudoData) => {
        try {
            await mutations.update.mutateAsync({ id, conteudo: noticia });
            toast.success("Noticia editado com sucesso!");
        } catch (error) {
            toast.error("Erro ao editar noticia.");
        }
    };

    const deleteNoticia = async (id: string | number, titulo?: string) => {
        const confirmacao = await confirm({
            title: "Confirmação de Ação",
            message: `Tem a certeza que quer apagar a noticia ${titulo ? `"${titulo}"` : `${id}`}?`,
            cancelText: "Cancelar",
            confirmText: "Apagar",
        });
        if (!confirmacao) return false;

        try {
            await mutations.delete.mutateAsync(id);
            toast.success("Noticia apagado com sucesso!");
            return true;
        } catch (error) {
            toast.error("Erro ao apagar noticia.");
            return false;
        }
    };

    const bulkDeleteNoticias = async (ids: (string | number)[]) => {
        if (ids.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer apagar ${ids.length} noticias?`,
                cancelText: "Cancelar",
                confirmText: "Apagar",
            }
        );
        if (!confirmacao) return;

        try {
            await mutations.bulkDelete.mutateAsync(ids);
            toast.success(`${ids.length} noticias apagados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao apagar noticias.");
        }
    };

    const approveNoticia = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer publicar este noticia?`,
                    cancelText: "Cancelar",
                    confirmText: "Publicar",
                }
            );
            if (!confirmacao) return;

            await mutations.approve.mutateAsync(id);
            toast.success("Noticia publicado com sucesso!");
        } catch (error) {
            toast.error("Erro ao publicar noticia.");
        }
    };

    const disapproveNoticia = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer ocultar este noticia?`,
                    cancelText: "Cancelar",
                    confirmText: "Ocultar",
                }
            );
            if (!confirmacao) return;

            await mutations.disapprove.mutateAsync(id);
            toast.success("Noticia ocultado com sucesso!");
        } catch (error) {
            toast.error("Erro ao ocultar noticia.");
        }
    };

    const bulkEditNoticias = async (editedData: BulkUpdateConteudoItem[]) => {
        if (editedData.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer editar ${editedData.length} noticias?`,
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
            toast.success(`${editedData.length} noticias editados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao editar noticias.");
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
        createNoticia,
        editNoticia,
        deleteNoticia,
        approveNoticia,
        disapproveNoticia,
        bulkDeleteNoticias,
        bulkEditNoticias,

        createAnexo,
        bulkCreateAnexos,
        deleteAnexo,
        bulkDeleteAnexos,
        isLoading: mutations.isLoading,
    };
};