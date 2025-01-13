import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useGenderStore = create()((set, get) => ({
    genders: [],
    loading: false,
    error: null,
    getGender: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/sex/search-alls');
            set({ genders: resp.sexos, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveGender: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/sex/register', data);
            set({ loading: false });
            await get().getGender();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateGender: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/sex/update', id, data);
                set({ loading: false });
                await get().getGender();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteGender: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/sex/delete/${id}`);
            set({ loading: false });
            await get().getGender();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
