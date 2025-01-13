import { create } from 'zustand';
export const useSelectStore = create((set) => ({
    selectedValueDepartment: null,
    selectedValueMunicipality: null,
    setSelectedValueDepartment: (value) => set({ selectedValueDepartment: value }),
    setSelectedValueMunicipality: (value) => set({ selectedValueDepartment: value }),
}));
