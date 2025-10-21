"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { MainBanner, MainContent, Causes } from "@/components/site/causas/especifica";
import { useParams } from "next/navigation";
import { useConteudos, useConteudoBySlug, useConteudosDestaque } from "@/lib/api/conteudos-public";

// @ts-ignore
import './page.css'

export default function CausaEspecifica() {
    const params = useParams();
    const slug = params.slug as string;

    const { data: causa, isLoading: isLoadingSlug, error: errorSlug } = useConteudoBySlug(slug);
    const { data: causasRelated, isLoading: isLoadingDestaque, error: errorDestaque } = useConteudosDestaque(3, 17);

    if (isLoadingSlug || isLoadingDestaque) {
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

    if (errorSlug || errorDestaque || !causa) {
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
                <Causes causas={causasRelated ?? []} />
            </div>
            <Footer />
        </>
    );
}
