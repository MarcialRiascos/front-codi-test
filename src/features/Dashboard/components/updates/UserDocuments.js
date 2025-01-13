import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadDocumentsSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form';
import { useDocumentStore } from '../../../../store/documentStore';
import MessageDialog from '../../../../components/dialog-custom';
const UserDocuments = ({ idUser }) => {
    const { saveDocument } = useDocumentStore();
    const [dialogMessage, setDialogMessage] = useState({
        isOpen: false,
        title: "",
        description: ""
    });
    const form = useForm({
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
    });
    const onSubmit = async (data) => {
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
    };
    return (_jsxs(_Fragment, { children: [_jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), children: [fields.map((field, index) => (_jsx("div", { className: "my-5", children: _jsx(FormField, { control: form.control, name: `documents.${index}.file`, render: ({ field: { value, ...fieldValues } }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: field.NombreDocumento }), _jsx(FormControl, { children: _jsx(Input, { ...fieldValues, type: "file", onChange: (e) => {
                                                    const file = e.target.files?.[0];
                                                    fieldValues.onChange(file);
                                                }, className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }) }, field.id))), _jsx("div", { className: 'flex justify-end items-center', children: _jsx(Button, { type: "submit", children: "Guardar documentos" }) })] }) }), dialogMessage.isOpen && _jsx(MessageDialog, { ...dialogMessage })] }));
};
export default UserDocuments;
