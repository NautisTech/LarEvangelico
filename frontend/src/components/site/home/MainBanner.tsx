"use client";

import React from "react";
import DonationModal from "../DonationModal";
import './MainBanner.module.css';

export function MainBanner() {

    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <section className="framer-1gttmjx" data-framer-name="Main Banner" id="home-banner">
                <div className="framer-1qhwegm hidden-181rvcf" data-framer-name="Shape">
                    <div style={{
                        "position": "absolute", "borderTopLeftRadius": "inherit",
                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                            "0px"
                    }} data-framer-background-image-wrapper="true">
                        <img decoding="async" width="1523" height="928" sizes="(min-width: 1200px) calc(100vw * 0.81), (min-width: 810px) and (max-width: 1199.98px) calc(100vw * 0.81), (max-width: 809.98px) calc(100vw * 0.81)"
                            srcSet="images/hrhTapGuS4mgS65QvYaOZde4dLA-1.png 512w?scale-down-to=512&amp;width=1523&amp;height=928 512w,images/hrhTapGuS4mgS65QvYaOZde4dLA-2.png 1024w?scale-down-to=1024&amp;width=1523&amp;height=928 1024w,images/hrhTapGuS4mgS65QvYaOZde4dLA.png 1523w?width=1523&amp;height=928 1523w"
                            src="images/hrhTapGuS4mgS65QvYaOZde4dLA.png?width=1523&amp;height=928"
                            alt="Background curve" style={{
                                "display": "block", "width": "100%",
                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                    "inherit", "objectPosition": "center bottom", "objectFit": "fill"
                            }} data-framer-original-sizes="calc(100vw * 0.81)"
                        />
                    </div>
                </div>
                <div className="ssr-variant hidden-181rvcf">
                    <div className="framer-1ept4qq" data-framer-name="Container" style={{
                        "willChange": "transform", "opacity": "1", "transform": "none"
                    }}>
                        <div className="framer-1r64dt9" data-framer-name="Column">
                            <div className="framer-vdwpde" data-framer-name="Title">
                                <div className="framer-10v0ihx" data-framer-name="Empower change, one act of kindness at a time"
                                    data-framer-component-type="RichTextContainer" style={{
                                        "transform":
                                            "none"
                                    }}>
                                    <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                        style={{
                                            color:
                                                "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                        }}>
                                        Empodera a <br className="framer-text" />mudança, um</h1>

                                </div>
                                <div className="framer-1vp12jf" data-framer-name="Animated Text">
                                    <div className="framer-17l2m5j" data-framer-name="Empower change, one act of kindness at a time"
                                        data-framer-component-type="RichTextContainer" style={{
                                            "transform":
                                                "none"
                                        }}>
                                        <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                            style={{
                                                color:
                                                    "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                            }}>
                                            ato de bondade</h1>

                                    </div>
                                    <div className="framer-13ur03w" data-framer-name="Line" style={{
                                        "willChange": "transform", "opacity": "1", "transform": "scale(1)",
                                        "transformOrigin": "0% 50% 0px"
                                    }}>
                                        <div data-framer-component-type="SVG" data-framer-name="Line"
                                            className="framer-2kwpjy"
                                            aria-hidden="true" style={{
                                                "imageRendering": "pixelated", "flexShrink":
                                                    "0"
                                            }}>
                                            <div className="svgContainer" style={{
                                                "width": "100%", "height":
                                                    "100%", "aspectRatio": "inherit"
                                            }}>
                                                <svg style={{ "width": "100%", "height": "100%" }}>
                                                    <use href="#svg11269819673"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="framer-1g12fod" data-framer-name="Empower change, one act of kindness at a time"
                                    data-framer-component-type="RichTextContainer" style={{
                                        "transform":
                                            "none"
                                    }}>
                                    <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                        style={{
                                            color:
                                                "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                        }}>
                                        de cada vez</h1>

                                </div>
                            </div>
                            <div className="framer-1ynk84e-container" onClick={handleModalOpen}><a className="framer-EomdA framer-2Vypl framer-rvcmdt framer-v-8usv35 framer-1d5tuq9"
                                data-border="true" data-framer-name="Banner Button" style={{
                                    borderBottomWidth: "1px", borderColor:
                                        "var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                    borderStyle: "solid", borderTopWidth: "1px", backgroundColor:
                                        "var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px",
                                    borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                }}>
                                <div className="framer-v2z3h" data-framer-name="Background" style={{ "backgroundColor": "var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))", "opacity": "1" }}>
                                </div>
                                <div className="framer-fxosjp" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-myx315" data-styles-preset="SArK0nEOS" style={{ color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                        Junta-te à causa</p>
                                </div>
                                <div className="framer-101fbqw" data-framer-name="Icon">
                                    <div>
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
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="framer-qwty79" data-framer-name="Column">
                            <div className="ssr-variant hidden-mqny1y">
                                <div className="framer-1ex2qhx" data-framer-name="Video Box" id="1ex2qhx"
                                    tabIndex={0} style={{
                                        "willChange": "transform", "opacity": "1",
                                        "transform": "translateX(-50%) translateY(0px)"
                                    }}>
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="568" height="520" sizes="(min-width: 1200px) calc(max((min(max(100vw - 80px, 1px), 1440px) - 112px) / 2.6, 1px) * 0.7397)"
                                            srcSet="images/88L9qYTuUycsTgr56XHCoBqCxw-2.jpg 512w?scale-down-to=512&amp;width=568&amp;height=520 512w,images/88L9qYTuUycsTgr56XHCoBqCxw.jpg 568w?width=568&amp;height=520 568w"
                                            src="images/88L9qYTuUycsTgr56XHCoBqCxw.jpg?width=568&amp;height=520" alt="home-banner-video"
                                            style={{
                                                "display": "block", "width": "100%", "height": "100%",
                                                "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                    "center center", "objectFit": "contain"
                                            }} data-framer-original-sizes="calc(max((min(max(100vw - 80px, 1px), 1440px) - 112px) / 2.6, 1px) * 0.7397)"
                                        />
                                    </div>
                                    <div className="framer-1h3hv9d" data-border="true" data-framer-name="Play">
                                        <div data-framer-component-type="SVG" data-framer-name="Icon"
                                            className="framer-upokk9"
                                            aria-hidden="true" style={{
                                                "imageRendering": "pixelated", "flexShrink":
                                                    "0"
                                            }}>
                                            <div className="svgContainer" style={{
                                                "width": "100%", "height":
                                                    "100%", "aspectRatio": "inherit"
                                            }}>
                                                <svg style={{ "width": "100%", "height": "100%" }}>
                                                    <use href="#svg9431982782"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ssr-variant hidden-72rtr7">
                                <div className="framer-1ex2qhx" data-framer-name="Video Box" id="1ex2qhx"
                                    tabIndex={0} style={{
                                        "willChange": "transform", "opacity": "1",
                                        "transform": "translateY(0px)"
                                    }}>
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="568" height="520" sizes="(min-width: 810px) and (max-width: 1199.98px) calc(min(max(100vw - 50px, 1px), 1440px) * 0.4), (max-width: 809.98px) calc(min(100vw - 50px, 1440px) * 0.4)"
                                            srcSet="images/88L9qYTuUycsTgr56XHCoBqCxw-3.jpg 512w?scale-down-to=512&amp;lossless=1&amp;width=568&amp;height=520 512w,images/88L9qYTuUycsTgr56XHCoBqCxw-1.jpg 568w?lossless=1&amp;width=568&amp;height=520 568w"
                                            src="images/88L9qYTuUycsTgr56XHCoBqCxw-1.jpg?lossless=1&amp;width=568&amp;height=520"
                                            alt="home-banner-video" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "contain"
                                            }} data-framer-original-sizes="calc(min(max(100vw - 50px, 1px), 1440px) * 0.4)"
                                        />
                                    </div>
                                    <div className="framer-1h3hv9d" data-border="true" data-framer-name="Play">
                                        <div data-framer-component-type="SVG" data-framer-name="Icon"
                                            className="framer-upokk9"
                                            aria-hidden="true" style={{
                                                "imageRendering": "pixelated", "flexShrink":
                                                    "0"
                                            }}>
                                            <div className="svgContainer" style={{
                                                "width": "100%", "height":
                                                    "100%", "aspectRatio": "inherit"
                                            }}>
                                                <svg style={{ "width": "100%", "height": "100%" }}>
                                                    <use href="#svg9431982782"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="framer-1j44vaw" data-framer-name="Figure" style={{
                                "willChange": "transform", "opacity": "1", "transform": "translateY(0px)"
                            }}>
                                <div className="framer-tw9o79" data-framer-name="Highlight" style={{
                                    "willChange": "transform", "opacity": "1", "transform": "scale(1)",
                                    "transformOrigin": "0% 100% 0px"
                                }}>
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="115" height="106" src="images/mmCzqWqzkhg2pdmqYfnPVkZAxIQ.png?width=115&amp;height=106"
                                            alt="shine-shape" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "contain"
                                            }} />
                                    </div>
                                </div>
                                <div className="framer-nssx0z" data-border="true" data-framer-name="Line"></div>
                                <div className="ssr-variant hidden-mqny1y">
                                    <div className="framer-urdj5y" data-framer-name="image">
                                        <div style={{
                                            "position": "absolute", "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                                "0px"
                                        }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width="768" height="975" sizes="(min-width: 1200px) max((min(max(100vw - 80px, 1px), 1440px) - 112px) / 2.6, 1px), (min-width: 810px) and (max-width: 1199.98px) calc(min(max(100vw - 50px, 1px), 1440px) * 0.55)"
                                                srcSet="images/8V218xbriPZK5bYQY2v8G2qE.jpg 768w?width=768&amp;height=975 768w"
                                                src="images/8V218xbriPZK5bYQY2v8G2qE.jpg?width=768&amp;height=975" alt="home-banner"
                                                style={{
                                                    "display": "block", "width": "100%", "height": "100%",
                                                    "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                    "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                        "center center", "objectFit": "cover"
                                                }} data-framer-original-sizes="max((min(max(100vw - 80px, 1px), 1440px) - 112px) / 2.6, 1px)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-72rtr7">
                                    <div className="framer-urdj5y" data-framer-name="image">
                                        <div style={{
                                            "position": "absolute", "borderTopLeftRadius": "inherit",
                                            "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                            "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                                "0px"
                                        }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width="768" height="975" sizes="(min-width: 1200px) max((min(max(100vw - 80px, 1px), 1440px) - 112px) / 2.6, 1px), (min-width: 810px) and (max-width: 1199.98px) calc(min(max(100vw - 50px, 1px), 1440px) * 0.55)"
                                                srcSet="images/8V218xbriPZK5bYQY2v8G2qE.jpg 768w?width=768&amp;height=975 768w"
                                                src="images/8V218xbriPZK5bYQY2v8G2qE.jpg?width=768&amp;height=975" alt="home-banner"
                                                style={{
                                                    "display": "block", "width": "100%", "height": "100%",
                                                    "borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit",
                                                    "borderBottomRightRadius": "inherit", "borderBottomLeftRadius": "inherit", "objectPosition":
                                                        "center center", "objectFit": "cover"
                                                }} data-framer-original-sizes="calc(min(max(100vw - 50px, 1px), 1440px) * 0.55)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ssr-variant hidden-mqny1y hidden-72rtr7">
                    <div className="framer-1ept4qq" data-framer-name="Container" style={{
                        "opacity": "1", "transform": "none"
                    }}>
                        <div className="framer-1r64dt9" data-framer-name="Column">
                            <div className="framer-vdwpde" data-framer-name="Title">
                                <div className="framer-10v0ihx" data-framer-name="Empower change, one act of kindness at a time"
                                    data-framer-component-type="RichTextContainer" style={{
                                        "transform":
                                            "none"
                                    }}>
                                    <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                        style={{
                                            color:
                                                "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                        }}>
                                        Empodera a <br className="framer-text" />mudança, um</h1>

                                </div>
                                <div className="framer-1vp12jf" data-framer-name="Animated Text">
                                    <div className="framer-17l2m5j" data-framer-name="Empower change, one act of kindness at a time"
                                        data-framer-component-type="RichTextContainer" style={{
                                            "transform":
                                                "none"
                                        }}>
                                        <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                            style={{
                                                color:
                                                    "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                            }}>
                                            ato de bondade</h1>

                                    </div>
                                    <div className="framer-13ur03w" data-framer-name="Line" style={{
                                        "opacity": "1", "transform": "none", "transformOrigin": "0% 50% 0px"
                                    }}>
                                        <div data-framer-component-type="SVG" data-framer-name="Line"
                                            className="framer-2kwpjy"
                                            aria-hidden="true" style={{
                                                "imageRendering": "pixelated", "flexShrink":
                                                    "0"
                                            }}>
                                            <div className="svgContainer" style={{
                                                "width": "100%", "height":
                                                    "100%", "aspectRatio": "inherit"
                                            }}>
                                                <svg style={{ "width": "100%", "height": "100%" }}>
                                                    <use href="#svg9271376661"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="framer-1g12fod" data-framer-name="Empower change, one act of kindness at a time"
                                    data-framer-component-type="RichTextContainer" style={{
                                        "transform":
                                            "none"
                                    }}>
                                    <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                        style={{
                                            color:
                                                "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                        }}>
                                        de cada vez</h1>

                                </div>
                            </div>
                            <div className="framer-1ynk84e-container" onClick={handleModalOpen}><a className="framer-EomdA framer-2Vypl framer-rvcmdt framer-v-1cm66cn framer-1d5tuq9"
                                data-border="true" data-framer-name="Mobile banner" style={{
                                    borderBottomWidth: "1px", borderColor:
                                        "var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))", borderLeftWidth: "1px", borderRightWidth: "1px",
                                    borderStyle: "solid", borderTopWidth: "1px", backgroundColor:
                                        "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px",
                                    borderTopLeftRadius: "4px", borderTopRightRadius: "4px"
                                }}>
                                <div className="framer-v2z3h" data-framer-name="Background" style={{ "backgroundColor": "var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))", "opacity": "1" }}>
                                </div>
                                <div className="framer-fxosjp" data-framer-name="Join us Today" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-myx315" data-styles-preset="SArK0nEOS" style={{ color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))" }}>
                                        Junta-te à causa</p>
                                </div>
                                <div className="framer-101fbqw" data-framer-name="Icon">
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
                        <div className="framer-qwty79" data-framer-name="Column">
                            <div className="framer-1ex2qhx" data-framer-name="Video Box" id="1ex2qhx"
                                tabIndex={0} style={{ "opacity": "1", "transform": "none" }}>
                                <div style={{
                                    "position": "absolute", "borderTopLeftRadius": "inherit",
                                    "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                    "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                        "0px"
                                }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width="568" height="520" sizes="(min-width: 810px) and (max-width: 1199.98px) calc(min(max(100vw - 50px, 1px), 1440px) * 0.4), (max-width: 809.98px) calc(min(100vw - 50px, 1440px) * 0.4)"
                                        srcSet="images/88L9qYTuUycsTgr56XHCoBqCxw-3.jpg 512w?scale-down-to=512&amp;lossless=1&amp;width=568&amp;height=520 512w,images/88L9qYTuUycsTgr56XHCoBqCxw-1.jpg 568w?lossless=1&amp;width=568&amp;height=520 568w"
                                        src="images/88L9qYTuUycsTgr56XHCoBqCxw-1.jpg?lossless=1&amp;width=568&amp;height=520"
                                        alt="home-banner-video" style={{
                                            "display": "block", "width": "100%",
                                            "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                "inherit", "objectPosition": "center center", "objectFit": "contain"
                                        }} data-framer-original-sizes="calc(min(100vw - 50px, 1440px) * 0.4)"
                                    />
                                </div>
                                <div className="framer-1h3hv9d" data-border="true" data-framer-name="Play">
                                    <div data-framer-component-type="SVG" data-framer-name="Icon"
                                        className="framer-upokk9"
                                        aria-hidden="true" style={{
                                            "imageRendering": "pixelated", "flexShrink":
                                                "0"
                                        }}>
                                        <div className="svgContainer" style={{
                                            "width": "100%", "height":
                                                "100%", "aspectRatio": "inherit"
                                        }}>
                                            <svg style={{ "width": "100%", "height": "100%" }}>
                                                <use href="#svg9431982782"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="framer-1j44vaw" data-framer-name="Figure" style={{
                                "opacity": "1", "transform": "none"
                            }}>
                                <div className="framer-tw9o79" data-framer-name="Highlight" style={{
                                    "opacity": "1", "transform": "none", "transformOrigin": "0% 100% 0px"
                                }}>
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="115" height="106" src="images/mmCzqWqzkhg2pdmqYfnPVkZAxIQ.png?width=115&amp;height=106"
                                            alt="shine-shape" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "contain"
                                            }} />
                                    </div>
                                </div>
                                <div className="framer-nssx0z" data-border="true" data-framer-name="Line"></div>
                                <div className="framer-urdj5y" data-framer-name="image">
                                    <div style={{
                                        "position": "absolute", "borderTopLeftRadius": "inherit",
                                        "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                        "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                            "0px"
                                    }} data-framer-background-image-wrapper="true">
                                        <img decoding="async" width="768" height="975" sizes="(max-width: 809.98px) calc(min(100vw - 50px, 1440px) * 0.55)"
                                            srcSet="images/8V218xbriPZK5bYQY2v8G2qE-1.jpg 768w?lossless=1&amp;width=768&amp;height=975 768w"
                                            src="images/8V218xbriPZK5bYQY2v8G2qE-1.jpg?lossless=1&amp;width=768&amp;height=975"
                                            alt="home-banner" style={{
                                                "display": "block", "width": "100%",
                                                "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                                    "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                                    "inherit", "objectPosition": "center center", "objectFit": "cover"
                                            }} data-framer-original-sizes="calc(min(100vw - 50px, 1440px) * 0.55)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isModalOpen && <DonationModal open={isModalOpen} onClose={handleModalClose} />}
        </>
    );
};