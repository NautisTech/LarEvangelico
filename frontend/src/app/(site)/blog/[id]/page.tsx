"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { TopSection, MainSection, RelatedBlogs } from "@/components/site/blog/especifico";
import { useConteudoByIdHook, useConteudoHook } from "@/hooks";
import { useParams } from "next/navigation";
import { TipoConteudo } from "@/utils";

// @ts-ignore
import './page.css'

export default function NoticiaEspecifica() {
    const params = useParams();
    const id = params.id as string;

    const { data: noticia, isLoading, error } = useConteudoByIdHook(id, true);
    const { data: noticias } = useConteudoHook(TipoConteudo.Noticia, true);

    const shuffle = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    let noticiasRelated = shuffle(noticias?.filter(c => c.id !== noticia?.id) || []);
    noticiasRelated = noticiasRelated.length >= 3 ? noticiasRelated.slice(0, 3) : noticiasRelated;

    if (isLoading) {
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
                <RelatedBlogs noticias={noticiasRelated} />
            </div>
            <Footer />
        </>
    );
}
