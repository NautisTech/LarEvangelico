"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Copy, Mail, Phone } from "lucide-react";

// Componente para popup de contato
export const ContactPopup = ({
    isOpen,
    onClose,
    type,
    value,
    position,
}: {
    isOpen: boolean;
    onClose: () => void;
    type: "email" | "phone";
    value: string;
    position: { x: number; y: number };
}) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        onClose();
    };

    const handleAction = () => {
        if (type === "email") {
            window.open(`mailto:${value}`, "_blank");
        } else {
            window.open(`tel:${value}`, "_blank");
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            ref={popupRef}
            className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[150px]"
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            <button
                onClick={handleCopy}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
            >
                <Copy size={16} />
                Copiar {type === "email" ? "Email" : "Telefone"}
            </button>
            <button
                onClick={handleAction}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
            >
                {type === "email" ? <Mail size={16} /> : <Phone size={16} />}
                {type === "email" ? "Enviar Email" : "Chamar"}
            </button>
        </div>
    );
};