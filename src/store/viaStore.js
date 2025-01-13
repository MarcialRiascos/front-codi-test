import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useViaState = create()((set, get) => ({
    vias: [],
    loading: false,
    error: null,
    getVias: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/via/search-alls');
            set({ vias: resp.vias, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveVia: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/via/register', data);
            set({ loading: false });
            await get().getVias();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateVia: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/via/update', id, data);
                set({ loading: false });
                await get().getVias();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteVia: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/via/delete/${id}`);
            set({ loading: false });
            await get().getVias();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
