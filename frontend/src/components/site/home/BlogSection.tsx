// @ts-nocheck
"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Conteudo } from '@/models';
import { TipoAnexo } from '../../../utils/TipoAnexo';
import { TipoConteudo } from '@/utils';

export function BlogSection() {
    const router = useRouter();
    const [noticias, setNoticias] = useState<Conteudo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulação de dados da API
        // TODO: Substituir por chamada real à API
        const mockNoticias: Conteudo[] = [
            new Conteudo({
                id: 1,
                titulo: "Celebração dos 76 Anos do Lar Evangélico",
                subtitulo: "Uma jornada de fé, dedicação e transformação de vidas",
                corpo: "O Lar Evangélico celebra 76 anos de serviço dedicado à comunidade, proporcionando apoio e cuidado a crianças, jovens e idosos.",
                anexos: [
                    {
                        id: 1,
                        nome: "celebracao-76-anos.jpg",
                        valor: "/images/84D3YC9gPH9F7d3pORzAz25QrgI.jpg",
                        tipo: TipoAnexo.JPG,
                        principal: true,
                        ordem: 1,
                        tamanho: null,
                        metadados: null,
                        criado_em: new Date(),
                        atualizado_em: null,
                        conteudo: null
                    }
                ],
                publico: true,
                tipo: TipoConteudo.Noticia,
                publicado_em: new Date('2024-03-15'),
                criado_em: new Date(),
                atualizado_em: null,
                atualizado_por: null,
                visualizacoes: 0,
                data_inicio: null,
                data_fim: null
            }),
            new Conteudo({
                id: 2,
                titulo: "Novo Programa de Apoio à Infância",
                subtitulo: "Expandindo horizontes e oportunidades para as nossas crianças",
                corpo: "Lançamento de um novo programa educacional que visa proporcionar mais oportunidades de aprendizagem e desenvolvimento às crianças do Lar.",
                anexos: [
                    {
                        id: 2,
                        nome: "programa-infancia.jpg",
                        valor: "/images/6HJpGnWZNHmb6dTcAtnneDOlw.jpg",
                        tipo: TipoAnexo.JPG,
                        principal: true,
                        ordem: 1,
                        tamanho: null,
                        metadados: null,
                        criado_em: new Date(),
                        atualizado_em: null,
                        conteudo: null
                    }
                ],
                publico: true,
                tipo: TipoConteudo.Noticia,
                publicado_em: new Date('2024-02-20'),
                criado_em: new Date(),
                atualizado_em: null,
                atualizado_por: null,
                visualizacoes: 0,
                data_inicio: null,
                data_fim: null
            }),
            new Conteudo({
                id: 3,
                titulo: "Campanha Solidária de Inverno",
                subtitulo: "Juntos pelo bem-estar de toda a comunidade",
                corpo: "A nossa campanha solidária de inverno arrecadou roupas, cobertores e alimentos para apoiar famílias em situação de vulnerabilidade.",
                anexos: [
                    {
                        id: 3,
                        nome: "campanha-inverno.jpg",
                        valor: "/images/34vrZm02D7lOwWCHsb0FfqNPCE0.jpg",
                        tipo: TipoAnexo.JPG,
                        principal: true,
                        ordem: 1,
                        tamanho: null,
                        metadados: null,
                        criado_em: new Date(),
                        atualizado_em: null,
                        conteudo: null
                    }
                ],
                publico: true,
                tipo: TipoConteudo.Noticia,
                publicado_em: new Date('2024-01-10'),
                criado_em: new Date(),
                atualizado_em: null,
                atualizado_por: null,
                visualizacoes: 0,
                data_inicio: null,
                data_fim: null
            })
        ];

        // Simular delay de API
        setTimeout(() => {
            setNoticias(mockNoticias);
            setLoading(false);
        }, 500);
    }, []);

    const getImagemPrincipal = (noticia: Conteudo) => {
        if (!noticia.anexos || noticia.anexos.length === 0) {
            return "/images/placeholder.jpg";
        }
        const imagemPrincipal = noticia.anexos.find(anexo => anexo.principal);
        return imagemPrincipal?.valor || noticia.anexos[0]?.valor || "/images/placeholder.jpg";
    };

    const formatarData = (data: Date) => {
        return new Intl.DateTimeFormat('pt-PT', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(data));
    };

    const renderNoticiaCard = (noticia: Conteudo) => (
        <div key={noticia.id} className="framer-hpeeo6" style={{
            "willChange": "transform",
            "opacity": "1", "transform": "none"
        }}>
            <div className="ssr-variant hidden-mqny1y">
                <div className="framer-nvdraf-container">
                    <div className="framer-LAhMH framer-jRQOc framer-u5oc0 framer-Yo47e framer-tv52ym framer-v-tv52ym"
                        data-framer-name="Primary" style={{ "--3489i3": "24", "width": "100%" }}>
                        <a className="framer-1mowlqu framer-1qlj46u" data-framer-name="Figure"
                            onClick={() => router.push(`/noticias/${noticia.id}`)}
                            style={{
                                "borderBottomLeftRadius": "12px",
                                "borderBottomRightRadius": "12px",
                                "borderTopLeftRadius": "12px",
                                "borderTopRightRadius": "12px",
                                "cursor": "pointer"
                            }}>
                            <figure className="framer-1f0kqqs" data-framer-name="Image">
                                <div style={{
                                    "position": "absolute",
                                    "borderTopLeftRadius": "inherit",
                                    "borderTopRightRadius": "inherit",
                                    "borderBottomRightRadius": "inherit",
                                    "borderBottomLeftRadius": "inherit",
                                    "top": "0px",
                                    "right": "0px",
                                    "bottom": "0px",
                                    "left": "0px"
                                }} data-framer-background-image-wrapper="true">
                                    <img
                                        decoding="async"
                                        src={getImagemPrincipal(noticia)}
                                        alt={noticia.titulo}
                                        style={{
                                            "display": "block",
                                            "width": "100%",
                                            "height": "100%",
                                            "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit",
                                            "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit",
                                            "objectPosition": "center center",
                                            "objectFit": "cover"
                                        }}
                                    />
                                </div>
                            </figure>
                        </a>

                        <div className="framer-mnmd5x" data-framer-name="TItle Content">
                            <div className="framer-zybjgk" data-framer-name="Date">
                                <div className="framer-15pyenf" data-framer-name="Friday, April 8, 2022"
                                    data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">
                                        {formatarData(noticia.publicado_em)}
                                    </p>
                                </div>
                            </div>
                            <div className="framer-1kuggei" data-framer-name="Bringing Hope Through Food, Shelter, and Support"
                                data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h6 className="framer-text framer-styles-preset-9i5qw2" data-styles-preset="OXZ7pDCA2">
                                    <a className="framer-text framer-styles-preset-ixgrlg" data-styles-preset="PGCP_hdlP"
                                        onClick={() => router.push(`/noticias/${noticia.id}`)}
                                        style={{ cursor: "pointer" }}>
                                        {noticia.titulo}
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ssr-variant hidden-72rtr7">
                <div className="framer-nvdraf-container">
                    <div className="framer-LAhMH framer-jRQOc framer-u5oc0 framer-Yo47e framer-tv52ym framer-v-tv52ym"
                        data-framer-name="Primary" style={{ "--3489i3": "24", "width": "100%" }}>
                        <a className="framer-1mowlqu framer-1qlj46u" data-framer-name="Figure"
                            onClick={() => router.push(`/noticias/${noticia.id}`)}
                            style={{
                                "borderBottomLeftRadius": "12px",
                                "borderBottomRightRadius": "12px",
                                "borderTopLeftRadius": "12px",
                                "borderTopRightRadius": "12px",
                                "cursor": "pointer"
                            }}>
                            <figure className="framer-1f0kqqs" data-framer-name="Image">
                                <div style={{
                                    "position": "absolute",
                                    "borderTopLeftRadius": "inherit",
                                    "borderTopRightRadius": "inherit",
                                    "borderBottomRightRadius": "inherit",
                                    "borderBottomLeftRadius": "inherit",
                                    "top": "0px",
                                    "right": "0px",
                                    "bottom": "0px",
                                    "left": "0px"
                                }} data-framer-background-image-wrapper="true">
                                    <img
                                        decoding="async"
                                        src={getImagemPrincipal(noticia)}
                                        alt={noticia.titulo}
                                        style={{
                                            "display": "block",
                                            "width": "100%",
                                            "height": "100%",
                                            "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit",
                                            "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit",
                                            "objectPosition": "center center",
                                            "objectFit": "cover"
                                        }}
                                    />
                                </div>
                            </figure>
                        </a>

                        <div className="framer-mnmd5x" data-framer-name="TItle Content">
                            <div className="framer-zybjgk" data-framer-name="Date">
                                <div className="framer-15pyenf" data-framer-name="Friday, April 8, 2022"
                                    data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">
                                        {formatarData(noticia.publicado_em)}
                                    </p>
                                </div>
                            </div>
                            <div className="framer-1kuggei" data-framer-name="Bringing Hope Through Food, Shelter, and Support"
                                data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h6 className="framer-text framer-styles-preset-9i5qw2" data-styles-preset="OXZ7pDCA2">
                                    <a className="framer-text framer-styles-preset-ixgrlg" data-styles-preset="PGCP_hdlP"
                                        onClick={() => router.push(`/noticias/${noticia.id}`)}
                                        style={{ cursor: "pointer" }}>
                                        {noticia.titulo}
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <section className="framer-14wqbm" data-framer-name="Insights">
                <div className="framer-srxaqi" data-framer-name="Container">
                    <div style={{ textAlign: "center", padding: "60px 0" }}>
                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">
                            A carregar notícias...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="framer-14wqbm" data-framer-name="Insights">
                <div className="framer-srxaqi" data-framer-name="Container">
                    <div className="ssr-variant hidden-181rvcf">
                        <div className="framer-17od84i" data-framer-name="Stories and insights"
                            data-framer-component-type="RichTextContainer" style={{
                                "willChange":
                                    "transform", "opacity": "1", "transform": "none"
                            }}>
                            <h2 className="framer-text framer-styles-preset-s0nzzz" data-styles-preset="N1eiVmsrJ"
                                style={{ textAlign: "center" }}>Histórias e Notícias</h2>

                        </div>
                    </div>
                    <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                        <div className="framer-17od84i" data-framer-name="Stories and insights"
                            data-framer-component-type="RichTextContainer" style={{
                                "opacity": "1",
                                "transform": "none"
                            }}>
                            <h2 className="framer-text framer-styles-preset-s0nzzz" data-styles-preset="N1eiVmsrJ"
                                style={{ textAlign: "center" }}>Histórias e Notícias</h2>

                        </div>
                    </div>
                    <div className="framer-1mdr160">
                        {noticias.map((noticia) => (
                            <div key={noticia.id} className="ssr-variant hidden-181rvcf">
                                {renderNoticiaCard(noticia)}
                            </div>
                        ))}
                        {noticias.map((noticia) => (
                            <div key={`mobile-${noticia.id}`} className="ssr-variant hidden-mqny1y hidden-72rtr7">
                                {renderNoticiaCard(noticia)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};