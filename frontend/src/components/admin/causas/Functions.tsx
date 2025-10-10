"use client";

import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useAuthContext } from "@/context";
import { Conteudo, Utilizador } from "@/models";
import { useUtilizadorBaseHook, useConteudoHook, useConfirm } from "@/hooks";
import { DropdownList, FilterHeader } from "@/components/admin";
import { TipoFiltro, Modulo, TipoConteudo } from "@/utils";
import { Actions } from "./Actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function Functions() {
    const { confirm } = useConfirm();
    const router = useRouter();

    const {
        createCausa,
        editCausa,
        deleteCausa,
        approveCausa,
        disapproveCausa,
        bulkDeleteCausas,
        bulkEditCausas,
        isLoading: CausaActionsLoading,
    } = Actions();

    const {
        data: utilizadoresData = [],
        isLoading: isLoadingUtilizadoresAdmin,
        refetch: refetchUtilizadoresAdmin,
    } = useUtilizadorBaseHook();
    const {
        data: causasData = [],
        isLoading: isLoadingCausasAdmin,
        refetch: refetchCausasAdmin,
    } = useConteudoHook(TipoConteudo.Causa);

    const isLoading = isLoadingUtilizadoresAdmin || isLoadingCausasAdmin

    const refetch = () => {
        refetchUtilizadoresAdmin?.();
        refetchCausasAdmin?.();
    };

    // acoes inline 
    const inlineDelete = async (causa: Conteudo) => {
        if (!causa.id) return;
        await deleteCausa(causa.id, causa.titulo);
    };

    const inlineEdit = (causa: Conteudo) => {
        router.push(`/admin/editor?id=${causa.id}`);
        refetch();
    };

    const inlineApprove = async (causa: Conteudo) => {
        if (!causa.id) return;
        approveCausa(causa.id);
    };

    const inlineDisapprove = async (causa: Conteudo) => {
        if (!causa.id) return;
        disapproveCausa(causa.id);
    };

    // acoes header
    const actionsCreate = () => {
        router.push(`/admin/editor?tipo=${TipoConteudo.Causa}`);
        refetch();
    };

    // const actionsEdit = (selectedIds: (string | number)[]) => {
    //     if (selectedIds.length === 1) {
    //         const causa = causasData.find(g => g.id?.toString() === selectedIds[0]);
    //         if (causa) {
    //             inlineEdit(causa);
    //         }
    //     } else if (selectedIds.length > 1) {
    //         // Por enquanto, só permite editar um de cada vez
    //         toast.info("Selecione apenas um causa para editar");
    //     }
    // };

    const actionsDelete = (selectedIds: (string | number)[]) => {
        if (selectedIds.length === 1) {
            deleteCausa(selectedIds[0]);
        } else if (selectedIds.length > 1) {
            bulkDeleteCausas(selectedIds);
        }
    };

    return {
        causasData,
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

        CausaActionsLoading,

        modulo: Modulo.Conteudos,
    };
}
