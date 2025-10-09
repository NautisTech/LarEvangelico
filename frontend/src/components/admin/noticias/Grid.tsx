"use client";

import { GridBase } from "@/components/admin";
import { Functions } from "@/components/admin/noticias";
import { Image, NewspaperIcon, Users } from "lucide-react";

export function Grid() {
    const {
        noticiasData,
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

        modulo,
    } = Functions();

    return (
        <>
            <GridBase
                modulo={modulo}

                icon={<NewspaperIcon className="rules-icon" size={64} />}
                titulo="Notícias"
                subtitulo="Notícias de destaque no site público"
                temAcoes={true}

                count={noticiasData.length || 0}
                data={noticiasData}

                onInlineEdit={inlineEdit}
                onInlineDelete={inlineDelete}
                onInlineApprove={inlineApprove}
                onInlineDisapprove={inlineDisapprove}

                onReloadAction={refetch}
                onCreateAction={actionsCreate}
                // onEditAction={(selectedIds) => actionsEdit(selectedIds)} // desativado por enquanto
                onDeleteAction={(selectedIds) => actionsDelete(selectedIds)}

                isLoading={isLoading || NoticiaActionsLoading}
            />
        </>
    );
}
