import { create } from 'zustand';
import { deleteEndpoint, getData, post, updateEndpoint } from '../services/api';

interface UnitType {
    TipoUnidad: string;
}

interface UnitTypeData {
    idTipoUnidad: string|number;
    TipoUnidad: string;
}

interface UnitTypeState {
    unitTypes: UnitTypeData[];
    loading: boolean;
    error: string | null;
    getUnitTypes: () => Promise<void>;
    saveUnitType: (unitType: UnitType) => Promise<void>;
    updateUnitType: (id: string | number, unitType: UnitType) => Promise<void>;
    deleteUnitType: (id: string | number) => Promise<void>;
}

export const useUnitTypeState = create<UnitTypeState>()((set, get) => ({
    unitTypes: [],
    loading: false,
    error: null,
    getUnitTypes: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await getData('api/v1/unit-type/search-alls');
            set({ unitTypes: resp.tipoUnidades, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveUnitType: async (data: UnitType) => {
        set({ loading: true, error: '' });
        try {
            await post('api/v1/unit-type/register', data);
            set({ loading: false });

            await get().getUnitTypes();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateUnitType: async (id: string | number, data: UnitType) => {
        set({ loading: true, error: '' });
        try {
            if (id && data) {
                await updateEndpoint('api/v1/unit-type/update', id, data);
                set({ loading: false });

                await get().getUnitTypes();
            }
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteUnitType: async (id: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/unit-type/delete/${id}`);
            set({ loading: false });

            await get().getUnitTypes();
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));