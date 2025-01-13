import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useNeighborhoodStore = create()((set, get) => ({
    neighborhoods: [],
    loading: false,
    error: null,
    getNeighborhoods: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/neighborhood/search-alls');
            set({ neighborhoods: resp.barrios, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveNeighborhood: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/neighborhood/register', data);
            set({ loading: false });
            await get().getNeighborhoods();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateNeighborhood: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/neighborhood/update', id, data);
                set({ loading: false });
                await get().getNeighborhoods();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteNeighborhood: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/neighborhood/delete/${id}`);
            set({ loading: false });
            await get().getNeighborhoods();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
