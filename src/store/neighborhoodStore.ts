import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface NeighborhoodType {
    Barrio: string;
}

interface NeighborhoodsData {
    idBarrio: string|number;
    Barrio: string;
}

interface NeighborhoodsState {
    neighborhoods: NeighborhoodsData[];
    loading: boolean;
    error: string | null;
    getNeighborhoods: () => Promise<void>;
    saveNeighborhood: (gender: NeighborhoodType) => Promise<void>;
    updateNeighborhood: (id: string | number, gender: NeighborhoodType) => Promise<void>;
    deleteNeighborhood: (id: string | number) => Promise<void>;
}

export const useNeighborhoodStore = create<NeighborhoodsState>()((set, get) => ({
    neighborhoods: [],
    loading: false,
    error: null,
    getNeighborhoods: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/neighborhood/search-alls');
            set({ neighborhoods: resp.barrios, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveNeighborhood: async (data: NeighborhoodType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/neighborhood/register', data);
            set({ loading: false });

            await get().getNeighborhoods();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateNeighborhood: async (id: string | number, data: NeighborhoodType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/neighborhood/update', id, data);
                set({ loading: false });

                await get().getNeighborhoods();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteNeighborhood: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/neighborhood/delete/${id}`);
            set({ loading: false });

            await get().getNeighborhoods();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));