import { axiosPrivate } from "@/utils";
import { type Utilizador } from "@/models";
import { toast } from "react-toastify";

// Tipos para operações específicas
export type CreateUtilizadorData = Omit<Utilizador, 'id' | 'criado_em' | 'atualizado_em' | 'ultimo_login' | 'ultimo_ip'>;
export type UpdateUtilizadorData = Partial<CreateUtilizadorData>;

export interface BulkUpdateUtilizadorItem {
  id: number;
  data: UpdateUtilizadorData;
}

export interface BulkUpdateUtilizadorRequest {
  updates: BulkUpdateUtilizadorItem[];
}

export const fetchUtilizadores = async (): Promise<Utilizador[]> => {
  try {
    const response = await axiosPrivate.get<Utilizador[]>(`/utilizador`);
    if (Array.isArray(response.data)) {
      return response.data;
    }
    throw new Error("Dados inválidos recebidos do servidor");
  } catch (error) {
    throw new Error(`Erro ao obter utilizadores: ${error}`);
  }
};

export const fetchUtilizadoresBase = async (): Promise<Utilizador[]> => {
  try {
    const response = await axiosPrivate.get<Utilizador[]>(`/utilizador/base`);
    if (Array.isArray(response.data)) {
      return response.data;
    }
    throw new Error("Dados inválidos recebidos do servidor");
  } catch (error) {
    throw new Error(`Erro ao obter utilizadores: ${error}`);
  }
};

export const createUtilizador = async (
  utilizador: CreateUtilizadorData
): Promise<Utilizador> => {
  try {
    const response = await axiosPrivate.post<Utilizador>(
      "/utilizador",
      utilizador
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar utilizador");
  }
};

export const updateUtilizador = async (
  id: string | number,
  utilizador: UpdateUtilizadorData
): Promise<Utilizador> => {
  try {
    const response = await axiosPrivate.put<Utilizador>(
      `/utilizador/${id}`,
      utilizador
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar utilizador");
  }
};

export const changeUtilizadorPassword = async (
  id: string | number,
  password: string
): Promise<Utilizador> => {
  try {
    const response = await axiosPrivate.put<Utilizador>(
      `/utilizador/${id}/change-password`,
      { senha: password }
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao alterar password: ${error}`);
    throw error;
  }
};

export const bulkUpdateUtilizadores = async (
  updates: BulkUpdateUtilizadorRequest
): Promise<Utilizador[]> => {
  try {
    const response = await axiosPrivate.put<Utilizador[]>(
      "/utilizador/bulk/update",
      updates
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao atualizar utilizadores em massa: ${error}`);
    throw error;
  }
};

export const deactivateUtilizador = async (
  id: string | number
): Promise<Utilizador> => {
  try {
    const response = await axiosPrivate.put<Utilizador>(
      `/utilizador/${id}/deactivate`
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao desativar utilizador: ${error}`);
    throw error;
  }
};

export const activateUtilizador = async (
  id: string | number
): Promise<Utilizador> => {
  try {
    const response = await axiosPrivate.put<Utilizador>(
      `/utilizador/${id}/activate`
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao ativar utilizador: ${error}`);
    throw error;
  }
};

export const bulkDeactivateUtilizadores = async (
  ids: (string | number)[]
): Promise<Utilizador[]> => {
  try {
    const response = await axiosPrivate.put<Utilizador[]>(
      "/utilizador/bulk/deactivate",
      { ids }
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao desativar utilizadores em massa: ${error}`);
    throw error;
  }
};

export const bulkActivateUtilizadores = async (
  ids: (string | number)[]
): Promise<Utilizador[]> => {
  try {
    const response = await axiosPrivate.put<Utilizador[]>(
      "/utilizador/bulk/activate",
      { ids }
    );
    return response.data;
  } catch (error) {
    toast.error(`Erro ao ativar utilizadores em massa: ${error}`);
    throw error;
  }
};
