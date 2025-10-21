"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Insights } from "@/components/site/blog";

import { useConteudos } from "@/lib/api/conteudos-public";

// @ts-ignore
import './page.css'

export default function Causas() {

    const { data: noticias, isLoading, error } = useConteudos({ tipoConteudoId: 16 });
    const noticiasOrdenadas = noticias ? [...noticias.data]
        .sort((a, b) => {
            const dataA = a.publicado_em ? new Date(a.publicado_em).getTime() : 0;
            const dataB = b.publicado_em ? new Date(b.publicado_em).getTime() : 0;
            return dataB - dataA;
        }) : [];

    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-6Donv framer-q258S framer-k7twfa"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <Insights noticias={noticiasOrdenadas} />
            </div>
            <Footer />
        </>
    );
}
