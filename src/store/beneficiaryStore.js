import { create } from 'zustand';
import { fetchApi } from '../services/api';
import { showModal } from '../utils/modal';
export const useBeneficiaryStore = create()((set, get) => ({
    userBeneficiary: [],
    loading: false,
    messageB: '',
    error: null,
    getBeneficiaries: async () => {
        set({ loading: true, error: '' });
        const response = await fetchApi('api/v1/beneficiary/search-alls', 'GET', null, undefined, true // Incluye las cookies en la solicitud
        );
        if (response.data) {
            set({ userBeneficiary: response.data, loading: false });
        }
        else {
            set({ error: response.error, loading: false });
        }
    },
    createBeneficiary: async (data) => {
        set({ loading: true, error: '' });
        const response = await fetchApi('api/v1/beneficiary/register', 'POST', data, undefined, true // Incluye las cookies en la solicitud
        );
        if (response.data) {
            showModal("Resgistro exitoso", "El usuario ha sido registrado exitosamente", "success");
            set({ messageB: response.message, loading: false, userBeneficiary: response.data });
            await get().getBeneficiaries();
        }
        else {
            showModal("Error al registrar beneficiario", `${response.error}`, "error");
            set({ error: response.error, loading: false });
        }
    },
    updateBeneficiary: async (id, data) => {
        set({ loading: true, error: '' });
        const response = await fetchApi(`api/v1/beneficiary/update/${id}`, 'PUT', data, undefined, true // Incluye las cookies en la solicitud
        );
        if (response.data) {
            showModal("Actualización exitosa", "El beneficiario ha sido actualizado exitosamente", "success");
            set({ loading: false });
            await get().getBeneficiaries();
        }
        else {
            showModal("Error al actualizar beneficiario", `${response.error}`, "error");
            set({ error: response.error, loading: false });
        }
    },
    deleteBeneficiary: async (id) => {
        set({ loading: true, error: '' });
        const response = await fetchApi(`api/v1/beneficiary/delete/${id}`, 'DELETE', null, undefined, true // Incluye las cookies en la solicitud
        );
        if (response.data) {
            set({ loading: false });
            await get().getBeneficiaries();
        }
        else {
            set({ error: response.error, loading: false });
        }
    }
}));
