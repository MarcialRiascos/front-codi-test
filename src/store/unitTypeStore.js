import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';
export const useUnitTypeState = create()((set, get) => ({
    unitTypes: [],
    loading: false,
    error: null,
    getUnitTypes: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/unit-type/search-alls');
            set({ unitTypes: resp.tipoUnidades, loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    saveUnitType: async (data) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/unit-type/register', data);
            set({ loading: false });
            await get().getUnitTypes();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateUnitType: async (id, data) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/unit-type/update', id, data);
                set({ loading: false });
                await get().getUnitTypes();
            }
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteUnitType: async (id) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/unit-type/delete/${id}`);
            set({ loading: false });
            await get().getUnitTypes();
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
