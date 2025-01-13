import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/ui/input"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '../../../../components/ui/select'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../../components/ui/form"
import SelectComponent from "../SelectComponent"

import { useViaState } from "../../../../store/viaStore"
import { useUnitTypeState } from "../../../../store/unitTypeStore"
import { useDepartmentStore } from "../../../../store/departmentStore"
import { useMunicipalityStore } from "../../../../store/municipalityStore"
import { useNeighborhoodStore } from "../../../../store/neighborhoodStore"
import { useSocialStrataStore } from "../../../../store/socialStrataStores"

export function AddressStep() {
    const form = useFormContext()
    const { vias, getVias } = useViaState();
    const { unitTypes, getUnitTypes } = useUnitTypeState();
    const [valueDpto, setValueDpto] = useState('');
    const [valueMunicipio, setValueMunicipio] = useState('');
    const { socialStrata, getSocialStrata } = useSocialStrataStore();
    const { neighborhoods, getNeighborhoods } = useNeighborhoodStore();
    const { departments, getDepartments, department, getDepartment } = useDepartmentStore()
    const { municipalities, getMunicipalities, municipality, getMunicipality } = useMunicipalityStore()

    const { setValue } = form;

    useEffect(() => {
        getDepartment('Valle del Cauca');
        getMunicipality('Buenaventura');
    }, [getDepartment, getMunicipality, setValue]);

    useEffect(() => {
        const namedepartment = departments.find(
            (department) => department.value === valueDpto || department.label === valueDpto
        );

        const value = {
            name: namedepartment?.label || department.label,
            id: namedepartment?.value || department.value,
        };

        setValue("CodigoDaneDpmto", value.id);
    }, [valueDpto, setValue, departments, department]);

    useEffect(() => {
        const namedepartment = municipalities.find(
            (department) => department.value === valueMunicipio || department.label === valueMunicipio
        );

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
        const namedepartment = departments.find(
            (department) => department.value === valueDpto || department.label === valueDpto
        );

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

    return (
        <div className="space-y-4">
            {/* Dirección */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="flex flex-col gap-4">
                    <SelectComponent
                        form={form}
                        name="ViaPrincipalClave"
                        formLabel="Via principal *"
                        options={vias.map((via) => ({ key: `via-principal-${via.idVia}`, value: `${via.Via}`, label: `${via.Via}` }))}
                    />
                    <FormField
                        control={form.control}
                        name="ViaPrincipalValor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Campo"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SelectComponent
                        form={form}
                        name="ViaSecundariaClave"
                        formLabel="Via segundaria *"
                        options={vias.map((via) => ({ key: `via-secundaria-${via.idVia}`, value: `${via.Via}`, label: `${via.Via}` }))}
                    />
                    <FormField
                        control={form.control}
                        name="ViaSecundariaValor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Campo 1"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ViaSecundariaValorDos"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Campo 2"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <SelectComponent
                        form={form}
                        name="TipoUnidadUnoClave"
                        formLabel="Tipo de unidad 1 *"
                        options={unitTypes.map((unitType) => ({key: `tipo-unidad-${unitType.idTipoUnidad}`, value: `${unitType.TipoUnidad}`, label: `${unitType.TipoUnidad}` }))}
                    />
                    <FormField
                        control={form.control}
                        name="TipoUnidadUnoValor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Tipo de unidad 1"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SelectComponent
                        form={form}
                        name="TipoUnidadDosClave"
                        formLabel="Tipo de unidad 2 *"
                        options={unitTypes.map((unitType) => ({ key: `tipo-unidad-dos-${unitType.idTipoUnidad}`, value: `${unitType.TipoUnidad}`, label: `${unitType.TipoUnidad}` }))}
                    />
                    <FormField
                        control={form.control}
                        name="TipoUnidadDosValor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Tipo de unidad 2"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="Departamento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Departamento *</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            setValueDpto(value);
                                        }}
                                        defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {/* var newstr = value.replace(re, "-");  */}
                                            <SelectGroup>
                                                <SelectLabel>Selecciona una opción</SelectLabel>
                                                {departments.map((option) => (
                                                    <SelectItem key={option.value} value={option.label}>{option.label}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="CodigoDaneDpmto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Código DANE Departamento *</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Municipio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Municipio *</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            setValueMunicipio(value);
                                        }}
                                        defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Selecciona una opción</SelectLabel>
                                                {municipalities.map((option) => (
                                                    <SelectItem key={option.value} value={option.label}>{option.label}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="CodigoDaneMunicipio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Código DANE Municipio *</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SelectComponent
                        form={form}
                        name="Barrio"
                        formLabel="Barrio *"
                        options={neighborhoods.map((nb) => (
                            { key: `${nb.idBarrio}`, value: `${nb.Barrio}`, label: `${nb.Barrio}` }
                        ))}

                    />
                    <SelectComponent
                        form={form}
                        name="Estrato_idEstrato"
                        formLabel="Estrato *"
                        options={socialStrata.map((stratum) => ({ value: `${stratum.idEstrato}`, label: `Estrato ${stratum.Estrato}` }))}

                    />

<FormField
                        control={form.control}
                        name="Direccion"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Direccion *</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
