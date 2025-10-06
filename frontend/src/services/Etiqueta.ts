import { axiosPrivate } from "@/utils";
import { type Etiqueta } from '@/models'


export type CreateEtiquetaData = Omit<Etiqueta, 'id'>;
export type UpdateEtiquetaData = Partial<CreateEtiquetaData>;

export interface BulkUpdateEtiquetaItem {
    id: number;
    data: UpdateEtiquetaData;
}

export interface BulkUpdateEtiquetaRequest {
    updates: BulkUpdateEtiquetaItem[];
}

export const fetchEtiquetas = async (): Promise<Etiqueta[]> => {
    try {
        const response = await axiosPrivate.get<Etiqueta[]>(`/etiqueta`);
        if (Array.isArray(response.data)) {
            return response.data;
        }
        throw new Error("Dados inválidos recebidos do servidor");
    } catch (error) {
        throw new Error("Erro ao obter etiquetas.");
    }
};

export const createEtiqueta = async (etiqueta: CreateEtiquetaData): Promise<Etiqueta> => {
    try {
        const response = await axiosPrivate.post<Etiqueta>('/etiqueta', etiqueta);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao criar etiqueta');
    }
};

export const updateEtiqueta = async (id: string | number, etiqueta: UpdateEtiquetaData): Promise<Etiqueta> => {
    try {
        const response = await axiosPrivate.put<Etiqueta>(`/etiqueta/${id}`, etiqueta);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao atualizar etiqueta.");
    }
};

export const deleteEtiqueta = async (id: string | number): Promise<void> => {
    try {
        await axiosPrivate.delete(`/etiqueta/${id}`);
    } catch (error) {
        throw new Error("Erro ao apagar etiqueta.");
    }
};

export const bulkDeleteEtiquetas = async (ids: (string | number)[]): Promise<void> => {
    try {
        await axiosPrivate.delete('/etiqueta/bulk/delete', { data: { ids } } as any);
    } catch (error) {
        throw new Error("Erro ao apagar etiquetas.");
    }
};

export const bulkUpdateEtiquetas = async (updates: BulkUpdateEtiquetaRequest): Promise<Etiqueta[]> => {
    try {
        const response = await axiosPrivate.put<Etiqueta[]>('/etiqueta/bulk/update', updates);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao atualizar etiquetas.");
    }
};