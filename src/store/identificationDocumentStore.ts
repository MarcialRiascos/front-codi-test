import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface DocumentType {
    TipoDocumento: string;
}

interface IdentificationDocument {
    idTipoDocumento: string|number;
    TipoDocumento: string;
}

interface IdentificationDocumentsState {
    documents: IdentificationDocument[];
    loading: boolean;
    error: string | null;
    getIdentificationDocuments: () => Promise<void>;
    saveIdentificationDocument: (newDocument: DocumentType) => Promise<void>;
    updateDocument: (id: string | number, updateDocument: DocumentType) => Promise<void>;
    deleteDocument: (id: string | number) => Promise<void>;
}

export const useIdentificationDocumentStore = create<IdentificationDocumentsState>()((set, get) => ({
    documents: [],
    loading: false,
    error: null,
    getIdentificationDocuments: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/document-type/search-alls');
            set({ documents: resp.tipoDocumentos, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveIdentificationDocument: async (data: DocumentType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/document-type/register', data);
            set({ loading: false });

            await get().getIdentificationDocuments();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateDocument: async (id: string | number, data: DocumentType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/document-type/update', id, data);
                set({ loading: false });

                await get().getIdentificationDocuments();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteDocument: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/document-type/delete/${id}`);
            set({ loading: false });

            await get().getIdentificationDocuments();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));