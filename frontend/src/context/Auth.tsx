"use client";


import React, { createContext, useContext, useMemo, useCallback, useState, useEffect } from "react";
import { AuthService } from "@/services";
import { Utilizador } from "@/models";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";

// Definindo a interface para o AuthContext
export interface AuthContextProps {
    utilizador: Utilizador | null;
    token: string | null;
    login: (username: string, senha: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    handleAuthError: (error: any) => void;  // Função para gerir erros
    loadFullProfile: () => Promise<Utilizador | null>; // Método para carregar perfil completo quando necessário
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();
    // Token - usar useState para evitar problemas de hidratação
    const [token, setToken] = useState<string | null>(null);
    const [isTokenLoaded, setIsTokenLoaded] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("JwtToken");
        setToken(storedToken);
        setIsTokenLoaded(true);
    }, []);

    // Perfil do utilizador
    const {
        data: utilizadorData,
        isLoading: loading,
        error: profileError,
        refetch: refetchProfile
    } = useQuery({
        queryKey: ['auth', 'profile', 'base'],
        queryFn: () => AuthService.getProfile(true),
        enabled: isTokenLoaded && !!token,
        retry: false,
        staleTime: 15 * 60 * 1000, // Cache por 15 minutos
        gcTime: 30 * 60 * 1000, // Manter em cache por 30 minutos
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    const utilizador = useMemo(() => {
        if (!utilizadorData) return null;
        return new Utilizador(utilizadorData);
    }, [utilizadorData]);

    // Login mutation
    const {
        mutateAsync: loginMutate,
        isPending: loginLoading,
        error: loginError
    } = useMutation({
        mutationFn: async ({ username, senha }: { username: string, senha: string }) => {
            const { access_token, utilizador } = await AuthService.login({ username, senha });
            localStorage.setItem("JwtToken", access_token);
            setToken(access_token);
            // Atualiza o perfil após login
            await queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
            return utilizador;
        }
    });

    // Logout mutation
    const {
        mutate: logoutMutate
    } = useMutation({
        mutationFn: async () => {
            await AuthService.logout();
            localStorage.removeItem("JwtToken");
            setToken(null);
        },
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['auth', 'profile'] });
        }
    });

    // Handler de erro
    const handleAuthError = useCallback((error: any) => {
        let errorMessage = "Erro desconhecido";
        if (error?.response) {
            switch (error.response.status) {
                case 401:
                    errorMessage = "Credenciais inválidas ou expiradas. Por favor, faça login novamente.";
                    break;
                case 403:
                    errorMessage = "Você não tem permissão para acessar este recurso.";
                    break;
                case 500:
                    errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
                    break;
                default:
                    errorMessage = error.response.data?.message || errorMessage;
                    break;
            }
        } else if (error?.message) {
            errorMessage = error.message || errorMessage;
        }
        return errorMessage;
    }, []);

    // Métodos expostos
    const login = useCallback(async (username: string, senha: string) => {
        await loginMutate({ username, senha });
    }, [loginMutate]);

    const logout = useCallback(() => {
        logoutMutate();
    }, [logoutMutate]);

    const loadFullProfile = useCallback(async (): Promise<Utilizador | null> => {
        if (!token) return null;
        try {
            const fullProfile = await AuthService.getProfile(false);
            queryClient.setQueryData(['auth', 'profile', 'full'], fullProfile);
            return new Utilizador(fullProfile);
        } catch (error) {
            toast.error(`Erro ao carregar perfil completo: ${error}`);
            return null;
        }
    }, [token, queryClient]);

    const error = (loginError || profileError) ? handleAuthError(loginError || profileError) : null;

    const value = useMemo(
        () => ({
            utilizador: utilizador || null,
            token,
            login,
            logout,
            isAuthenticated: !!utilizador && isTokenLoaded,
            loading: !isTokenLoaded || loading || loginLoading,
            error,
            handleAuthError,
            loadFullProfile,
        }),
        [utilizador, token, login, logout, loading, loginLoading, error, handleAuthError, isTokenLoaded, loadFullProfile]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
