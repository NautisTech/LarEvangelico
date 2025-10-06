"use client";

import { LoginCard } from "./LoginCard";

interface LoginContainerProps {
    onLogin: (username: string, password: string) => Promise<void>;
    onSocialLogin: (provider: 'microsoft') => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const LoginContainer = ({ onLogin, loading, error }: LoginContainerProps) => {
    return (
        <div className="login-page">
            <div className="login-content">
                <LoginCard
                    onLogin={onLogin}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};