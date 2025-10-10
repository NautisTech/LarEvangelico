"use client";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { AboutSection, BlogSection, Causes, Customers, Donate, MainBanner, Newsletter, OurProjects, Testimonial, Volunteers, WhyChooseUs } from "@/components/site/home";

// @ts-ignore
import './page.css'
import { TipoConteudo } from "@/utils";
import { useConteudoHook } from "@/hooks";

export default function Home() {

  const { data: causas, isLoading, error } = useConteudoHook(TipoConteudo.Causa, true);

  // Ordenar por data de publicação (mais recente primeiro)
  const causasOrdenadas = causas ? [...causas]
    .sort((a, b) => {
      const dataA = a.publicado_em ? new Date(a.publicado_em).getTime() : 0;
      const dataB = b.publicado_em ? new Date(b.publicado_em).getTime() : 0;
      return dataB - dataA;
    }) : [];

  // Primeira causa para o Main, resto para Insights
  const causasTop = causasOrdenadas.length > 0 ? causasOrdenadas.slice(0, 3) : [];

  return (
    <>
      <Navbar />
      <div data-framer-root=""
        className="framer-eiJjF framer-q258S framer-Qg7Vs framer-jRQOc framer-uhp5V framer-oKbxU framer-U1h5s framer-2Vypl framer-RcNjK framer-72rtr7"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
        <div className="framer-hq0l56" data-framer-name="Page Main">
          <MainBanner />
          <AboutSection />
          <Causes causas={causasTop} isLoading={isLoading} />
          <Volunteers />
          <WhyChooseUs />
          <Customers />
          <OurProjects />
          <BlogSection />
          <Donate />
          <Testimonial />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  );
}
