import { Conteudo } from "@/models";

interface MainBannerProps {
    causa: Conteudo;
}

export function MainBanner({ causa }: MainBannerProps) {
    const imagemPrincipal = causa.anexos?.find((anexo) => anexo.principal)?.valor
        || causa.anexos?.[0]?.valor
        || "../images/Bte6guHqFv0lXXuFa5GHNuEI0Mg.jpg";

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <>
            <section className="framer-ohulhj" data-framer-name="Main Banner">
                <div className="ssr-variant hidden-d9yx5v">
                    <div className="framer-1mbulbr" data-framer-name="Background Image" id="main-banner"
                        style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
                        <div className="framer-1rzg4gk" data-framer-name="Background" style={{
                            "willChange": "transform", "opacity": "1", "transform": "none"
                        }}>
                            <div style={{
                                "position": "absolute", "borderTopLeftRadius": "inherit",
                                "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                    "0px"
                            }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width="1600" height="1419" sizes="(min-width: 1200px) calc(100vw - 40px), (min-width: 810px) and (max-width: 1199px) calc(100vw - 40px), (max-width: 809px) calc(100vw - 40px)"
                                    src={imagemPrincipal}
                                    alt={causa.titulo} style={{
                                        "display": "block", "width": "100%",
                                        "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                            "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                            "inherit", "objectPosition": "center center", "objectFit": "cover"
                                    }} data-framer-original-sizes="calc(100vw - 40px)"
                                />
                            </div>
                        </div>
                        <div className="framer-8fjvyo" data-framer-name="Overlay"></div>
                    </div>
                </div>
                <div className="ssr-variant hidden-wz6xei hidden-utjgut">
                    <div className="framer-1mbulbr" data-framer-name="Background Image" id="main-banner"
                        style={{ "opacity": "1", "transform": "none" }}>
                        <div className="framer-1rzg4gk" data-framer-name="Background" style={{
                            "opacity": "1", "transform": "none"
                        }}>
                            <div style={{
                                "position": "absolute", "borderTopLeftRadius": "inherit",
                                "borderTopRightRadius": "inherit", "borderBottomRightRadius": "inherit",
                                "borderBottomLeftRadius": "inherit", "top": "0px", "right": "0px", "bottom": "0px", "left":
                                    "0px"
                            }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width="1600" height="1419" sizes="(min-width: 1200px) calc(100vw - 40px), (min-width: 810px) and (max-width: 1199px) calc(100vw - 40px), (max-width: 809px) calc(100vw - 40px)"
                                    src={imagemPrincipal}
                                    alt={causa.titulo} style={{
                                        "display": "block", "width": "100%",
                                        "height": "100%", "borderTopLeftRadius": "inherit", "borderTopRightRadius":
                                            "inherit", "borderBottomRightRadius": "inherit", "borderBottomLeftRadius":
                                            "inherit", "objectPosition": "center center", "objectFit": "cover"
                                    }} data-framer-original-sizes="calc(100vw - 40px)"
                                />
                            </div>
                        </div>
                        <div className="framer-8fjvyo" data-framer-name="Overlay"></div>
                    </div>
                </div>
                <div className="ssr-variant hidden-d9yx5v">
                    <div className="framer-nkfslt" data-framer-name="Container" style={{
                        "willChange": "transform", "opacity": "1", "transform": "none"
                    }}>
                        <div className="framer-1nm9qe6" data-framer-name="Title">
                            <div className="framer-1sbp8nz" data-framer-name="Access to Education"
                                data-framer-component-type="RichTextContainer" style={{
                                    "transform":
                                        "none"
                                }}>
                                <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                    style={{
                                        color:
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                    }}>
                                    {causa.titulo}</h1>

                            </div>
                        </div>
                        <div className="framer-1t49gtd" data-framer-name="Badge Wrap">
                            {causa.objetivo && (
                                <div className="framer-qarhod-container">
                                    <div className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
                                        data-framer-name="Primary" style={{
                                            "backgroundColor":
                                                "var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))", "borderBottomLeftRadius": "4px", "borderBottomRightRadius": "4px",
                                            "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px"
                                        }}>
                                        <div className="framer-1xva6ob" data-framer-name="Goal:" data-framer-component-type="RichTextContainer"
                                            style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-myx315" data-styles-preset="SArK0nEOS">Objetivo:</p>
                                        </div>
                                        <div className="framer-1y22eeh" data-framer-name="$114,000" data-framer-component-type="RichTextContainer"
                                            style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">{formatCurrency(causa.objetivo)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="ssr-variant hidden-wz6xei hidden-utjgut">
                    <div className="framer-nkfslt" data-framer-name="Container" style={{
                        "opacity": "1", "transform": "none"
                    }}>
                        <div className="framer-1nm9qe6" data-framer-name="Title">
                            <div className="framer-1sbp8nz" data-framer-name="Access to Education"
                                data-framer-component-type="RichTextContainer" style={{
                                    "transform":
                                        "none"
                                }}>
                                <h1 className="framer-text framer-styles-preset-172snon" data-styles-preset="ayQ9EeMdI"
                                    style={{
                                        color:
                                            "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
                                    }}>
                                    {causa.titulo}</h1>

                            </div>
                        </div>
                        <div className="framer-1t49gtd" data-framer-name="Badge Wrap">
                            {causa.objetivo && (
                                <div className="framer-qarhod-container">
                                    <div className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
                                        data-framer-name="Primary" style={{
                                            "backgroundColor":
                                                "var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))", "borderBottomLeftRadius": "4px", "borderBottomRightRadius": "4px",
                                            "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px"
                                        }}>
                                        <div className="framer-1xva6ob" data-framer-name="Goal:" data-framer-component-type="RichTextContainer"
                                            style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-myx315" data-styles-preset="SArK0nEOS">Objetivo:</p>
                                        </div>
                                        <div className="framer-1y22eeh" data-framer-name="$114,000" data-framer-component-type="RichTextContainer"
                                            style={{ "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw">{formatCurrency(causa.objetivo)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}