import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useIdentificationDocumentStore = create()((set, get) => ({
    documents: [],
    loading: false,
    error: null,
    getIdentificationDocuments: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/document-type/search-alls');
            set({ documents: resp.tipoDocumentos, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveIdentificationDocument: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/document-type/register', data);
            set({ loading: false });
            await get().getIdentificationDocuments();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateDocument: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/document-type/update', id, data);
                set({ loading: false });
                await get().getIdentificationDocuments();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteDocument: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/document-type/delete/${id}`);
            set({ loading: false });
            await get().getIdentificationDocuments();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
