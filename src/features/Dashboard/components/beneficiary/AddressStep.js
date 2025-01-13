import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../../components/ui/select';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../../../components/ui/form";
import SelectComponent from "../SelectComponent";
import { useViaState } from "../../../../store/viaStore";
import { useUnitTypeState } from "../../../../store/unitTypeStore";
import { useDepartmentStore } from "../../../../store/departmentStore";
import { useMunicipalityStore } from "../../../../store/municipalityStore";
import { useNeighborhoodStore } from "../../../../store/neighborhoodStore";
import { useSocialStrataStore } from "../../../../store/socialStrataStores";
export function AddressStep() {
    const form = useFormContext();
    const { vias, getVias } = useViaState();
    const { unitTypes, getUnitTypes } = useUnitTypeState();
    const [valueDpto, setValueDpto] = useState('');
    const [valueMunicipio, setValueMunicipio] = useState('');
    const { socialStrata, getSocialStrata } = useSocialStrataStore();
    const { neighborhoods, getNeighborhoods } = useNeighborhoodStore();
    const { departments, getDepartments, department, getDepartment } = useDepartmentStore();
    const { municipalities, getMunicipalities, municipality, getMunicipality } = useMunicipalityStore();
    const { setValue } = form;
    useEffect(() => {
        getDepartment('Valle del Cauca');
        getMunicipality('Buenaventura');
    }, [getDepartment, getMunicipality, setValue]);
    useEffect(() => {
        const namedepartment = departments.find((department) => department.value === valueDpto || department.label === valueDpto);
        const value = {
            name: namedepartment?.label || department.label,
            id: namedepartment?.value || department.value,
        };
        setValue("CodigoDaneDpmto", value.id);
    }, [valueDpto, setValue, departments, department]);
    useEffect(() => {
        const namedepartment = municipalities.find((department) => department.value === valueMunicipio || department.label === valueMunicipio);
        const value = {
            name: namedepartment?.label || municipality.label,
            id: namedepartment?.value || municipality.value,
        };
        setValue("CodigoDaneMunicipio", value.id);
    }, [valueMunicipio, setValue, municipalities, municipality]);
    useEffect(() => {
        getDepartments();
    }, [getDepartments]);
    useEffect(() => {
        const namedepartment = departments.find((department) => department.value === valueDpto || department.label === valueDpto);
        const value = {
            name: namedepartment?.label || department.label,
            id: namedepartment?.value || department.value,
        };
        getMunicipalities(value.id);
    }, [getMunicipalities, valueDpto, departments, department]);
    useEffect(() => {
        getVias();
        getUnitTypes();
        getSocialStrata();
        getNeighborhoods();
    }, [getVias, getUnitTypes, getSocialStrata, getNeighborhoods]);
    return (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(SelectComponent, { form: form, name: "ViaPrincipalClave", formLabel: "Via principal *", options: vias.map((via) => ({ key: `via-principal-${via.idVia}`, value: `${via.Via}`, label: `${via.Via}` })) }), _jsx(FormField, { control: form.control, name: "ViaPrincipalValor", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Campo" }) }), _jsx(FormMessage, {})] })) }), _jsx(SelectComponent, { form: form, name: "ViaSecundariaClave", formLabel: "Via segundaria *", options: vias.map((via) => ({ key: `via-secundaria-${via.idVia}`, value: `${via.Via}`, label: `${via.Via}` })) }), _jsx(FormField, { control: form.control, name: "ViaSecundariaValor", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Campo 1" }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "ViaSecundariaValorDos", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Campo 2" }) }), _jsx(FormMessage, {})] })) }), _jsx(SelectComponent, { form: form, name: "TipoUnidadUnoClave", formLabel: "Tipo de unidad 1 *", options: unitTypes.map((unitType) => ({ key: `tipo-unidad-${unitType.idTipoUnidad}`, value: `${unitType.TipoUnidad}`, label: `${unitType.TipoUnidad}` })) }), _jsx(FormField, { control: form.control, name: "TipoUnidadUnoValor", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Tipo de unidad 1" }) }), _jsx(FormMessage, {})] })) }), _jsx(SelectComponent, { form: form, name: "TipoUnidadDosClave", formLabel: "Tipo de unidad 2 *", options: unitTypes.map((unitType) => ({ key: `tipo-unidad-dos-${unitType.idTipoUnidad}`, value: `${unitType.TipoUnidad}`, label: `${unitType.TipoUnidad}` })) }), _jsx(FormField, { control: form.control, name: "TipoUnidadDosValor", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Tipo de unidad 2" }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(FormField, { control: form.control, name: "Departamento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Departamento *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: (value) => {
                                                field.onChange(value);
                                                setValueDpto(value);
                                            }, defaultValue: field.value, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), departments.map((option) => (_jsx(SelectItem, { value: option.label, children: option.label }, option.value)))] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "CodigoDaneDpmto", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "C\u00F3digo DANE Departamento *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", disabled: true }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Municipio", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Municipio *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: (value) => {
                                                field.onChange(value);
                                                setValueMunicipio(value);
                                            }, defaultValue: field.value, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), municipalities.map((option) => (_jsx(SelectItem, { value: option.label, children: option.label }, option.value)))] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "CodigoDaneMunicipio", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "C\u00F3digo DANE Municipio *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", disabled: true }) }), _jsx(FormMessage, {})] })) }), _jsx(SelectComponent, { form: form, name: "Barrio", formLabel: "Barrio *", options: neighborhoods.map((nb) => ({ key: `${nb.idBarrio}`, value: `${nb.Barrio}`, label: `${nb.Barrio}` })) }), _jsx(SelectComponent, { form: form, name: "Estrato_idEstrato", formLabel: "Estrato *", options: socialStrata.map((stratum) => ({ value: `${stratum.idEstrato}`, label: `Estrato ${stratum.Estrato}` })) }), _jsx(FormField, { control: form.control, name: "Direccion", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Direccion *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text" }) }), _jsx(FormMessage, {})] })) })] })] }) }));
}
