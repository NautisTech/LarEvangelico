import { axiosPrivate } from "@/utils";
import { toast } from "react-toastify";
import { Anexo } from "@/models";

export type CreateAnexoData = Omit<Anexo, 'id' | 'criado_em' | 'atualizado_em' | 'tamanho'>;
export type UpdateAnexoData = Partial<CreateAnexoData>;

export interface BulkCreateAnexoItem {
    id: number;
    data: CreateAnexoData;
}

export interface BulkCreateAnexoRequest {
    creates: BulkCreateAnexoItem[];
}

export const createAnexo = async (file: File, dto?: CreateAnexoData): Promise<Anexo> => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        if (dto) {
            formData.append("dto", JSON.stringify(dto));
        }

        const { data } = await axiosPrivate.post("/anexo/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    } catch (err) {
        toast.error("Erro ao criar anexo.");
        throw err;
    }
};

export const bulkCreateAnexos = async (files: File[], dto?: BulkCreateAnexoRequest): Promise<Anexo[]> => {
    try {
        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));

        if (dto) {
            formData.append("dto", JSON.stringify(dto));
        }

        const { data } = await axiosPrivate.post("/anexo/bulk/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    } catch (err) {
        toast.error("Erro ao criar anexos.");
        throw err;
    }
};

export const deleteAnexo = async (id: number) => {
    try {
        await axiosPrivate.delete(`/anexo/${id}`);
        return true;
    } catch (err) {
        toast.error("Erro ao apagar anexo.");
        throw err;
    }
};

export const bulkDeleteAnexos = async (ids: number[]) => {
    try {
        await axiosPrivate.delete(`/anexo/bulk/delete`, { data: { ids } });
        return true;
    } catch (err) {
        toast.error("Erro ao apagar anexos.");
        throw err;
    }
};
