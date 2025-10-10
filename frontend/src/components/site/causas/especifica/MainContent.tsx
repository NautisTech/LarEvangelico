"use client";

import React from "react";
import DonationModal from "../../DonationModal";
import { Conteudo } from "@/models";

interface MainContentProps {
    causa: Conteudo;
}

export function MainContent({ causa }: MainContentProps) {

    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <section className="framer-elxz8b" data-framer-name="Main Content">
                <div className="framer-5426tg" data-framer-name="Container">
                    <div className="ssr-variant hidden-d9yx5v">
                        <div className="framer-1fes57" data-framer-name="Left" style={{
                            "willChange": "transform", "opacity": "1", "transform": "none"
                        }}>
                            <div className="framer-150xt5o" data-framer-name="Introduction" data-framer-component-type="RichTextContainer"
                                style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Introdução</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.introducao}.</p>

                                <h5 className="framer-text framer-styles-preset-1js54ic">Desafio</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.desafio}.</p>

                            </div>
                            <div className="framer-2pb0ha" data-framer-name="Introduction" data-framer-component-type="RichTextContainer"
                                style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Problema</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.problema}.</p>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Solução</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.solucao}.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ssr-variant hidden-wz6xei hidden-utjgut">
                        <div className="framer-1fes57" data-framer-name="Left" style={{
                            "opacity": "1", "transform": "none"
                        }}>
                            <div className="framer-150xt5o" data-framer-name="Introduction" data-framer-component-type="RichTextContainer"
                                style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Introdução</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.introducao}.</p>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Desafio</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.desafio}.</p>
                            </div>

                            <div className="framer-2pb0ha" data-framer-name="Introduction" data-framer-component-type="RichTextContainer"
                                style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic">Problema</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.problema}.</p>

                                <h5 className="framer-text framer-styles-preset-1js54ic">Solução</h5>

                                <p className="framer-text framer-styles-preset-18rceng">{causa.solucao}.</p>
                            </div>
                        </div>
                    </div>
                    <div className="framer-1nhrzuu" data-framer-name="Right">
                        <div className="ssr-variant hidden-d9yx5v">
                            <div className="framer-3jamzk" data-border="true" data-framer-name="Form Bar"
                                style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
                                <div className="framer-l9dh2t" data-framer-name="Form Wrap">
                                    <div className="framer-1m3wj2b" data-framer-name="Help the cause!" data-framer-component-type="RichTextContainer"
                                        style={{ "transform": "none", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "20px" }}>
                                        <h4 className="framer-text framer-styles-preset-13lkd54" data-styles-preset="SE0dvQEiW" style={{ "textAlign": "center" }}>Apoia a causa!</h4>
                                        <div className="framer-1p0yejy-container" onClick={handleModalOpen}><a className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
                                            data-border="true" data-framer-name="Primary" data-highlight="true"
                                            tabIndex={0} style={{
                                                borderBottomWidth: "1px", borderColor:
                                                    "var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                                borderStyle: "solid", borderTopWidth: "1px", borderBottomLeftRadius: "4px",
                                                borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                            }}>
                                            <div className="framer-ptdzar" data-framer-name="Background" style={{ "backgroundColor": "var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))", "opacity": "1" }}>
                                            </div>
                                            <div className="framer-uhgsoe" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                                <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw" style={{ color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                                    Doar Agora</p>
                                            </div>
                                            <div className="framer-mzpyxu" data-framer-name="Icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"
                                                    color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                                    style={{
                                                        "userSelect": "none", "width": "100%", "height": "100%",
                                                        "display": "inline-block", "fill":
                                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "color":
                                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "flexShrink": "0"
                                                    }}>
                                                    <g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
                                                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="ssr-variant hidden-wz6xei hidden-utjgut">
                            <div className="framer-3jamzk" data-border="true" data-framer-name="Form Bar"
                                style={{ "opacity": "1", "transform": "none" }}>
                                <div className="framer-l9dh2t" data-framer-name="Form Wrap">
                                    <div className="framer-1m3wj2b" data-framer-name="Help the cause!" data-framer-component-type="RichTextContainer"
                                        style={{ "transform": "none", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "20px" }}>
                                        <h4 className="framer-text framer-styles-preset-13lkd54" data-styles-preset="SE0dvQEiW" style={{ "textAlign": "center" }}>Apoia a causa!</h4>
                                        <div className="framer-1p0yejy-container" onClick={handleModalOpen}><a className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
                                            data-border="true" data-framer-name="Primary" data-highlight="true"
                                            tabIndex={0} style={{
                                                borderBottomWidth: "1px", borderColor:
                                                    "var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                                borderStyle: "solid", borderTopWidth: "1px", borderBottomLeftRadius: "4px",
                                                borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                            }}>
                                            <div className="framer-ptdzar" data-framer-name="Background" style={{ "backgroundColor": "var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))", "opacity": "1" }}>
                                            </div>
                                            <div className="framer-uhgsoe" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                                <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw" style={{ color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                                    Doar Agora</p>
                                            </div>
                                            <div className="framer-mzpyxu" data-framer-name="Icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"
                                                    color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                                    style={{
                                                        "userSelect": "none", "width": "100%", "height": "100%",
                                                        "display": "inline-block", "fill":
                                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "color":
                                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "flexShrink": "0"
                                                    }}>
                                                    <g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
                                                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            {isModalOpen && <DonationModal open={isModalOpen} onClose={handleModalClose} />
            }
        </>
    )
}