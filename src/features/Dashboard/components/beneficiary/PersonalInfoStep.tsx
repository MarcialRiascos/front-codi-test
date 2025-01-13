import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/ui/input"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../../components/ui/form"
import SelectComponent from "../SelectComponent"
import { useIdentificationDocumentStore } from "../../../../store/identificationDocumentStore"

export function PersonalInfoStep() {
    const form = useFormContext()
    const { documents, getIdentificationDocuments } = useIdentificationDocumentStore();

    useEffect(() => {
        getIdentificationDocuments();
    }, [getIdentificationDocuments]);

    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="Nombre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre *</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder="Joe"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Apellido"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Apellidos *</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder="Doe"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <SelectComponent
                    form={form}
                    name="TipoDocumento_idTipoDocumento"
                    formLabel="Tipo de identificación *"
                    options={documents.map((doc) => (
                        { value: `${doc.idTipoDocumento}`, label: `${doc.TipoDocumento}` }
                    ))}

                />
                <FormField
                    control={form.control}
                    name="NumeroDocumento"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número de identificación *</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder=""
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <FormField
                    control={form.control}
                    name="FechaNacimiento"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fecha de nacimiento *</FormLabel>
                            <Input
                                {...field}
                                type="date"
                                value={field.value}
                                onChange={(value) => {
                                    field.onChange(value);
                                }}
                                placeholder=""
                                className='w-full p-2 border rounded-md bg-input text-gray-700 border-gray-500 dark:border-gray-800 focus:outline-none focus:ring-2 focus:border-blue-500 dark:bg-input dark:text-gray-200'
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SelectComponent
                    form={form}
                    name="Sexo_idSexo"
                    formLabel="Género *"
                    options={[
                        { value: "1", label: "Masculino" },
                        { value: "2", label: "Femenino" },
                        { value: "3", label: "Otro" },
                    ]}
                />
            </div>
            <FormField
                control={form.control}
                name="Correo"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Correo electrónico *</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="email"
                                placeholder="example@example.com"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="Telefono"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Teléfonos de contacto</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Teléfono 1"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Celular"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Teléfono 2"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="TelefonoTres"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Teléfono 3"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

