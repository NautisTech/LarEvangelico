"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context";
import { LoginContainer } from "@/components/common";
// @ts-ignore
import "../../admin/global.css";

export default function LoginPage() {
  const { login, loading, error, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/admin";
    }
  }, [isAuthenticated]);

  const handleLogin = async (username: string, password: string) => {
    await login(username, password);
  };

  const handleSocialLogin = async (provider: 'microsoft') => {
    // TODO: Implement social login logic
    // For now, you can add your social login integration here
    // Example: redirect to OAuth provider or call social auth API
  };

  return (
    <LoginContainer
      onLogin={handleLogin}
      onSocialLogin={handleSocialLogin}
      loading={loading}
      error={error}
    />
  );
}