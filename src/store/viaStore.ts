import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface ViaType {
    Via: string;
}

interface ViaData {
    idVia: string|number;
    Via: string;
}

interface ViaState {
    vias: ViaData[];
    loading: boolean;
    error: string | null;
    getVias: () => Promise<void>;
    saveVia: (via: ViaType) => Promise<void>;
    updateVia: (id: string | number, via: ViaType) => Promise<void>;
    deleteVia: (id: string | number) => Promise<void>;
}

export const useViaState = create<ViaState>()((set, get) => ({
    vias: [],
    loading: false,
    error: null,
    getVias: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/via/search-alls');
            set({ vias: resp.vias, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveVia: async (data: ViaType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/via/register', data);
            set({ loading: false });

            await get().getVias();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateVia: async (id: string | number, data: ViaType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/via/update', id, data);
                set({ loading: false });

                await get().getVias();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteVia: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/via/delete/${id}`);
            set({ loading: false });

            await get().getVias();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));