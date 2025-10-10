"use client";

import React from "react";
import { Grid as NoticiasGrid } from "@/components/admin/noticias";
import { Grid as CausasGrid } from "@/components/admin/causas";
import { useModuleTabs, TipoTab } from "@/context";
import { BarChart3, FileText } from "lucide-react";
import { Modulo, TipoConteudo } from "@/utils";
import { Loading } from "@/components/common";
import { useUtilizadorHook } from "@/hooks/Utilizador";
import { useConteudoGeralHook } from "@/hooks";

export default function ConteudosPage() {
    const { activeTab } = useModuleTabs();

    const { data: conteudosData = [], isLoading: isLoadingConteudosData } = useConteudoGeralHook();

    const isLoadingConteudos = isLoadingConteudosData;
    return (
        <div className="space-y-6">
            {activeTab === TipoTab.tabela && (
                <div>
                    <NoticiasGrid />
                </div>
            )}

            {activeTab === TipoTab.causas && (
                <div>
                    <CausasGrid />
                </div>
            )}

            {activeTab === TipoTab.dashboard && (
                <div>
                    {/* {isLoadingConteudos ? (
                            <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow">
                                <div className="text-center">
                                    <Loading />
                                </div>
                            </div>
                        ) : conteudosData.length === 0 ? (
                            <div className="rounded-lg p-8">
                                <div className="text-center">
                                    <BarChart3 className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-yellow-800 mb-2">Nenhum conteúdo encontrado</h3>
                                    <p className="text-yellow-600">
                                        Adicione alguns conteúdos nas abas  para ver as estatísticas aqui.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <ConteudoDashboard conteudos={conteudosData} comentarios={comentariosData} />
                        )} */}
                </div>
            )}
        </div>
    );
}