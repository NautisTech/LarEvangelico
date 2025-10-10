"use client";

import { useState, useEffect } from "react";
import { Utilizador } from "@/models";
import { XIcon, Eye, EyeOff, Lock } from "lucide-react";
import { toast } from "react-toastify";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (password: string) => void;
    utilizador?: Utilizador | null;
    isLoading?: boolean;
}

export function ChangePasswordModal({
    isOpen,
    onClose,
    onSave,
    utilizador,
    isLoading = false,
}: ChangePasswordModalProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setPassword("");
            setConfirmPassword("");
            setShowPassword(false);
            setShowConfirmPassword(false);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!password) {
            toast.warning("Por favor, insira uma nova password.");
            return;
        }

        if (password.length < 6) {
            toast.warning("A password deve ter pelo menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            toast.warning("As passwords não coincidem.");
            return;
        }

        onSave(password);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">
                        Alterar Password
                    </h2>
                    <button
                        onClick={onClose}
                        className="modal-close-button"
                        disabled={isLoading}
                    >
                        <XIcon />
                    </button>
                </div>

                <div className="modal-body navbar-dropdown-scrollable">
                    <div className="modal-form-container">
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="tab-content">
                                <div className="form-section">
                                    <h3 className="modal-section-title">
                                        <Lock className="modal-section-icon" />
                                        Alterar Password de {utilizador?.nome || "Utilizador"}
                                    </h3>
                                    <div className="form-columns">
                                        <div className="form-group">
                                            <label htmlFor="password" className="form-label required">
                                                Nova Password
                                            </label>
                                            <div className="password-input-container">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-input"
                                                    required
                                                    disabled={isLoading}
                                                    placeholder="Nova password"
                                                    autoFocus
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="password-toggle-button"
                                                    disabled={isLoading}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="form-label required">
                                                Confirmar Password
                                            </label>
                                            <div className="password-input-container">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    id="confirmPassword"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className="form-input"
                                                    required
                                                    disabled={isLoading}
                                                    placeholder="Confirmar password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="password-toggle-button"
                                                    disabled={isLoading}
                                                >
                                                    {showConfirmPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        onClick={onClose}
                        className="button-base delete-button"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="button-base create-button"
                        disabled={isLoading}
                    >
                        <div className="modal-button-loading">
                            {isLoading && <div className="loading-spinner"></div>}
                            {isLoading ? "A atualizar..." : "Alterar Password"}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
