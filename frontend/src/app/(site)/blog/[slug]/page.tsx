"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { TopSection, MainSection, RelatedBlogs } from "@/components/site/blog/especifico";
import { useConteudos, useConteudoBySlug, useConteudosDestaque } from "@/lib/api/conteudos-public";
import { useParams } from "next/navigation";

// @ts-ignore
import './page.css'

export default function NoticiaEspecifica() {
    const params = useParams();
    const slug = params.slug as string;

    const { data: noticia, isLoading, error } = useConteudoBySlug(slug);
    const { data: noticias, isLoading: isLoadingNoticias, error: errorNoticias } = useConteudos({ tipoConteudoId: 16 });

    const shuffle = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const { data: noticiasRelated, isLoading: isLoadingDestaque, error: errorDestaque } = useConteudosDestaque(3, 16);

    if (isLoading || isLoadingNoticias) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>A carregar blog...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !noticia) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Notícia não encontrada.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-tPSbv framer-jRQOc framer-q258S framer-uhp5V framer-Qg7Vs framer-oGK70 framer-RcNjK framer-u5oc0 framer-4n4vX framer-yjG4E framer-oKbxU framer-U1h5s framer-ywbeel"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <TopSection noticia={noticia} />
                <MainSection noticia={noticia} />
                <RelatedBlogs noticias={noticiasRelated!} />
            </div>
            <Footer />
        </>
    );
}
