import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface StateType {
    Estado: string;
}

interface UserStateData {
    idEstado: string|number;
    Estado: string;
}

interface UserStateState {
    userStates: UserStateData[];
    loading: boolean;
    error: string | null;
    getUserStates: () => Promise<void>;
    saveUserState: (stratum: StateType) => Promise<void>;
    updateUserState: (id: string | number, stratum: StateType) => Promise<void>;
    deleteUserState: (id: string | number) => Promise<void>;
}

export const useUserState = create<UserStateState>()((set, get) => ({
    userStates: [],
    loading: false,
    error: null,
    getUserStates: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/state/search-alls');
            set({ userStates: resp.estados, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveUserState: async (data: StateType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/state/register', data);
            set({ loading: false });

            await get().getUserStates();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateUserState: async (id: string | number, data: StateType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/state/update', id, data);
                set({ loading: false });

                await get().getUserStates();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteUserState: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/state/delete/${id}`);
            set({ loading: false });

            await get().getUserStates();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));