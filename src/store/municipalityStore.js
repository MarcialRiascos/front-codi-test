import { create } from 'zustand';
import { fetchApiExternal } from '../services/api';
export const useMunicipalityStore = create((set) => ({
    municipalities: [],
    municipality: {
        value: '',
        label: '',
        departamentoCodigo: '',
    },
    loading: false,
    error: null,
    getMunicipalities: async (idDepartment) => {
        set({ loading: true, error: '' });
        const municipalities = [];
        try {
            if (idDepartment) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?c_digo_dane_del_departamento=${idDepartment}`);
                const data = resp;
                // Procesar municipios
                data.forEach((item) => {
                    if (!municipalities.some((dep) => dep.value === item.c_digo_dane_del_municipio)) {
                        municipalities.push({
                            value: item.c_digo_dane_del_municipio,
                            label: item.municipio,
                            departamentoCodigo: item.c_digo_dane_del_departamento,
                        });
                    }
                });
            }
            set({ municipalities, loading: false });
        }
        catch (err) {
            set({ error: err.message || "Error al obtener datos de los municipios", loading: false });
        }
    },
    getMunicipality: async (municipalityName) => {
        set({ loading: true, error: '' });
        let municipality = {
            value: '',
            label: '',
            departamentoCodigo: '',
        };
        try {
            if (municipalityName) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?municipio=${municipalityName}`);
                const data = resp;
                // Procesar municipios
                municipality = {
                    value: data[0].c_digo_dane_del_municipio,
                    label: data[0].municipio,
                    departamentoCodigo: data[0].c_digo_dane_del_departamento,
                };
            }
            set({ municipality, loading: false });
        }
        catch (err) {
            set({ error: err.message || "Error al obtener datos de los municipios", loading: false });
        }
    },
}));
