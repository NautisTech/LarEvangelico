// @ts-nocheck
import React from "react";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function DonationModal({ open, onClose }: Props) {
    if (!open) return null;

    // Random IBAN-like and BIC-like strings (placeholder)
    const randomIban = "PT50 1234 5678 9012 3456 7890 1";
    const randomBic = "BPIPPTPLXXX";

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="donation-modal-backdrop"
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(29, 15, 2, 0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1200,
                backdropFilter: "blur(4px)",
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="donation-modal"
                style={{
                    width: "min(800px, 92vw)",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    borderRadius: 24,
                    background: "rgb(255, 255, 255)",
                    boxShadow: "0 24px 48px rgba(29, 15, 2, 0.2)",
                    padding: "40px",
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
                    <div>
                        <h2 className="framer-text framer-styles-preset-1l4ukjs" data-styles-preset="ebpY9F0Dz"
                            style={{ margin: 0, marginBottom: 8, color: "rgb(29, 15, 2)" }}>
                            Apoie a Nossa Causa
                        </h2>
                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                            style={{ margin: 0, color: "rgb(113, 34, 11)" }}>
                            Cada contribuição faz a diferença
                        </p>
                    </div>

                    <button
                        aria-label="Fechar"
                        onClick={onClose}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            borderRadius: 8,
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(29, 15, 2, 0.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="rgb(29, 15, 2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="rgb(29, 15, 2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </header>

                <div style={{ display: "grid", gap: 24 }}>
                    <div>
                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                            style={{ margin: 0, color: "rgb(29, 15, 2)", marginBottom: 4 }}>
                            Muito obrigado pelo seu apoio!
                        </p>
                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                            style={{ margin: 0, color: "rgb(29, 15, 2)", marginBottom: 4 }}>
                            Qualquer ajuda é muito bem-vinda e permite-nos continuar a servir com compaixão e dedicação.
                        </p>
                        <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                            style={{ margin: 0, color: "rgb(29, 15, 2)", marginBottom: 4 }}>
                            A Fundação não tem fins lucrativos e, por ser uma IPSS, as contribuições podem ser deduzidas, nos termos da legislação aplicável, em sede de impostos.
                        </p>
                    </div>

                    <div style={{
                        padding: 24,
                        borderRadius: 16,
                        background: "rgb(255, 250, 242)",
                        border: "1px solid rgb(238, 220, 190)",
                        boxShadow: "0 2px 8px rgba(29, 15, 2, 0.04)"
                    }}>
                        <h4 className="framer-text framer-styles-preset-ehrduw" data-styles-preset="Pm0hsra8F"
                            style={{ margin: 0, marginBottom: 16, fontSize: "24px", color: "rgb(113, 34, 11)" }}>
                            Informação para Transferência
                        </h4>
                        <div className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                            style={{ display: "grid", gap: 8, color: "rgb(29, 15, 2)" }}>
                            <div><strong>Banco:</strong> BPI</div>
                            <div style={{ fontFamily: "monospace", fontSize: "15px" }}>
                                <strong>IBAN:</strong> {randomIban}
                            </div>
                            <div style={{ fontFamily: "monospace", fontSize: "15px" }}>
                                <strong>BIC/SWIFT:</strong> {randomBic}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                        <div style={{
                            width: 160,
                            height: 160,
                            background: "rgb(248, 245, 240)",
                            borderRadius: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px dashed rgb(238, 220, 190)",
                            boxShadow: "0 2px 8px rgba(29, 15, 2, 0.04)"
                        }}>
                            <div style={{ textAlign: "center", color: "rgb(113, 34, 11)" }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 8 }}>
                                    <rect x="3" y="3" width="7" height="7" stroke="rgb(113, 34, 11)" strokeWidth="1.5" fill="none" />
                                    <rect x="14" y="3" width="7" height="7" stroke="rgb(113, 34, 11)" strokeWidth="1.5" fill="none" />
                                    <rect x="3" y="14" width="7" height="7" stroke="rgb(113, 34, 11)" strokeWidth="1.5" fill="none" />
                                    <rect x="14" y="14" width="3" height="3" fill="rgb(113, 34, 11)" />
                                    <rect x="18" y="18" width="3" height="3" fill="rgb(113, 34, 11)" />
                                </svg>
                                <div className="framer-text" style={{ fontSize: 12, color: "rgb(113, 34, 11)" }}>QR Code</div>
                            </div>
                        </div>

                        <div style={{ flex: 1, minWidth: 280 }}>
                            <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                                style={{ margin: 0, marginBottom: 12, color: "rgb(29, 15, 2)" }}>
                                Por favor envie-nos um comprovativo da sua doação para:{" "}
                                <a href="mailto:contacto@larevangelico.pt" style={{ color: "rgb(113, 34, 11)", textDecoration: "underline" }}>
                                    contacto@larevangelico.pt
                                </a>
                            </p>
                            <p className="framer-text framer-styles-preset-18rceng" data-styles-preset="efNb1Kccw"
                                style={{ margin: 0, color: "rgb(113, 34, 11)", fontSize: "14px" }}>
                                Indique no email o seu <strong>nome</strong>, <strong>NIF</strong> e <strong>morada</strong> para emissão de recibo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
