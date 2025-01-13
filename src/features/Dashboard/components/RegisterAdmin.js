import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAdminStore } from '../../../store/adminStore';
import { Button } from "../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "../../../components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { adminSchema } from '../schemas/registerUser';
import MessageDialog from '../../../components/dialog-custom';
const RegisterAdmin = () => {
    const [open, setOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState({
        isOpen: false,
        title: "",
        description: ""
    });
    const { createAdmin, loading, error } = useAdminStore();
    const form = useForm({
        resolver: zodResolver(adminSchema),
        defaultValues: {
            Nombre: "",
            Apellido: "",
            TipoDocumento_idTipoDocumento: "",
            NumeroDocumento: "",
            Correo: "",
            Telefono: "",
            Password: "T10F8DA0",
            Estado_idEstado: "1",
            Rol_idRol: "2",
            Sexo_idSexo: "1",
        }
    });
    const onSubmitRegister = async (data) => {
        // sconsole.log("Formulario enviado", data)
        await createAdmin(data);
        if (error) {
            setDialogMessage({
                isOpen: true,
                title: "Error al realizar el registro",
                description: "No se pudo realizar el registro, por favor, revisa los datos ingresados",
            });
            return;
        }
        setOpen(false);
        setDialogMessage({
            isOpen: true,
            title: "Registro exitoso",
            description: "El administrador ha sido registrado exitosamente",
        });
        form.reset();
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Registrar admin" }) }), _jsxs(DialogContent, { className: "sm:max-w-[720px] h-[90vh] overflow-y-auto", children: [_jsxs(DialogHeader, { className: 'mb-5', children: [_jsx(DialogTitle, { children: "Registrar nuevo administrador" }), _jsxs(DialogDescription, { className: 'flex flex-col space-y-3', children: [_jsx("span", { children: "Intruduce los datos del nuevo administrador" }), _jsx("span", { children: "Requerido *" })] })] }), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmitRegister), className: 'space-y-5', children: [_jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Nombre", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Nombre *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Joe", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Apellido", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Apellidos *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Doe", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "TipoDocumento_idTipoDocumento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Tipo de identificaci\u00F3n *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "C\u00E9dula de Ciudadan\u00EDa" }), _jsx(SelectItem, { value: "2", children: "C\u00E9dula de Extranjer\u00EDa" }), _jsx(SelectItem, { value: "3", children: "Pasaporte" })] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "NumeroDocumento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "N\u00FAmero de identificaci\u00F3n *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) })] }), _jsx(FormField, { control: form.control, name: "Correo", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Correo electr\u00F3nico *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "email", placeholder: "example@example.com", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Telefono", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Tel\u00E9fono *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "tel", placeholder: "N\u00FAmero de tel\u00E9fono", className: 'border-gray-500 dark:border-gray-800' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Sexo_idSexo", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Genero *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Masculino" }), _jsx(SelectItem, { value: "2", children: "Femenino" }), _jsx(SelectItem, { value: "3", children: "Otro" })] }) })] }) }), _jsx(FormMessage, {})] })) })] }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "Estado_idEstado", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Estado *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Activo" }), _jsx(SelectItem, { value: "2", children: "Inactivo" }), _jsx(SelectItem, { value: "3", children: "Operativo" }), _jsx(SelectItem, { value: "4", children: "Suspendido" })] }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Rol_idRol", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Rol *" }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), _jsx(SelectItem, { value: "1", children: "Super Administrador" }), _jsx(SelectItem, { value: "2", children: "Administrador Registrador" }), _jsx(SelectItem, { value: "3", children: "Administrador Lector" })] }) })] }) }), _jsx(FormMessage, {})] })) })] }), _jsx("div", { className: 'flex justify-end items-center', children: _jsx(Button, { type: 'submit', children: loading ? 'Guardando...' : 'Crear administrador' }) }), error && _jsx("div", { className: 'flex justify-center items-center', children: _jsx("p", { className: "text-red-500", children: error }) })] }) })] })] }), dialogMessage.isOpen && _jsx(MessageDialog, { ...dialogMessage })] }));
};
export default RegisterAdmin;
