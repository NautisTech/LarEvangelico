"use client";

import { GridBase } from "@/components";
import { Functions } from "@/components/admin/conteudos/projetos";
import { Image, NewspaperIcon, Users } from "lucide-react";

export function Grid() {
    const {
        projetosData,
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

        modulo,
    } = Functions();

    return (
        <>
            <GridBase
                modulo={modulo}

                icon={<NewspaperIcon className="rules-icon" size={64} />}
                titulo="Projetos"
                subtitulo="Projetos de destaque no site público"
                temAcoes={true}

                count={projetosData.length || 0}
                data={projetosData}

                onInlineEdit={inlineEdit}
                onInlineDelete={inlineDelete}
                onInlineApprove={inlineApprove}
                onInlineDisapprove={inlineDisapprove}

                onReloadAction={refetch}
                onCreateAction={actionsCreate}
                // onEditAction={(selectedIds) => actionsEdit(selectedIds)} // desativado por enquanto
                onDeleteAction={(selectedIds) => actionsDelete(selectedIds)}

                isLoading={isLoading || ProjetoActionsLoading}
            />
        </>
    );
}
