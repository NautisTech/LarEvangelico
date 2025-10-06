'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

// Counter component with motion animation
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return (
        // @ts-ignore
        <div ref={ref} style={{ display: 'inline-flex', "--framer-paragraph-spacing": "0px" }}>
            <motion.h5 className="framer-text framer-styles-preset-1js54ic" data-styles-preset="YoG87oFzq" >
                {rounded}
            </motion.h5>
            {
                suffix && (
                    // @ts-ignore
                    <h5 className="framer-text framer-styles-preset-1js54ic inline!" style={{ "--framer-paragraph-spacing": "0px" }} data-styles-preset="YoG87oFzq">
                        {suffix}
                    </h5>
                )
            }
        </div >
    );
}

export function AboutSection() {
    return (
        <>
            <section className="framer-1oj0usa" data-framer-name="About Section">
                <div className="framer-1di4fc7" data-framer-name="Container">
                    <div className="ssr-variant hidden-181rvcf">
                        <div className="framer-1bzvjg" data-framer-name="Title Content" style={{
                            "willChange": "transform", "opacity": "1", "transform": "none"
                        }}>
                            <div className="framer-ipv7iz" data-framer-name="Every initiative, every donation, and every volunteer effort creates a lasting impact that fuels our mission of hope and change."
                                data-framer-component-type="RichTextContainer" style={{
                                    "transform":
                                        "none"
                                }}>
                                <h2 className="framer-text framer-styles-preset-1l4ukjs" data-styles-preset="ebpY9F0Dz"
                                    style={{ textAlign: "center" }}>Cada iniciativa, <span style={{ color: "var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))" }} className="framer-text">cada doação, e cada esforço</span> voluntário criam um impacto duradouro que
                                    impulsiona a nossa missão de esperança e mudança.</h2>

                            </div>
                        </div>
                    </div>
                    <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                        <div className="framer-1bzvjg" data-framer-name="Title Content" style={{
                            "opacity": "1", "transform": "none"
                        }}>
                            <div className="framer-ipv7iz" data-framer-name="Every initiative, every donation, and every volunteer effort creates a lasting impact that fuels our mission of hope and change."
                                data-framer-component-type="RichTextContainer" style={{
                                    "transform":
                                        "none"
                                }}>
                                <h2 className="framer-text framer-styles-preset-1l4ukjs" data-styles-preset="ebpY9F0Dz"
                                    style={{ textAlign: "center" }}>Cada iniciativa, <span style={{ color: "var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))" }} className="framer-text">cada doação, e cada esforço</span> voluntário criam um impacto duradouro que
                                    impulsiona a nossa missão de esperança e mudança.</h2>

                            </div>
                        </div>
                    </div>
                    <div className="framer-1o6fogv" data-framer-name="Row">
                        <div className="ssr-variant hidden-181rvcf">
                            <div className="framer-1jk596k" data-framer-name="Figure" style={{
                                "willChange": "transform", "opacity": "1", "transform": "none"
                            }}>
                                <div className="ssr-variant hidden-mqny1y">
                                    <figure className="framer-qs9ggd" data-framer-name="image">
                                        <div style={{
                                            "position": "absolute", "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                                "0px"
                                        }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width="450" height="650" sizes="(min-width: 1200px) max(min(100vw - 80px, 1440px) / 3.2, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1440px) / 3.2, 1px)"
                                                srcSet="images/sR1KCPkAAyV9t8Vz8DfnzFs3E.jpg 450w?width=450&amp;height=650 450w"
                                                src="images/sR1KCPkAAyV9t8Vz8DfnzFs3E.jpg?width=450&amp;height=650" alt="about-img"
                                                style={{
                                                    "display": "block", "width": "100%", "height": "100%",
                                                    "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                    "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                        "center center", "objectFit": "cover"
                                                }} data-framer-original-sizes="max(min(100vw - 80px, 1440px) / 3.2, 1px)"
                                            />
                                        </div>
                                    </figure>
                                </div>
                                <div className="ssr-variant hidden-72rtr7">
                                    <figure className="framer-qs9ggd" data-framer-name="image">
                                        <div style={{
                                            "position": "absolute", "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                                "0px"
                                        }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width="450" height="650" sizes="(min-width: 1200px) max(min(100vw - 80px, 1440px) / 3.2, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1440px) / 3.2, 1px)"
                                                srcSet="images/sR1KCPkAAyV9t8Vz8DfnzFs3E.jpg 450w?width=450&amp;height=650 450w"
                                                src="images/sR1KCPkAAyV9t8Vz8DfnzFs3E.jpg?width=450&amp;height=650" alt="about-img"
                                                style={{
                                                    "display": "block", "width": "100%", "height": "100%",
                                                    "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                    "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                        "center center", "objectFit": "cover"
                                                }} data-framer-original-sizes="max(min(100vw - 50px, 1440px) / 3.2, 1px)"
                                            />
                                        </div>
                                    </figure>
                                </div>
                                <figure className="framer-dqfij hidden-181rvcf" data-framer-name="shape">
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="113" height="111" src="images/KC3XgGjJl5Uwpb71fJe9sZN5E.svg?width=113&amp;height=111"
                                            alt="curve-shape" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "contain"
                                            }} />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                            <div className="framer-1jk596k" data-framer-name="Figure" style={{
                                "opacity": "1", "transform": "none"
                            }}>
                                <figure className="framer-qs9ggd" data-framer-name="image">
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="450" height="650" sizes="(max-width: 809.98px) max(min(100vw - 50px, 1440px), 1px)"
                                            srcSet="images/8h67STcNSFwG8XPsCPbjmxeAy6o.jpg 450w?lossless=1&amp;width=450&amp;height=650 450w"
                                            src="images/8h67STcNSFwG8XPsCPbjmxeAy6o.jpg?lossless=1&amp;width=450&amp;height=650"
                                            alt="about-img" style={{
                                                "display": "block", "width": "100%", "height":
                                                    "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                    "center center", "objectFit": "cover"
                                            }} data-framer-original-sizes="max(min(100vw - 50px, 1440px), 1px)"
                                        />
                                    </div>
                                </figure>
                                <figure className="framer-dqfij hidden-181rvcf" data-framer-name="shape">
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="113" height="111" src="images/KC3XgGjJl5Uwpb71fJe9sZN5E.svg?width=113&amp;height=111"
                                            alt="curve-shape" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "contain"
                                            }} />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="framer-1pd3685" data-framer-name="Content">
                            <div className="framer-1ejve3z" data-framer-name="Title Content">
                                <div className="ssr-variant hidden-181rvcf">
                                    <div className="framer-ldvarw" data-framer-name="We turn compassion into action, creating lasting change in communities worldwide. Through our dedicated volunteers, generous donors, and impactful programs, we have touched thousands of lives, provided essential aid, and funded critical initiatives. With over 1,200 successful projects, 5,200 lives impacted, 500+ volunteers, and $12M raised, we remain committed to making a tangible difference. Join us in shaping a brighter future—one act of kindness at a time."
                                        data-framer-component-type="RichTextContainer" style={{
                                            "willChange":
                                                "transform", "opacity": "1", "transform": "none"
                                        }}>
                                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">Com fé, dedicação e trabalho em equipa, transformamos vidas todos os dias.
                                            <br
                                                className="framer-text" />Através do empenho dos nossos colaboradores, voluntários e amigos, oferecemos
                                            cuidados, educação e apoio a crianças, jovens e idosos.</p>
                                        <p className="framer-text framer-styles-preset-18rceng"
                                            data-styles-preset="efNb1Kccw">
                                            <br className="framer-text" />Cada contributo — seja tempo, recursos ou oração — ajuda-nos a construir
                                            um futuro com mais dignidade e compaixão.</p>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                                    <div className="framer-ldvarw" data-framer-name="We turn compassion into action, creating lasting change in communities worldwide. Through our dedicated volunteers, generous donors, and impactful programs, we have touched thousands of lives, provided essential aid, and funded critical initiatives. With over 1,200 successful projects, 5,200 lives impacted, 500+ volunteers, and $12M raised, we remain committed to making a tangible difference. Join us in shaping a brighter future—one act of kindness at a time."
                                        data-framer-component-type="RichTextContainer" style={{
                                            "opacity": "1",
                                            "transform": "none"
                                        }}>
                                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">Com fé, dedicação e trabalho em equipa, transformamos vidas todos os dias.
                                            <br
                                                className="framer-text" />Através do empenho dos nossos colaboradores, voluntários e amigos, oferecemos
                                            cuidados, educação e apoio a crianças, jovens e idosos.</p>
                                        <p className="framer-text framer-styles-preset-18rceng"
                                            data-styles-preset="efNb1Kccw">
                                            <br className="framer-text" />Cada contributo — seja tempo, recursos ou oração — ajuda-nos a construir
                                            um futuro com mais dignidade e compaixão.</p>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-181rvcf">
                                    <div className="framer-rx2lpx" data-framer-name="Counter" style={{
                                        "willChange": "transform", "opacity": "1", "transform": "none"
                                    }}>
                                        <div className="framer-18knrvh-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-i6lblt"
                                                data-framer-name="15+">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={15} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">anos de ação</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="framer-kr7rhb hidden-181rvcf" data-framer-name="Line"></div>
                                        <div className="framer-7fhtx0-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-8fy3zm"
                                                data-framer-name="500+">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={500} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">voluntários</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="framer-q9ta9i hidden-181rvcf" data-framer-name="Line"></div>
                                        <div className="framer-55o8mi-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-145gr4a"
                                                data-framer-name="2+">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={2} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">respostas sociais</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                                    <div className="framer-rx2lpx" data-framer-name="Counter" style={{
                                        "opacity": "1", "transform": "none"
                                    }}>
                                        <div className="framer-18knrvh-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-4l9q58"
                                                data-framer-name="15+ Mobile">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={15} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">anos de ação</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="framer-kr7rhb hidden-181rvcf" data-framer-name="Line"></div>
                                        <div className="framer-7fhtx0-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1j5pwvo"
                                                data-framer-name="500+ Mobile">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={500} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">voluntários</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="framer-q9ta9i hidden-181rvcf" data-framer-name="Line"></div>
                                        <div className="framer-55o8mi-container">
                                            <div className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1h5kzkd"
                                                data-framer-name="2+ Mobile">
                                                <div className="framer-ixvh3b-container">
                                                    <Counter value={2} suffix="+" />
                                                </div>
                                                <div className="framer-1je5i4p" data-framer-name="Lives Touched" data-framer-component-type="RichTextContainer"
                                                    style={{ "transform": "none" }}>
                                                    <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">respostas sociais</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ssr-variant hidden-181rvcf">
                                <div className="framer-1szw48u-container" style={{
                                    "willChange":
                                        "transform", "opacity": "1", "transform": "none"
                                }}> <a className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
                                    data-border="true" data-framer-name="Primary" data-highlight="true" href="about-us.html"
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
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-mzpyxu" data-framer-name="Icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))" style={{ width: "100%", height: "100%", display: "inline-block", fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))", flexShrink: 0 }}><g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></g></svg>
                                        </div>
                                    </a>

                                </div>
                            </div>
                            <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                                <div className="framer-1szw48u-container" style={{
                                    "opacity": "1",
                                    "transform": "none"
                                }}><a className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
                                    data-border="true" data-framer-name="Primary" data-highlight="true" href="about-us.html"
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
                                                Sobre Nós</p>
                                        </div>
                                        <div className="framer-mzpyxu" data-framer-name="Icon">
                                            <div className="framer-vmczfr-container">
                                                <div style={{ "display": "contents" }}></div>
                                            </div>
                                            <div className="framer-1kowoh0-container">
                                                <div style={{ "display": "contents" }}></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};