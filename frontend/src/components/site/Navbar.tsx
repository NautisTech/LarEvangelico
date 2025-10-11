"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DonationModal from "./DonationModal";

const Navbar: React.FC = () => {
    const router = useRouter();

    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div>
                <div className="ssr-variant hidden-zd6a81 hidden-11f5tl6">
                    <header className="framer-1qI4j framer-u5oc0 framer-RcNjK framer-1fbux2k framer-v-1fbux2k"
                        data-framer-name="Primary" data-highlight="true" tabIndex={0} style={{
                            "backgroundColor": "var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
                            "width": "100%"
                        }}>
                        <div className="framer-1xzi696" data-framer-name="Container"><a className="framer-tobys2 framer-xku9a4" data-framer-name="Logo" onClick={() => router.push("/")}
                            data-framer-page-link-current="true">
                            <div className="framer-3er1zc" data-framer-name="Logo w">
                                <div style={{ "position": "absolute", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left": "0px" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width="715" height="715" sizes="(min-width: 1200px) 55px, (min-width: 810px) and (max-width: 1199.98px) 55px, (max-width: 809.98px) 55px" srcSet="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-2.png 512w?scale-down-to=512&amp;width=715&amp;height=715 512w,/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png 715w?width=715&amp;height=715 715w" src="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png?width=715&amp;height=715" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition": "center center", "objectFit": "cover" }} data-framer-original-sizes="55px" /></div>
                            </div>
                            <div className="framer-14fesyn" data-framer-name="Charis" data-framer-component-type="RichTextContainer">
                                <h6 className="framer-text framer-styles-preset-9i5qw2" data-styles-preset="OXZ7pDCA2" style={{ color: "var(--extracted-1w1cjl5, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                    Lar Evangélico</h6>
                            </div>
                        </a>

                            <nav className="framer-1njmcb7" data-framer-name="Navigation"
                                style={{ "backgroundColor": "rgba(0, 0, 0, 0)", "opacity": "1" }}>
                                <div className="framer-1ybkjth-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/")} data-framer-page-link-current="true"
                                    tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1yymbq0-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/sobre-nos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1b2lqqf-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/parceiros")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-bi8d9z-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/causas")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-8xeo3x-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/blog")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-97ixt7-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/contactos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-97ixt7-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/admin")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                            </nav>
                            <div className="framer-1s57x13-container"><a role="button" onClick={handleModalOpen} className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-1lcj20u framer-57amc9"
                                data-border="true" data-framer-name="Header" data-highlight="true" tabIndex={0}
                                style={{
                                    borderBottomWidth: "1px", borderColor:
                                        "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                    borderStyle: "solid", borderTopWidth: "1px", borderBottomLeftRadius: "4px",
                                    borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                }}>
                                <div className="framer-ptdzar" data-framer-name="Background" style={{ "backgroundColor": "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "opacity": "1" }}>
                                </div>
                                <div className="framer-uhgsoe" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw" style={{ color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))" }}>
                                        Doar Agora</p>
                                </div>
                            </a>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="ssr-variant hidden-1abs8j6 hidden-11f5tl6">
                    <header className="framer-1qI4j framer-u5oc0 framer-RcNjK framer-1fbux2k framer-v-1to20s1"
                        data-framer-name="Tablet" data-highlight="true" tabIndex={0} style={{
                            "backgroundColor": "var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
                            "width": "100%"
                        }}>
                        <div className="framer-1xzi696" data-framer-name="Container"><a className="framer-tobys2 framer-xku9a4" data-framer-name="Logo" onClick={() => router.push("/")}
                            data-framer-page-link-current="true">
                            <div className="framer-3er1zc" data-framer-name="Logo w">
                                <div style={{ "position": "absolute", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left": "0px" }} data-framer-background-image-wrapper="true"><img decoding="async" width="715" height="715" sizes="(min-width: 1200px) 55px, (min-width: 810px) and (max-width: 1199.98px) 55px, (max-width: 809.98px) 55px" srcSet="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-2.png 512w?scale-down-to=512&amp;width=715&amp;height=715 512w,/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png 715w?width=715&amp;height=715 715w" src="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png?width=715&amp;height=715" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition": "center center", "objectFit": "cover" }} data-framer-original-sizes="55px" /></div>
                            </div>
                            <div className="framer-14fesyn" data-framer-name="Charis" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic" data-styles-preset="YoG87oFzq" style={{ color: "var(--extracted-1lwpl3i, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                    Lar Evangélico</h5>
                            </div>
                        </a>

                            <nav className="framer-1njmcb7" data-framer-name="Navigation"
                                style={{
                                    "backgroundColor":
                                        "var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))", "opacity": "0"
                                }}>
                                <div className="framer-1ybkjth-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/")} data-framer-page-link-current="true"
                                    tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1yymbq0-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/sobre-nos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1b2lqqf-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/parceiros")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-bi8d9z-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/causas")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-8xeo3x-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/blog")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-97ixt7-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/contactos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-qlf56d-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/admin")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1xsf7pd-container"><a role="button" onClick={handleModalOpen} className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-1lcj20u framer-57amc9"
                                    data-border="true" data-framer-name="Header" data-highlight="true" tabIndex={0}
                                    style={{
                                        borderBottomWidth: "1px", borderColor:
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                        borderStyle: "solid", borderTopWidth: "1px", borderBottomLeftRadius: "4px",
                                        borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                    }}>
                                    <div className="framer-ptdzar" data-framer-name="Background" style={{ "backgroundColor": "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "opacity": "1" }}>
                                    </div>
                                    <div className="framer-uhgsoe" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw" style={{ color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))" }}>
                                            Doar Agora</p>
                                    </div>
                                </a>
                                </div>
                            </nav>
                            <div className="framer-yuac5n-container">
                                <div className="framer-N9Jkz framer-5bcwir framer-v-5bcwir" data-framer-name="Primary"
                                    data-highlight="true" tabIndex={0}>
                                    <div className="framer-e1ysir" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "transform": "none"
                                    }}></div>
                                    <div className="framer-11i1jil" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "opacity": "1"
                                    }}></div>
                                    <div className="framer-11tozv1" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "transform": "none"
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="ssr-variant hidden-zd6a81 hidden-1abs8j6">
                    <header className="framer-1qI4j framer-u5oc0 framer-RcNjK framer-1fbux2k framer-v-1to20s1"
                        data-framer-name="Tablet" data-highlight="true" tabIndex={0} style={{
                            "backgroundColor": "var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
                            "width": "100%"
                        }}>
                        <div className="framer-1xzi696" data-framer-name="Container"><a className="framer-tobys2 framer-xku9a4" data-framer-name="Logo" onClick={() => router.push("/")}
                            data-framer-page-link-current="true">
                            <div className="framer-3er1zc" data-framer-name="Logo w">
                                <div style={{ "position": "absolute", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left": "0px" }} data-framer-background-image-wrapper="true"><img decoding="async" width="715" height="715" sizes="(min-width: 1200px) 55px, (min-width: 810px) and (max-width: 1199.98px) 55px, (max-width: 809.98px) 55px" srcSet="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-2.png 512w?scale-down-to=512&amp;width=715&amp;height=715 512w,images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png 715w?width=715&amp;height=715 715w" src="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png?width=715&amp;height=715" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition": "center center", "objectFit": "cover" }} data-framer-original-sizes="55px" /></div>
                            </div>
                            <div className="framer-14fesyn" data-framer-name="Charis" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h5 className="framer-text framer-styles-preset-1js54ic" data-styles-preset="YoG87oFzq" style={{ color: "var(--extracted-1lwpl3i, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                    Lar Evangélico</h5>
                            </div>
                        </a>

                            <nav className="framer-1njmcb7" data-framer-name="Navigation"
                                style={{
                                    "backgroundColor":
                                        "var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))", "opacity": "0"
                                }}>
                                <div className="framer-1ybkjth-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/")} data-framer-page-link-current="true"
                                    tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Home</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1yymbq0-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/sobre-nos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Sobre Nós</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1b2lqqf-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/parceiros")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Parceiros</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-bi8d9z-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/causas")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Causas</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-8xeo3x-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/blog")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Blog</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-97ixt7-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/contactos")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Contactos</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-qlf56d-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" onClick={() => router.push("/admin")} tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                Área Reservada</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-154dfs5-container"><a className="framer-lSJgT framer-5JmXW framer-aze2zb framer-v-aze2zb framer-16ueoun"
                                    data-framer-name="Primary" data-highlight="true" tabIndex={0}>
                                    <div className="framer-xuhs7p" data-framer-name="Text">
                                        <div className="framer-fbp6jx" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "translate(-50%, -50%)" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                404</p>
                                        </div>
                                        <div className="framer-nljtjc" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                404</p>
                                        </div>
                                        <div className="framer-jt3kas" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{ "opacity": "0", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-1ub8ls7" data-styles-preset="W0NKkqQDf" style={{ color: "white" }}>
                                                404</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="framer-1xsf7pd-container" onClick={handleModalOpen}>
                                    <a role="button" onClick={(e) => { e.preventDefault(); handleModalOpen(); }} className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-1lcj20u framer-57amc9"
                                        data-border="true" data-framer-name="Header" data-highlight="true" tabIndex={0}
                                        style={{
                                            borderBottomWidth: "1px", borderColor:
                                                "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                            borderStyle: "solid", borderTopWidth: "1px", borderBottomLeftRadius: "4px",
                                            borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                        }}>
                                        <div className="framer-ptdzar" data-framer-name="Background" style={{ "backgroundColor": "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "opacity": "1" }}>
                                        </div>
                                        <div className="framer-uhgsoe" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw" style={{ color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))" }}>
                                                Doar Agora</p>
                                        </div>
                                    </a>
                                </div>
                            </nav>
                            <div className="framer-yuac5n-container">
                                <div className="framer-N9Jkz framer-5bcwir framer-v-5bcwir" data-framer-name="Primary"
                                    data-highlight="true" tabIndex={0}>
                                    <div className="framer-e1ysir" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "transform": "none"
                                    }}></div>
                                    <div className="framer-11i1jil" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "opacity": "1"
                                    }}></div>
                                    <div className="framer-11tozv1" data-framer-name="Line" style={{
                                        "backgroundColor":
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", "transform": "none"
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

            {isModalOpen && <div className="framer-eiJjF framer-q258S framer-Qg7Vs framer-jRQOc framer-uhp5V framer-oKbxU framer-U1h5s framer-2Vypl framer-RcNjK framer-72rtr7"><DonationModal open={isModalOpen} onClose={handleModalClose} /></div>}
        </>
    );
};

export default Navbar;
