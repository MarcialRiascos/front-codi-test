import { create } from 'zustand'
import { fetchApiExternal } from '../services/api';
// import { LocationData } from '../types/apiResponses';

interface Municipality {
    value: string;
    label: string;
    departamentoCodigo: string;
}

interface MunicipalitiesState {
    municipalities: Municipality[];
    municipality: Municipality;
    loading: boolean;
    error: string | null;
    getMunicipalities: (idDepartment: number | string) => Promise<void>;
    getMunicipality: (municipalityName: string) => Promise<void>;
}

export const useMunicipalityStore = create<MunicipalitiesState>((set) => ({
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
        const municipalities: Municipality[] = [];
        try {
            if (idDepartment) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?c_digo_dane_del_departamento=${idDepartment}`);
                const data: any[] = resp;

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
        } catch (err: any) {
            set({ error: err.message || "Error al obtener datos de los municipios", loading: false });
        }
    },
    getMunicipality: async (municipalityName) => {
        set({ loading: true, error: '' });
        let municipality: Municipality = {
            value: '',
            label: '',
            departamentoCodigo: '',
        };
        try {
            if (municipalityName) {
                const resp = await fetchApiExternal(`https://www.datos.gov.co/resource/xdk5-pm3f.json?municipio=${municipalityName}`);
                const data: any[] = resp;

                // Procesar municipios
                municipality = {
                    value: data[0].c_digo_dane_del_municipio,
                    label: data[0].municipio,
                    departamentoCodigo: data[0].c_digo_dane_del_departamento,
                }
            }
            set({ municipality, loading: false });
        } catch (err: any) {
            set({ error: err.message || "Error al obtener datos de los municipios", loading: false });
        }
    },
}))