import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface StratumType {
    Estrato: string;
}

interface StratumData {
    idEstrato: string|number;
    Estrato: string;
}

interface StratumState {
    socialStrata: StratumData[];
    loading: boolean;
    error: string | null;
    getSocialStrata: () => Promise<void>;
    saveSocialStrata: (stratum: StratumType) => Promise<void>;
    updateSocialStrata: (id: string | number, stratum: StratumType) => Promise<void>;
    deleteSocialStrata: (id: string | number) => Promise<void>;
}

export const useSocialStrataStore = create<StratumState>()((set, get) => ({
    socialStrata: [],
    loading: false,
    error: null,
    getSocialStrata: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/stratum/search-alls');
            set({ socialStrata: resp.estratos, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveSocialStrata: async (data: StratumType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/stratum/register', data);
            set({ loading: false });

            await get().getSocialStrata();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateSocialStrata: async (id: string | number, data: StratumType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/stratum/update', id, data);
                set({ loading: false });

                await get().getSocialStrata();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteSocialStrata: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/stratum/delete/${id}`);
            set({ loading: false });

            await get().getSocialStrata();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));