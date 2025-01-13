import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useUserState = create()((set, get) => ({
    userStates: [],
    loading: false,
    error: null,
    getUserStates: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/state/search-alls');
            set({ userStates: resp.estados, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveUserState: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/state/register', data);
            set({ loading: false });
            await get().getUserStates();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateUserState: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/state/update', id, data);
                set({ loading: false });
                await get().getUserStates();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteUserState: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/state/delete/${id}`);
            set({ loading: false });
            await get().getUserStates();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
