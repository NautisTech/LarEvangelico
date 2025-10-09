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
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1200,
            }}
            onClick={(e) => {
                // only close when clicking the backdrop but not inside the modal content
                if (e.target === e.currentTarget) {
                    // intentionally do nothing — user requested only header X closes modal
                }
            }}
        >
            <div
                className="donation-modal"
                style={{
                    width: "min(740px, 92vw)",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    borderRadius: 16,
                    background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)",
                    boxShadow: "0 20px 40px rgba(12, 12, 12, 0.25)",
                    padding: 24,
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#FFCE55,#FF6B6B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>
                            D
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: 18, color: "#1D0F02" }}>Doação</h3>
                            <div style={{ fontSize: 12, color: "#6b5746" }}>Apoie esta causa</div>
                        </div>
                    </div>

                    <button
                        aria-label="Fechar"
                        onClick={onClose}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 6,
                            borderRadius: 8,
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1D0F02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1D0F02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </header>

                <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ fontSize: 16, color: "#1D0F02" }}>
                        Muito obrigado pelo seu apoio!
                        <p style={{ marginTop: 8, marginBottom: 0 }}>Qualquer ajuda é muito bem-vinda.</p>
                        <p style={{ marginTop: 8, marginBottom: 0 }}>
                            A Associação não tem fins lucrativos e, por ser uma IPSS, as contribuições podem ser deduzidas, nos termos da legislação aplicável, em sede de impostos.
                        </p>
                    </div>

                    <div style={{ padding: 12, borderRadius: 12, background: "#FFF6E6", border: "1px solid #F3DDBF" }}>
                        <h4 style={{ margin: 0, fontSize: 14 }}>Informação para transferência</h4>
                        <div style={{ marginTop: 8, fontSize: 14 }}>
                            <div><strong>Banco:</strong> BPI</div>
                            <div><strong>IBAN:</strong> {randomIban}</div>
                            <div><strong>BIC/SWIFT:</strong> {randomBic}</div>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ width: 140, height: 140, background: "#F8F8F8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed #E6E0D6" }}>
                            {/* QR placeholder */}
                            <div style={{ textAlign: "center", color: "#6b5746" }}>
                                <div style={{ fontSize: 12 }}>QR Code</div>
                                <div style={{ fontSize: 10, marginTop: 6 }}>[placeholder]</div>
                            </div>
                        </div>

                        <div style={{ flex: 1, minWidth: 240 }}>
                            <p style={{ margin: 0 }}>Por favor envie-nos um comprovativo da sua doação para: <a href="mailto:somosnos@somosnos.pt">somosnos@somosnos.pt</a></p>
                            <p style={{ marginTop: 8 }}>
                                Indique no email o seu nome (<em>joao.coutinho.seaders</em>), NIF e morada para emissão de recibo.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                        <button onClick={onClose} style={{ background: "transparent", border: "1px solid #E6D6C1", padding: "8px 12px", borderRadius: 8, cursor: "pointer" }}>Fechar</button>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert('Obrigado pela intenção de doar! (simulação)'); }} style={{ background: "#FF8C42", color: "white", padding: "8px 12px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                            Doar agora
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
