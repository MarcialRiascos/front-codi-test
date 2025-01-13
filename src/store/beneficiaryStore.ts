import { create } from 'zustand'
// import { persist, PersistOptions } from 'zustand/middleware';
import { BeneficiaryData } from '../features/Dashboard/types'
import { fetchApi } from '../services/api';
import { BeneficiarioSchema } from '../features/Dashboard/schemas/registerUser';
import { showModal } from '../utils/modal';

interface BeneficiaryState {
    userBeneficiary: BeneficiaryData[] | null;
    loading: boolean;
    messageB: string;
    error: string | null;
    getBeneficiaries: () => Promise<void>;
    createBeneficiary: (data: BeneficiarioSchema) => Promise<void>;
    updateBeneficiary: (id: string | number, data: BeneficiarioSchema) => Promise<void>;
    deleteBeneficiary: (id: string | number) => Promise<void>;
}

export const useBeneficiaryStore = create<BeneficiaryState>()((set, get) => ({
    userBeneficiary: [],
    loading: false,
    messageB: '',
    error: null,
    getBeneficiaries: async () => {
        set({ loading: true, error: '' });

        const response = await fetchApi<BeneficiaryData[]>(
            'api/v1/beneficiary/search-alls',
            'GET',
            null,
            undefined,
            true // Incluye las cookies en la solicitud
        )

        if (response.data) {
            set({ userBeneficiary: response.data, loading: false });
        } else {
            set({ error: response.error, loading: false });
        }
    },
    createBeneficiary: async (data: BeneficiarioSchema) => {
        set({ loading: true, error: '' });

        const response = await fetchApi<BeneficiaryData[]>(
            'api/v1/beneficiary/register',
            'POST',
            data,
            undefined,
            true // Incluye las cookies en la solicitud
        )
        if (response.data) {
            showModal("Resgistro exitoso", "El usuario ha sido registrado exitosamente", "success");
            set({ messageB: response.message, loading: false, userBeneficiary: response.data });
            await get().getBeneficiaries();
        } else {
            showModal("Error al registrar beneficiario", `${response.error}`, "error");
            set({ error: response.error, loading: false });
        }
    },
    updateBeneficiary: async (id: string | number, data: BeneficiarioSchema) => {
        set({ loading: true, error: '' });

        const response = await fetchApi<BeneficiaryData[]>(
            `api/v1/beneficiary/update/${id}`,
            'PUT',
            data,
            undefined,
            true // Incluye las cookies en la solicitud
        )

        if (response.data) {
            showModal("Actualización exitosa", "El beneficiario ha sido actualizado exitosamente", "success");
            set({ loading: false });
            await get().getBeneficiaries();
        } else {
            showModal("Error al actualizar beneficiario", `${response.error}`, "error");
            set({ error: response.error, loading: false });
        }
        
    },
    deleteBeneficiary: async (id: string | number) => {
        set({ loading: true, error: '' });

        const response = await fetchApi<BeneficiaryData[]>(
            `api/v1/beneficiary/delete/${id}`,
            'DELETE',
            null,
            undefined,
            true // Incluye las cookies en la solicitud
        )

        if (response.data) {
            set({ loading: false });
            await get().getBeneficiaries();
        } else {
            set({ error: response.error, loading: false });
        }
    }
})
)