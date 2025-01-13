import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { uploadDocumentsSchema, UploadDocumentsSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { useDocumentStore } from '../../../../store/documentStore';
import MessageDialog from '../../../../components/dialog-custom';

interface Props {
    idUser: string | number;
}

const UserDocuments = ({ idUser }: Props) => {
    const { saveDocument } = useDocumentStore();
    const [dialogMessage, setDialogMessage] = useState({
        isOpen: false,
        title: "",
        description: ""
    });

    const form = useForm<UploadDocumentsSchema>({
        resolver: zodResolver(uploadDocumentsSchema),
        defaultValues: {
            documents: [
                {
                    NombreDocumento: 'Copia del Contrato de Prestación de Servicios',
                    TipoDocumento: 'contrato',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Copia del documento de identidad del Usuario',
                    TipoDocumento: 'dni',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Copia de la declaración del suscriptor',
                    TipoDocumento: 'declaracion',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Foto de la fachada del predio del Usuario',
                    TipoDocumento: 'fachada',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Pantallazo de la prueba de velocidad del internet',
                    TipoDocumento: 'test',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Fotografía del número serial del equipo CPE instalado',
                    TipoDocumento: 'serial',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Copoia de un recibo de energía o de agua',
                    TipoDocumento: 'recibo',
                    file: undefined,
                },
            ],
        }
    });

    const { fields } = useFieldArray({
        control: form.control,
        name: 'documents',
    })

    const onSubmit = async (data: UploadDocumentsSchema) => {
        const formData = new FormData();
        data.documents.forEach(d => {
            if (d.file) {
                formData.append(d.TipoDocumento, d.file);
            }

            if (d.TipoDocumento) {
                formData.append(d.TipoDocumento + '_TipoDocumento', d.TipoDocumento);
            }
        });

        await saveDocument(idUser, formData);
        setDialogMessage({
            isOpen: true,
            title: "Dacumentos guardados",
            description: "Los documentos han sido guardados correctamente",
        });
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                        <div key={field.id} className="my-5">
                            <FormField
                                control={form.control}
                                name={`documents.${index}.file`}
                                render={({ field: { value, ...fieldValues } }) => (
                                    <FormItem>
                                        <FormLabel>{field.NombreDocumento}</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...fieldValues}
                                                type="file"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    fieldValues.onChange(file);
                                                }}
                                                className='border-gray-500 dark:border-gray-800'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    ))}
                    <div className='flex justify-end items-center'>
                        <Button type="submit">Guardar documentos</Button>
                    </div>
                </form>
            </Form>
            {dialogMessage.isOpen && <MessageDialog {...dialogMessage} />}
        </>
    )
}

export default UserDocuments