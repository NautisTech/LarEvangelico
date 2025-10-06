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
        createNoticia,
        editNoticia,
        deleteNoticia,
        approveNoticia,
        disapproveNoticia,
        bulkDeleteNoticias,
        bulkEditNoticias,
        isLoading: NoticiaActionsLoading,
    } = Actions(temPermissaoEspecifica(`${Modulo.Conteudos}_${TipoPermissao.Aprovar}`));

    const {
        data: utilizadoresGeral = [],
        isLoading: isLoadingUtilizadoresAdmin,
        refetch: refetchUtilizadoresAdmin,
    } = useUtilizadorBaseHook();
    const {
        data: noticiasGeral = [],
        isLoading: isLoadingNoticiasAdmin,
        refetch: refetchNoticiasAdmin,
    } = useConteudoHook(TipoConteudo.Noticia);
    const {
        data: utilizadoresEntidade = [],
        isLoading: isLoadingUtilizadoresByEntidade,
        refetch: refetchUtilizadoresEntidade,
    } = useUtilizadorByEntidadeBaseHook(entidadesData?.[0]?.id ?? 0);
    const {
        data: noticiasEntidade = [],
        isLoading: isLoadingNoticiasEntidade,
        refetch: refetchNoticiasEntidade,
    } = useConteudoByEntidadeHook(entidadesData?.[0]?.id ?? 0, TipoConteudo.Noticia);

    const utilizadoresData = isAdmin ? utilizadoresGeral : utilizadoresEntidade;
    const noticiasData = isAdmin ? noticiasGeral : noticiasEntidade;
    const isLoading = isAdmin
        ? isLoadingUtilizadoresAdmin || isLoadingNoticiasAdmin
        : isLoadingUtilizadoresByEntidade || isLoadingNoticiasEntidade;

    const refetch = () => {
        if (isAdmin) {
            refetchUtilizadoresAdmin?.();
            refetchNoticiasAdmin?.();
        } else {
            refetchUtilizadoresEntidade?.();
            refetchNoticiasEntidade?.();
        }
    };

    // acoes inline 
    const inlineDelete = async (noticia: Conteudo) => {
        if (!noticia.id) return;
        await deleteNoticia(noticia.id, noticia.titulo);
    };

    const inlineEdit = (noticia: Conteudo) => {
        router.push(`/admin/editor?id=${noticia.id}`);
        refetch();
    };

    const inlineApprove = async (noticia: Conteudo) => {
        if (!noticia.id) return;
        approveNoticia(noticia.id);
    };

    const inlineDisapprove = async (noticia: Conteudo) => {
        if (!noticia.id) return;
        disapproveNoticia(noticia.id);
    };

    // acoes header
    const actionsCreate = () => {
        router.push(`/admin/editor?tipo=${TipoConteudo.Noticia}`);
        refetch();
    };

    // const actionsEdit = (selectedIds: (string | number)[]) => {
    //     if (selectedIds.length === 1) {
    //         const noticia = noticiasData.find(g => g.id?.toString() === selectedIds[0]);
    //         if (noticia) {
    //             inlineEdit(noticia);
    //         }
    //     } else if (selectedIds.length > 1) {
    //         // Por enquanto, só permite editar um de cada vez
    //         toast.info("Selecione apenas um noticia para editar");
    //     }
    // };

    const actionsDelete = (selectedIds: (string | number)[]) => {
        if (selectedIds.length === 1) {
            deleteNoticia(selectedIds[0]);
        } else if (selectedIds.length > 1) {
            bulkDeleteNoticias(selectedIds);
        }
    };

    return {
        noticiasData,
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

        NoticiaActionsLoading,

        modulo: Modulo.Conteudos,
    };
}
