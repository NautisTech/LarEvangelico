"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { AboutSection, BlogSection, Causes, Customers, Donate, MainBanner, Newsletter, OurProjects, Testimonial, Volunteers, WhyChooseUs } from "@/components/site/home";

// @ts-ignore
import './page.css'
import { useConteudos } from "@/lib/api/conteudos-public";

export default function Home() {

  const { data: causas, isLoading: isLoadingCausas, error: errorCausas } = useConteudos({ tipoConteudoId: 17 });

  // Ordenar por data de publicação (mais recente primeiro)
  const causasOrdenadas = causas ? [...causas.data]
    .sort((a, b) => {
      const dataA = a.publicado_em ? new Date(a.publicado_em).getTime() : 0;
      const dataB = b.publicado_em ? new Date(b.publicado_em).getTime() : 0;
      return dataB - dataA;
    }) : [];

  const causasTop = causasOrdenadas.length >= 3 ? causasOrdenadas.slice(0, 3) : causasOrdenadas;

  const { data: noticias, isLoading: isLoadingNoticias, error: errorNoticias } = useConteudos({ tipoConteudoId: 16 });

  // Ordenar por data de publicação (mais recente primeiro)
  const noticiasOrdenadas = noticias ? [...noticias.data]
    .sort((a, b) => {
      const dataA = a.publicado_em ? new Date(a.publicado_em).getTime() : 0;
      const dataB = b.publicado_em ? new Date(b.publicado_em).getTime() : 0;
      return dataB - dataA;
    }) : [];

  // Primeira causa para o Main, resto para Insights
  const noticiasTop = noticiasOrdenadas.length >= 3 ? noticiasOrdenadas.slice(0, 3) : noticiasOrdenadas;

  return (
    <>
      <Navbar />
      <div data-framer-root=""
        className="framer-eiJjF framer-q258S framer-Qg7Vs framer-jRQOc framer-uhp5V framer-oKbxU framer-U1h5s framer-2Vypl framer-RcNjK framer-72rtr7"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
        <div className="framer-hq0l56" data-framer-name="Page Main">
          <MainBanner />
          <AboutSection />
          <Causes causas={causasTop} isLoading={isLoadingCausas} />
          <Volunteers />
          <WhyChooseUs />
          <Customers />
          <OurProjects />
          <BlogSection blogs={noticiasTop} isLoading={isLoadingNoticias} />
          <Donate />
          <Testimonial />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  );
}
