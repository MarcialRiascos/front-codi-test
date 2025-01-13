import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useSocialStrataStore = create()((set, get) => ({
    socialStrata: [],
    loading: false,
    error: null,
    getSocialStrata: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/stratum/search-alls');
            set({ socialStrata: resp.estratos, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveSocialStrata: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/stratum/register', data);
            set({ loading: false });
            await get().getSocialStrata();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateSocialStrata: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/stratum/update', id, data);
                set({ loading: false });
                await get().getSocialStrata();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteSocialStrata: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/stratum/delete/${id}`);
            set({ loading: false });
            await get().getSocialStrata();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
