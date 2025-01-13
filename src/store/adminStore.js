import { create } from 'zustand';
import { getData, post, updateEndpoint, deleteEndpoint } from '../services/api';
export const useAdminStore = create()((set, get) => ({
    userAdmin: [],
    loading: false,
    error: null,
    getAdmins: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/admin/search-alls');
            set({ userAdmin: resp.admins, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    createAdmin: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/admin/register', data);
            set({ loading: false });
            await get().getAdmins();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateAdmin: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            await updateEndpoint('api/v1/admin/update', id, data);
            set({ loading: false });
            await get().getAdmins();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteAdmin: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/admin/delete/${id}`);
            set({ loading: false });
            await get().getAdmins();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
