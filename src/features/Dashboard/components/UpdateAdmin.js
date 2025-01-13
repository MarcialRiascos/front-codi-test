import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminSchema } from '../schemas/registerUser';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "../../../components/ui/dialog";
import Tooltip from './TooltipComponent';
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Form, FormItem, FormLabel, FormField, FormMessage, FormControl } from '../../../components/ui/form';
import { Select, SelectItem, SelectLabel, SelectValue, SelectGroup, SelectTrigger, SelectContent } from '../../../components/ui/select';
import { useAdminStore } from '../../../store/adminStore';
import MessageDialog from '../../../components/dialog-custom';
const UpdateAdmin = ({ idAdmin, dataAdmin, icon }) => {
    const [open, setOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState({
        isOpen: false,
        title: "",
        description: ""
    });
    const { updateAdmin } = useAdminStore();
    const form = useForm({
        resolver: zodResolver(adminSchema),
        defaultValues: {
            Nombre: dataAdmin.Nombre,
            Apellido: dataAdmin.Apellido,
            TipoDocumento_idTipoDocumento: `${dataAdmin.TipoDocumento_idTipoDocumento}`,
            NumeroDocumento: dataAdmin.NumeroDocumento,
            Correo: dataAdmin.Correo,
            Telefono: dataAdmin.Telefono,
            Password: "T10F8DA0",
            Estado_idEstado: `${dataAdmin.Estado_idEstado}`,
            Rol_idRol: `${dataAdmin.Rol_idRol}`,
            Sexo_idSexo: `${dataAdmin.Sexo_idSexo}`,
        }
    });
    const onSubmit = (data) => {
        updateAdmin(idAdmin, data);
        setOpen(false);
        setDialogMessage({
            isOpen: true,
            title: "Actualización exitosa",
            description: "El administrador ha sido actualizado exitosamente",
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: open, children: _jsx(Button, { onClick: () => setOpen(true), variant: "outline", className: 'p-0 size-7 w-7 h-7', children: _jsx(Tooltip, { text: "Editar Beneficiario", icon: icon }) }) }), _jsxs(DialogContent, { className: "sm:max-w-[720px] h-[90vh] overflow-y-auto", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Actualizar Administrador" }), _jsx(DialogDescription, { children: "Intruduce los datos a cambiar del administrador" })] }), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: 'space-y-5', children: [_jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Nombre", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Nombre" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Joe", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Apellido", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Apellidos" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Doe", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "TipoDocumento_idTipoDocumento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Tipo de identificaci\u00F3n" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "C\u00E9dula de Ciudadan\u00EDa" }), _jsx(SelectItem, { value: "2", children: "C\u00E9dula de Extranjer\u00EDa" }), _jsx(SelectItem, { value: "3", children: "Pasaporte" })] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "NumeroDocumento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "N\u00FAmero de identificaci\u00F3n" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) })] }), _jsx(FormField, { control: form.control, name: "Correo", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Correo electr\u00F3nico" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "email", placeholder: "example@example.com", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Telefono", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Tel\u00E9fono" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "tel", placeholder: "N\u00FAmero de tel\u00E9fono", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Sexo_idSexo", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Genero" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Masculino" }), _jsx(SelectItem, { value: "2", children: "Femenino" }), _jsx(SelectItem, { value: "3", children: "Otro" })] }) })] }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Estado_idEstado", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Estado" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Activo" }), _jsx(SelectItem, { value: "2", children: "Inactivo" }), _jsx(SelectItem, { value: "3", children: "Operativo" }), _jsx(SelectItem, { value: "4", children: "Suspendido" })] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Rol_idRol", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Rol" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Super Administrador" }), _jsx(SelectItem, { value: "2", children: "Administrador Registrador" }), _jsx(SelectItem, { value: "3", children: "Administrador Lector" })] }) })] }) }), _jsx(FormMessage, {})] })) })] }), _jsx("div", { className: 'flex justify-end items-center', children: _jsx(Button, { type: "submit", children: "Actualizar usuario" }) })] }) })] })] }), dialogMessage.isOpen && _jsx(MessageDialog, { ...dialogMessage })] }));
};
export default UpdateAdmin;
