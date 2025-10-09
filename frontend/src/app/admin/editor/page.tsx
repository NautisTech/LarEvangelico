"use client";

import { ContentEditor } from "@/components/admin/editor";
import { TipoConteudo } from "@/utils";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/common";
import { useConteudoMutations, useConteudoByIdHook, useAnexoMutations } from "@/hooks";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context";
import { Modulo, TipoAnexo } from "@/utils";
import { CreateAnexoData } from "@/services";

function EditorContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { create, update } = useConteudoMutations();
    const { create: createAnexo } = useAnexoMutations();

    const conteudoId = searchParams.get('id');
    const isEditing = conteudoId !== null;
    const { data: conteudo, isLoading: isLoadingConteudo } = useConteudoByIdHook(conteudoId!, false);

    const tipoConteudo: TipoConteudo = conteudo && conteudo.tipo ? conteudo.tipo : searchParams.get('tipo') as TipoConteudo;

    const handleSave = async (conteudo: any, filesData: { imagemPrincipal: File | null, anexos: File[] }) => {
        try {
            let savedConteudo;

            if (isEditing && conteudoId) {
                // Editar conteúdo existente
                savedConteudo = await update.mutateAsync({
                    id: conteudoId,
                    conteudo: {
                        ...conteudo,
                        tipo: tipoConteudo
                    }
                });
                toast.success("Conteúdo editado com sucesso!");
            } else {
                // Criar novo conteúdo
                savedConteudo = await create.mutateAsync({
                    data: {
                        ...conteudo,
                        tipo: tipoConteudo
                    }
                });
                toast.success("Conteúdo criado com sucesso!");
            }

            const { imagemPrincipal, anexos } = filesData;
            const filesToUpload: File[] = [];

            if (imagemPrincipal) filesToUpload.push(imagemPrincipal);
            filesToUpload.push(...anexos);

            if (filesToUpload.length > 0 && savedConteudo?.id) {
                for (let i = 0; i < filesToUpload.length; i++) {
                    const file = filesToUpload[i];
                    const isPrincipal = file === imagemPrincipal;

                    const createAnexoDto: CreateAnexoData = {
                        nome: file.name,
                        valor: '',
                        tipo: TipoAnexo.JPG,
                        principal: isPrincipal,
                        ordem: i,
                        metadados: null,
                        conteudo: savedConteudo
                    };

                    await createAnexo.mutateAsync({
                        file,
                        dto: createAnexoDto
                    });
                }
            }

            router.back();
        } catch (error) {
            toast.error("Erro ao salvar conteúdo. Tente novamente.");
        }
    };

    if (isEditing && isLoadingConteudo) {
        return <Loading />;
    }

    return (
        <ContentEditor
            tipoConteudo={tipoConteudo}
            conteudo={isEditing && conteudo ? conteudo : null}
            onSave={handleSave}
        />
    );
}

export default function EditorPage() {
    return (
        <Suspense fallback={<Loading />}>
            <EditorContent />
        </Suspense>
    );
}