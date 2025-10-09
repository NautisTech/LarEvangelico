"use client";

import { GridBase } from "@/components/admin";
import { Functions } from "@/components/admin/eventos";
import { Image, NewspaperIcon, Users } from "lucide-react";

export function Grid() {
    const {
        eventosData,
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

        modulo,
    } = Functions();

    return (
        <>
            <GridBase
                modulo={modulo}

                icon={<NewspaperIcon className="rules-icon" size={64} />}
                titulo="Eventos"
                subtitulo="Eventos de destaque no site público"
                temAcoes={true}

                count={eventosData.length || 0}
                data={eventosData}

                onInlineEdit={inlineEdit}
                onInlineDelete={inlineDelete}
                onInlineApprove={inlineApprove}
                onInlineDisapprove={inlineDisapprove}

                onReloadAction={refetch}
                onCreateAction={actionsCreate}
                // onEditAction={(selectedIds) => actionsEdit(selectedIds)} // desativado por enquanto
                onDeleteAction={(selectedIds) => actionsDelete(selectedIds)}

                isLoading={isLoading || EventoActionsLoading}
            />
        </>
    );
}
