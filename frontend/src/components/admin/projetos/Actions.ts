import { useConteudoMutations, useAnexoMutations } from "@/hooks";
import { type CreateConteudoData, type UpdateConteudoData, type BulkUpdateConteudoRequest, type BulkUpdateConteudoItem, type BulkCreateAnexoRequest, type BulkCreateAnexoItem } from "@/services";
import { toast } from "react-toastify";
import { useConfirm } from '@/hooks';
import { TipoConteudo } from "@/utils";

export const Actions = () => {
    const mutations = useConteudoMutations();
    const anexoMutations = useAnexoMutations();
    const { confirm } = useConfirm();

    const createProjeto = async (projeto: CreateConteudoData) => {
        try {
            const projetoData = { ...projeto, tipo: TipoConteudo.Projeto };
            await mutations.create.mutateAsync({ data: projetoData });
            toast.success("Projeto criado com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar projeto.");
        }
    };

    const editProjeto = async (id: string | number, projeto: UpdateConteudoData) => {
        try {
            await mutations.update.mutateAsync({ id, conteudo: projeto });
            toast.success("Projeto editado com sucesso!");
        } catch (error) {
            toast.error("Erro ao editar projeto.");
        }
    };

    const deleteProjeto = async (id: string | number, titulo?: string) => {
        const confirmacao = await confirm({
            title: "Confirmação de Ação",
            message: `Tem a certeza que quer apagar o projeto ${titulo ? `"${titulo}"` : `${id}`}?`,
            cancelText: "Cancelar",
            confirmText: "Apagar",
        });
        if (!confirmacao) return false;

        try {
            await mutations.delete.mutateAsync(id);
            toast.success("Projeto apagado com sucesso!");
            return true;
        } catch (error) {
            toast.error("Erro ao apagar projeto.");
            return false;
        }
    };

    const bulkDeleteProjetos = async (ids: (string | number)[]) => {
        if (ids.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer apagar ${ids.length} projetos?`,
                cancelText: "Cancelar",
                confirmText: "Apagar",
            }
        );
        if (!confirmacao) return;

        try {
            await mutations.bulkDelete.mutateAsync(ids);
            toast.success(`${ids.length} projetos apagados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao apagar projetos.");
        }
    };

    const approveProjeto = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer publicar este projeto?`,
                    cancelText: "Cancelar",
                    confirmText: "Publicar",
                }
            );
            if (!confirmacao) return;

            await mutations.approve.mutateAsync(id);
            toast.success("Projeto publicado com sucesso!");
        } catch (error) {
            toast.error("Erro ao publicar projeto.");
        }
    };

    const disapproveProjeto = async (id: string | number) => {
        try {
            const confirmacao = await confirm(
                {
                    title: "Confirmação de Ação",
                    message: `Tem a certeza que quer ocultar este projeto?`,
                    cancelText: "Cancelar",
                    confirmText: "Ocultar",
                }
            );
            if (!confirmacao) return;

            await mutations.disapprove.mutateAsync(id);
            toast.success("Projeto ocultado com sucesso!");
        } catch (error) {
            toast.error("Erro ao ocultar projeto.");
        }
    };

    const bulkEditProjetos = async (editedData: BulkUpdateConteudoItem[]) => {
        if (editedData.length === 0) return;

        const confirmacao = await confirm(
            {
                title: "Confirmação de Ação",
                message: `Tem a certeza que quer editar ${editedData.length} projetos?`,
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
            toast.success(`${editedData.length} projetos editados com sucesso!`);
        } catch (error) {
            toast.error("Erro ao editar projetos.");
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
        createProjeto,
        editProjeto,
        deleteProjeto,
        approveProjeto,
        disapproveProjeto,
        bulkDeleteProjetos,
        bulkEditProjetos,

        createAnexo,
        bulkCreateAnexos,
        deleteAnexo,
        bulkDeleteAnexos,
        isLoading: mutations.isLoading,
    };
};