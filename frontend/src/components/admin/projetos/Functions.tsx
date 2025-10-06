"use client";

import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useAuthContext } from "@/context";
import { Entidade, Conteudo, Utilizador, Permissao } from "@/models";
import { useUtilizadorBaseHook, useConteudoHook, useConteudoByEntidadeHook, usePermissaoHook, usePermissoesHelpers, useEntidadeHook, useUtilizadorByEntidadeBaseHook, useConfirm } from "@/hooks";
import { DropdownList, FilterHeader } from "@/components";
import { TipoFiltro, Modulo, TipoPermissao, TipoConteudo } from "@/utils";
import { Actions } from "./Actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function Functions() {
    const { data: entidadesData } = useEntidadeHook();
    const { isAdmin, utilizador } = useAuthContext();
    const { temPermissaoEspecifica } = usePermissoesHelpers();
    const { confirm } = useConfirm();
    const router = useRouter();

    const {
        createProjeto,
        editProjeto,
        deleteProjeto,
        approveProjeto,
        disapproveProjeto,
        bulkDeleteProjetos,
        bulkEditProjetos,
        isLoading: ProjetoActionsLoading,
    } = Actions(temPermissaoEspecifica(`${Modulo.Conteudos}_${TipoPermissao.Aprovar}`));

    const {
        data: utilizadoresGeral = [],
        isLoading: isLoadingUtilizadoresAdmin,
        refetch: refetchUtilizadoresAdmin,
    } = useUtilizadorBaseHook();
    const {
        data: projetosGeral = [],
        isLoading: isLoadingProjetosAdmin,
        refetch: refetchProjetosAdmin,
    } = useConteudoHook(TipoConteudo.Projeto);
    const {
        data: utilizadoresEntidade = [],
        isLoading: isLoadingUtilizadoresByEntidade,
        refetch: refetchUtilizadoresEntidade,
    } = useUtilizadorByEntidadeBaseHook(entidadesData?.[0]?.id ?? 0);
    const {
        data: projetosEntidade = [],
        isLoading: isLoadingProjetosEntidade,
        refetch: refetchProjetosEntidade,
    } = useConteudoByEntidadeHook(entidadesData?.[0]?.id ?? 0, TipoConteudo.Projeto);

    const utilizadoresData = isAdmin ? utilizadoresGeral : utilizadoresEntidade;
    const projetosData = isAdmin ? projetosGeral : projetosEntidade;
    const isLoading = isAdmin
        ? isLoadingUtilizadoresAdmin || isLoadingProjetosAdmin
        : isLoadingUtilizadoresByEntidade || isLoadingProjetosEntidade;

    const refetch = () => {
        if (isAdmin) {
            refetchUtilizadoresAdmin?.();
            refetchProjetosAdmin?.();
        } else {
            refetchUtilizadoresEntidade?.();
            refetchProjetosEntidade?.();
        }
    };

    // acoes inline 
    const inlineDelete = async (projeto: Conteudo) => {
        if (!projeto.id) return;
        await deleteProjeto(projeto.id, projeto.titulo);
    };

    const inlineEdit = (projeto: Conteudo) => {
        router.push(`/admin/editor?id=${projeto.id}`);
        refetch();
    };

    const inlineApprove = async (projeto: Conteudo) => {
        if (!projeto.id) return;
        approveProjeto(projeto.id);
    };

    const inlineDisapprove = async (projeto: Conteudo) => {
        if (!projeto.id) return;
        disapproveProjeto(projeto.id);
    };

    // acoes header
    const actionsCreate = () => {
        router.push(`/admin/editor?tipo=${TipoConteudo.Projeto}`);
        refetch();
    };

    // const actionsEdit = (selectedIds: (string | number)[]) => {
    //     if (selectedIds.length === 1) {
    //         const projeto = projetosData.find(g => g.id?.toString() === selectedIds[0]);
    //         if (projeto) {
    //             inlineEdit(projeto);
    //         }
    //     } else if (selectedIds.length > 1) {
    //         // Por enquanto, só permite editar um de cada vez
    //         toast.info("Selecione apenas um projeto para editar");
    //     }
    // };

    const actionsDelete = (selectedIds: (string | number)[]) => {
        if (selectedIds.length === 1) {
            deleteProjeto(selectedIds[0]);
        } else if (selectedIds.length > 1) {
            bulkDeleteProjetos(selectedIds);
        }
    };

    return {
        projetosData,
        utilizadoresData,
        isLoading,

        actionsCreate,
        inlineEdit,
        inlineDelete,
        inlineApprove,
        inlineDisapprove,
        // actionsEdit,
        actionsDelete,
        refetch,

        ProjetoActionsLoading,

        modulo: Modulo.Conteudos,
    };
}
