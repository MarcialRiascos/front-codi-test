import { create } from 'zustand'

// Definimos el tipo del estado
interface StoreState {
  selectedValueDepartment: string | null; // El valor puede ser una cadena o nulo
  selectedValueMunicipality: string | null; // El valor puede ser una cadena o nulo
  setSelectedValueDepartment: (value: string | null) => void; // Función que actualiza selectedValue
  setSelectedValueMunicipality: (value: string | null) => void; // Función que actualiza selectedValue
}

export const useSelectStore = create<StoreState>((set) => ({
  selectedValueDepartment: null,
  selectedValueMunicipality: null,
  setSelectedValueDepartment: (value: string | null) => set({ selectedValueDepartment: value }),
  setSelectedValueMunicipality: (value: string | null) => set({ selectedValueDepartment: value }),
}));