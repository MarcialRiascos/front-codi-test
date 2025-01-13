import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Input } from "../../../components/ui/input";
import DashboardLayout from '../layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { changePasswordSchema } from '../schemas/registerUser';
import { useChangePassword } from '../../../store/changePasswordStore';
import { Eye, EyeOff } from 'lucide-react';
const Account = () => {
    const { changePassword, error } = useChangePassword();
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const form = useForm({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        }
    });
    const toggleOldPasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };
    const toggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };
    const { reset } = form;
    const onSubmit = async (data) => {
        await changePassword(data);
        if (error)
            reset();
    };
    return (_jsx(DashboardLayout, { children: _jsx("div", { className: 'flex justify-center', children: _jsxs(Card, { className: 'w-[720px] max-w-full', children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: 'text-2xl', children: "Cambiar contrase\u00F1a" }), _jsx(CardDescription, { children: "Introduce tu contrase\u00F1a actual y la nueva contrase\u00F1a" })] }), _jsx(CardContent, { children: _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: 'overflow-y-auto space-y-5', children: [_jsx(FormField, { control: form.control, name: "oldPassword", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Contrase\u00F1a actual" }), _jsx(FormControl, { children: _jsxs("div", { className: "relative", children: [_jsx(Input, { ...field, type: showPassword ? 'text' : 'password', placeholder: "Contrase\u00F1a actual", className: "pr-12 border-gray-500 dark:border-gray-800" }), _jsx(Button, { type: "button", onClick: toggleOldPasswordVisibility, className: "absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent", "aria-label": showPassword ? 'Hide password' : 'Show password', children: showPassword ? _jsx(EyeOff, { className: "h-5 w-5 text-gray-500" }) : _jsx(Eye, { className: "h-5 w-5 text-gray-500" }) })] }) }), _jsx(FormMessage, {})] })) }), _jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4', children: [_jsx(FormField, { control: form.control, name: "newPassword", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Nueva contrase\u00F1a" }), _jsx(FormControl, { children: _jsxs("div", { className: "relative", children: [_jsx(Input, { ...field, type: showNewPassword ? 'text' : 'password', placeholder: "Nueva contrase\u00F1a", className: "pr-12 border-gray-500 dark:border-gray-800" }), _jsx(Button, { type: "button", onClick: toggleNewPasswordVisibility, className: "absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent", "aria-label": showNewPassword ? 'Hide password' : 'Show password', children: showNewPassword ? _jsx(EyeOff, { className: "h-5 w-5 text-gray-500" }) : _jsx(Eye, { className: "h-5 w-5 text-gray-500" }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "confirmNewPassword", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Confirmar nueva contrase\u00F1a" }), _jsx(FormControl, { children: _jsxs("div", { className: "relative", children: [_jsx(Input, { ...field, type: showConfirmNewPassword ? 'text' : 'password', placeholder: "Confirmar nueva contrase\u00F1a", className: "pr-12 border-gray-500 dark:border-gray-800" }), _jsx(Button, { type: "button", onClick: toggleConfirmNewPasswordVisibility, className: "absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent", "aria-label": showConfirmNewPassword ? 'Hide password' : 'Show password', children: showConfirmNewPassword ? _jsx(EyeOff, { className: "h-5 w-5 text-gray-500" }) : _jsx(Eye, { className: "h-5 w-5 text-gray-500" }) })] }) }), _jsx(FormMessage, {})] })) })] }), _jsx("div", { className: 'flex justify-end items-center', children: _jsx(Button, { type: "submit", children: "Cambiar contrase\u00F1a" }) })] }) }) })] }) }) }));
};
export default Account;
