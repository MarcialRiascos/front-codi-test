import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface GenderType {
    Sexo: string;
}

interface GenderData {
    idSexo: string|number;
    Sexo: string;
}

interface GenderState {
    genders: GenderData[];
    loading: boolean;
    error: string | null;
    getGender: () => Promise<void>;
    saveGender: (gender: GenderType) => Promise<void>;
    updateGender: (id: string | number, gender: GenderType) => Promise<void>;
    deleteGender: (id: string | number) => Promise<void>;
}

export const useGenderStore = create<GenderState>()((set, get) => ({
    genders: [],
    loading: false,
    error: null,
    getGender: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/sex/search-alls');
            set({ genders: resp.sexos, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveGender: async (data: GenderType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/sex/register', data);
            set({ loading: false });

            await get().getGender();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateGender: async (id: string | number, data: GenderType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/sex/update', id, data);
                set({ loading: false });

                await get().getGender();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteGender: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/sex/delete/${id}`);
            set({ loading: false });

            await get().getGender();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));