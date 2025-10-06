import { axiosPrivate, axiosPublic, Modulo, TipoConteudo, TipoPermissao } from "@/utils";
import { type Conteudo } from '@/models'

export type CreateConteudoData = Omit<Conteudo, 'id' | 'criado_em' | 'criado_por' | 'atualizado_por' | 'atualizado_em' | 'visualizacoes'>;
export type UpdateConteudoData = Partial<CreateConteudoData>;

export interface BulkUpdateConteudoItem {
    id: number;
    data: UpdateConteudoData;
}

export interface BulkUpdateConteudoRequest {
    updates: BulkUpdateConteudoItem[];
}

export const fetchConteudos = async (tipo: TipoConteudo, isPublic: boolean = false): Promise<Conteudo[]> => {
    try {

        const client = isPublic ? axiosPublic : axiosPrivate;
        const base = isPublic ? "/conteudo/public" : "/conteudo";
        const response = await client.get<Conteudo[]>(`${base}/${tipo.toString()}`);

        if (Array.isArray(response.data)) {
            return response.data;
        }
        throw new Error("Dados inválidos recebidos do servidor");
    } catch (error) {
        throw new Error("Erro ao obter conteudos.");
    }
};

export const fetchConteudosByEntidade = async (entidadeId: number, tipo: TipoConteudo, isPublic: boolean = false): Promise<Conteudo[]> => {
    try {

        const client = isPublic ? axiosPublic : axiosPrivate;
        const base = isPublic ? "/conteudo/public" : "/conteudo";
        const response = await client.get<Conteudo[]>(`${base}/${tipo.toString()}/entidade/${entidadeId}`);

        if (Array.isArray(response.data)) {
            return response.data;
        }
        throw new Error("Dados inválidos recebidos do servidor");
    } catch (error) {
        throw new Error("Erro ao obter conteudos.");
    }
};

export const fetchAllConteudos = async (): Promise<Conteudo[]> => {
    try {
        const response = await axiosPrivate.get<Conteudo[]>(`/conteudo`);
        if (Array.isArray(response.data)) {
            return response.data;
        }
        throw new Error("Dados inválidos recebidos do servidor");
    } catch (error) {
        throw new Error("Erro ao obter conteudos.");
    }
};

export const createConteudo = async (conteudo: CreateConteudoData, canApprove: boolean = false): Promise<Conteudo> => {
    try {
        conteudo = { ...conteudo, publico: canApprove };
        const response = await axiosPrivate.post<Conteudo>('/conteudo', conteudo);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao criar conteudo');
    }
};

export const updateConteudo = async (id: string | number, conteudo: UpdateConteudoData): Promise<Conteudo> => {
    try {
        const response = await axiosPrivate.put<Conteudo>(`/conteudo/${id}`, conteudo);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao atualizar conteudo.");
    }
};

export const bulkUpdateConteudos = async (updates: BulkUpdateConteudoRequest): Promise<Conteudo[]> => {
    try {
        const response = await axiosPrivate.put<Conteudo[]>('/conteudo/bulk/update', updates);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao atualizar conteudos.");
    }
};

export const deleteConteudo = async (id: string | number): Promise<void> => {
    try {
        await axiosPrivate.delete(`/conteudo/${id}`);
    } catch (error) {
        throw new Error("Erro ao apagar conteudo.");
    }
};

export const bulkDeleteConteudos = async (ids: (string | number)[]): Promise<void> => {
    try {
        await axiosPrivate.delete('/conteudo/bulk/delete', { data: { ids } } as any);
    } catch (error) {
        throw new Error("Erro ao apagar conteudos.");
    }
};

export const approveConteudo = async (id: string | number): Promise<Conteudo> => {
    try {
        const response = await axiosPrivate.put<Conteudo>(`/conteudo/${id}/approve`);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao concluir conteudo.");
    }
};

export const disapproveConteudo = async (id: string | number): Promise<Conteudo> => {
    try {
        const response = await axiosPrivate.put<Conteudo>(`/conteudo/${id}/disapprove`);
        return response.data;
    }
    catch (error) {
        throw new Error("Erro ao reabrir conteudo.");
    }
};

export const bulkapproveConteudos = async (ids: (string | number)[]): Promise<Conteudo[]> => {
    try {
        const response = await axiosPrivate.put<Conteudo[]>('/conteudo/bulk/approve', { ids });
        return response.data;
    } catch (error) {
        throw new Error("Erro ao concluir conteudos.");
    }
};

export const bulkDisapproveConteudos = async (ids: (string | number)[]): Promise<Conteudo[]> => {
    try {
        const response = await axiosPrivate.put<Conteudo[]>('/conteudo/bulk/disapprove', { ids });
        return response.data;
    }
    catch (error) {
        throw new Error("Erro ao reabrir conteudos.");
    }
};

export const fetchConteudoById = async (id: string, isPublic: boolean = false): Promise<Conteudo> => {
    try {
        const client = isPublic ? axiosPublic : axiosPrivate;
        const base = isPublic ? "/conteudo/public" : "/conteudo";
        const response = await client.get<Conteudo>(`${base}/id/${id}`);
        return response.data;

    } catch (error) {
        throw new Error("Erro ao obter conteúdo.");
    }
};