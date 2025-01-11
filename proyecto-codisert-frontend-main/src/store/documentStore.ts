import { create } from 'zustand'
// import { persist, PersistOptions } from 'zustand/middleware';
import { BeneficiaryDocument } from '../features/Dashboard/types'
import { updateEndpoint, deleteEndpoint, uploadFiles } from '../services/api';
import { BeneficiaryDocumentSchema } from '../features/Dashboard/schemas/registerUser';
import { useBeneficiaryStore } from './beneficiaryStore'

interface DocumentState {
    documents: BeneficiaryDocument[] | null;
    loading: boolean;
    error: string | null;
    saveDocument: (idBeneficiary: number | string, data: FormData) => Promise<void>;
    updateDocument: (idBeneficiary: string | number, data: BeneficiaryDocumentSchema) => Promise<void>;
    deleteDocument: (idBeneficiary: string | number) => Promise<void>;
}

export const useDocumentStore = create<DocumentState>((set) => ({
    documents: [],
    loading: false,
    error: null,
    saveDocument: async (idBeneficiary: number | string, data: FormData) => {
        set({ loading: true, error: '' });
        try {
            await uploadFiles(`api/v1/document/upload/${idBeneficiary}`, data);
            useBeneficiaryStore.getState().getBeneficiaries();
            set({ loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateDocument: async (idBeneficiary: string | number, data: BeneficiaryDocumentSchema) => {
        set({ loading: true, error: '' });
        try {
            await updateEndpoint('api/v1/admin/update', idBeneficiary, data);
            set({ loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteDocument: async (idBeneficiary: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint(`api/v1/admin/delete/${idBeneficiary}`);
            set({ loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}),
)