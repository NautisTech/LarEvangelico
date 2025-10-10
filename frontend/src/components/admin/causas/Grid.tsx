"use client";

import { GridBase } from "@/components/admin";
import { Functions } from "@/components/admin/causas";
import { Image, Users } from "lucide-react";

export function Grid() {
    const {
        causasData,
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

        modulo,
    } = Functions();

    return (
        <>
            <GridBase
                modulo={modulo}

                icon={<Image className="rules-icon" size={64} />}
                titulo="Causas"
                subtitulo="Causas de destaque no site público"
                temAcoes={true}

                count={causasData.length || 0}
                data={causasData}

                onInlineEdit={inlineEdit}
                onInlineDelete={inlineDelete}
                onInlineApprove={inlineApprove}
                onInlineDisapprove={inlineDisapprove}

                onReloadAction={refetch}
                onCreateAction={actionsCreate}
                // onEditAction={(selectedIds) => actionsEdit(selectedIds)} // desativado por enquanto
                onDeleteAction={(selectedIds) => actionsDelete(selectedIds)}

                isLoading={isLoading || CausaActionsLoading}
            />
        </>
    );
}
