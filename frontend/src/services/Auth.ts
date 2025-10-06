import { axiosPrivate, axiosPublic } from "@/utils";
import type { Utilizador } from "@/models";
import { toast } from "react-toastify";

export interface LoginPayload {
    username: string;
    senha: string;
    ip?: string;
}

export interface AuthResponse {
    access_token: string;
    utilizador: Utilizador;
}

export interface RefreshResponse {
    access_token: string;
}

export const AuthService = {
    // Login do utilizador
    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        payload.ip = window?.location?.hostname || '-';
        const response = await axiosPublic.post<AuthResponse>("/auth/login", payload);
        return response.data;
    },

    // Obter perfil do utilizador autenticado
    getProfile: async (base: boolean = false): Promise<Utilizador> => {
        let response;
        if (base) response = await axiosPrivate.get<Utilizador>("/utilizador/profile/base");
        else response = await axiosPrivate.get<Utilizador>("/utilizador/profile");

        return response.data;
    },

    // Logout (limpar token do backend se necessário)
    logout: async (): Promise<void> => {
        try {
            await axiosPrivate.post("/auth/logout");
        } catch (error) {
            // Mesmo que falhe no backend, continuamos com logout local
            toast.warn(`Erro ao fazer logout no backend: ${error}`);
        }
    },

    // Refresh token (implementar no backend)
    refreshToken: async (): Promise<RefreshResponse> => {
        const response = await axiosPrivate.post<RefreshResponse>("/auth/refresh");
        return response.data;
    },

    // Verificar se token ainda é válido
    verifyToken: async (): Promise<boolean> => {
        try {
            await axiosPrivate.get("/auth/verify");
            return true;
        } catch {
            return false;
        }
    },

    // Alterar senha
    changeSenha: async (currentSenha: string, newSenha: string): Promise<void> => {
        await axiosPrivate.put("/auth/senha", {
            currentSenha,
            newSenha
        });
    }
};
