import { create } from 'zustand'
import { fetchApiExternal } from '../services/api';
// import { persist, PersistOptions } from 'zustand/middleware'
// import { LocationData } from '../types/apiResponses';

interface Department {
    value: string;
    label: string;
}

interface DepartmentsMunicipalitiesState {
    departments: Department[];
    department: Department;
    loading: boolean;
    error: string | null;
    getDepartments: () => Promise<void>;
    getDepartment: (departmentName: string) => Promise<void>;
}

export const useDepartmentStore = create<DepartmentsMunicipalitiesState>((set) => ({
    departments: [],
    department: {
        value: '',
        label: '',
    },
    loading: false,
    error: null,
    getDepartments: async () => {
        set({ loading: true, error: '' });
        const departments: Department[] = [];
        try {
            const resp = await fetchApiExternal('https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=5000');
            const data: any[] = resp;

            // Procesar departamentos
            data.forEach((item) => {
                if (!departments.some((dep) => dep.value === item.c_digo_dane_del_departamento)) {
                    departments.push({
                        value: item.c_digo_dane_del_departamento,
                        label: item.departamento,
                    });
                }
            });

            set({ departments, loading: false });
        } catch (err: any) {
            set({ error: err.message || "Error al obtener datos del departamento y municipios", loading: false });
        }
    },
    getDepartment: async (departmentName) => {
        set({ loading: true, error: '' });
        let department: Department = {
            value: '',
            label: '',
        };
        try {
            if (departmentName) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${departmentName}`);
                const data: any[] = resp;

                // Procesar departamentos
                department = {
                    value: data[0].c_digo_dane_del_departamento,
                    label: data[0].departamento,
                }
            }
            set({ department, loading: false });
        } catch (err: any) {
            set({ error: err.message || "Error al obtener datos del departamento y municipios", loading: false });
        }
    },
}));
