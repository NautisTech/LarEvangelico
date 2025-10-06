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
        createEvento,
        editEvento,
        deleteEvento,
        approveEvento,
        disapproveEvento,
        bulkDeleteEventos,
        bulkEditEventos,
        isLoading: EventoActionsLoading,
    } = Actions(temPermissaoEspecifica(`${Modulo.Conteudos}_${TipoPermissao.Aprovar}`));

    const {
        data: utilizadoresGeral = [],
        isLoading: isLoadingUtilizadoresAdmin,
        refetch: refetchUtilizadoresAdmin,
    } = useUtilizadorBaseHook();
    const {
        data: eventosGeral = [],
        isLoading: isLoadingEventosAdmin,
        refetch: refetchEventosAdmin,
    } = useConteudoHook(TipoConteudo.Evento);
    const {
        data: utilizadoresEntidade = [],
        isLoading: isLoadingUtilizadoresByEntidade,
        refetch: refetchUtilizadoresEntidade,
    } = useUtilizadorByEntidadeBaseHook(entidadesData?.[0]?.id ?? 0);
    const {
        data: eventosEntidade = [],
        isLoading: isLoadingEventosEntidade,
        refetch: refetchEventosEntidade,
    } = useConteudoByEntidadeHook(entidadesData?.[0]?.id ?? 0, TipoConteudo.Evento);

    const utilizadoresData = isAdmin ? utilizadoresGeral : utilizadoresEntidade;
    const eventosData = isAdmin ? eventosGeral : eventosEntidade;
    const isLoading = isAdmin
        ? isLoadingUtilizadoresAdmin || isLoadingEventosAdmin
        : isLoadingUtilizadoresByEntidade || isLoadingEventosEntidade;

    const refetch = () => {
        if (isAdmin) {
            refetchUtilizadoresAdmin?.();
            refetchEventosAdmin?.();
        } else {
            refetchUtilizadoresEntidade?.();
            refetchEventosEntidade?.();
        }
    };

    // acoes inline 
    const inlineDelete = async (evento: Conteudo) => {
        if (!evento.id) return;
        await deleteEvento(evento.id, evento.titulo);
    };

    const inlineEdit = (evento: Conteudo) => {
        router.push(`/admin/editor?id=${evento.id}`);
        refetch();
    };

    const inlineApprove = async (evento: Conteudo) => {
        if (!evento.id) return;
        approveEvento(evento.id);
    };

    const inlineDisapprove = async (evento: Conteudo) => {
        if (!evento.id) return;
        disapproveEvento(evento.id);
    };

    // acoes header
    const actionsCreate = () => {
        router.push(`/admin/editor?tipo=${TipoConteudo.Evento}`);
        refetch();
    };

    // const actionsEdit = (selectedIds: (string | number)[]) => {
    //     if (selectedIds.length === 1) {
    //         const evento = eventosData.find(g => g.id?.toString() === selectedIds[0]);
    //         if (evento) {
    //             inlineEdit(evento);
    //         }
    //     } else if (selectedIds.length > 1) {
    //         // Por enquanto, só permite editar um de cada vez
    //         toast.info("Selecione apenas um evento para editar");
    //     }
    // };

    const actionsDelete = (selectedIds: (string | number)[]) => {
        if (selectedIds.length === 1) {
            deleteEvento(selectedIds[0]);
        } else if (selectedIds.length > 1) {
            bulkDeleteEventos(selectedIds);
        }
    };

    return {
        eventosData,
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

        EventoActionsLoading,

        modulo: Modulo.Conteudos,
    };
}
