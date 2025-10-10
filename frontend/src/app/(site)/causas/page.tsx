"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Main, Insights } from "@/components/site/causas";
import { useConteudoHook } from "@/hooks";
import { TipoConteudo } from "@/utils";

// @ts-ignore
import './page.css'

export default function Causas() {
    const { data: causas, isLoading, error } = useConteudoHook(TipoConteudo.Causa, true);

    // Ordenar por data de publicação (mais recente primeiro)
    const causasOrdenadas = causas ? [...causas]
        .sort((a, b) => {
            const dataA = a.publicado_em ? new Date(a.publicado_em).getTime() : 0;
            const dataB = b.publicado_em ? new Date(b.publicado_em).getTime() : 0;
            return dataB - dataA;
        }) : [];

    // Primeira causa para o Main, resto para Insights
    const causaPrincipal = causasOrdenadas.length > 0 ? causasOrdenadas[0] : null;
    const outrosCausas = causasOrdenadas.slice(1);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>A carregar causas...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Erro ao carregar causas.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-Oz8yq framer-q258S framer-jRQOc framer-uhp5V framer-i8u7wv"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <Main causa={causaPrincipal} />
                <Insights causas={outrosCausas} />
            </div>
            <Footer />
        </>
    );
}
