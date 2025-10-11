"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { MainBanner, MainContent, Causes } from "@/components/site/causas/especifica";
import { useConteudoByIdHook, useConteudoHook } from "@/hooks";
import { useParams } from "next/navigation";
import { TipoConteudo } from "@/utils";

// @ts-ignore
import './page.css'

export default function CausaEspecifica() {
    const params = useParams();
    const id = params.id as string;

    const { data: causa, isLoading, error } = useConteudoByIdHook(id, true);
    const { data: causas } = useConteudoHook(TipoConteudo.Causa, true);

    const shuffle = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    let causasRelated = shuffle(causas?.filter(c => c.id !== causa?.id) || []);
    causasRelated = causasRelated.length >= 3 ? causasRelated.slice(0, 3) : causasRelated;

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>A carregar causa...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !causa) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Causa não encontrada.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-NTQ6f framer-q258S framer-uhp5V framer-Qg7Vs framer-oGK70 framer-RcNjK framer-u5oc0 framer-jRQOc framer-4n4vX framer-yjG4E framer-U1h5s framer-utjgut"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <MainBanner causa={causa} />
                <MainContent causa={causa} />
                <Causes causas={causasRelated} />
            </div>
            <Footer />
        </>
    );
}
