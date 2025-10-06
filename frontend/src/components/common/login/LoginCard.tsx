"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LoginCardProps {
    onLogin: (username: string, password: string) => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const LoginCard = ({ onLogin, loading, error }: LoginCardProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onLogin(username, password);
    };

    return (
        <div className="login-card">
            <div className="login-card-header">
                <div className="flex justify-start w-full mb-4">
                    <div>
                        <Link href="/" className="text-gray-600 hover:text-black">
                            <span className="inline-flex items-center gap-2">
                                <ArrowLeft size={18} />
                                Voltar
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="login-icon">
                    <Image
                        src="/images/R4KQykLHAnUMi4bCMb0sZog1Wg-1.png"
                        alt="Logo"
                        width={52}
                        height={52}
                    />
                </div>
                <h1 className="login-title">Bem-vindo</h1>
                <p className="login-subtitle">Aceda ao painel de administração</p>
            </div>

            <div className="login-card-body">
                <div className="login-divider">
                    <div className="divider-line"></div>
                </div>

                {/* Username/Password Form */}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">
                            Nome de utilizador
                        </label>
                        <div className="input-container">
                            <Mail className="input-icon" size={18} />
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="utilizador"
                                required
                                disabled={loading}
                                className="form-input with-icon"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            Palavra-passe
                        </label>
                        <div className="input-container">
                            <Lock className="input-icon" size={18} />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                disabled={loading}
                                className="form-input with-icon with-toggle"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                                className="password-toggle"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !username || !password}
                        className="login-button"
                    >
                        {loading ? (
                            <div className="login-button-loading">
                                <div className="loading-spinner"></div>
                                <span>A entrar...</span>
                            </div>
                        ) : (
                            <div className="login-button-content">
                                <LogIn size={18} />
                                <span>Entrar</span>
                            </div>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};