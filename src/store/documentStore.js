import { create } from 'zustand';
import { updateEndpoint, deleteEndpoint, uploadFiles } from '../services/api';
import { useBeneficiaryStore } from './beneficiaryStore';
export const useDocumentStore = create((set) => ({
    documents: [],
    loading: false,
    error: null,
    saveDocument: async (idBeneficiary, data) => {
        set({ loading: true, error: '' });
        try {
            await uploadFiles(`api/v1/document/upload/${idBeneficiary}`, data);
            useBeneficiaryStore.getState().getBeneficiaries();
            set({ loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    updateDocument: async (idBeneficiary, data) => {
        set({ loading: true, error: '' });
        try {
            await updateEndpoint('api/v1/admin/update', idBeneficiary, data);
            set({ loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteDocument: async (idBeneficiary) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/admin/delete/${idBeneficiary}`);
            set({ loading: false });
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
