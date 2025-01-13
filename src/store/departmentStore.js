import { create } from 'zustand';
import { fetchApiExternal } from '../services/api';
export const useDepartmentStore = create((set) => ({
    departments: [],
    department: {
        value: '',
        label: '',
    },
    loading: false,
    error: null,
    getDepartments: async () => {
        set({ loading: true, error: '' });
        const departments = [];
        try {
            const resp = await fetchApiExternal('https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=5000');
            const data = resp;
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
        }
        catch (err) {
            set({ error: err.message || "Error al obtener datos del departamento y municipios", loading: false });
        }
    },
    getDepartment: async (departmentName) => {
        set({ loading: true, error: '' });
        let department = {
            value: '',
            label: '',
        };
        try {
            if (departmentName) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${departmentName}`);
                const data = resp;
                // Procesar departamentos
                department = {
                    value: data[0].c_digo_dane_del_departamento,
                    label: data[0].departamento,
                };
            }
            set({ department, loading: false });
        }
        catch (err) {
            set({ error: err.message || "Error al obtener datos del departamento y municipios", loading: false });
        }
    },
}));
