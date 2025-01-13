import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../../store/authStore';
import AuthLayout from '../layouts/AuthLayout';
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "../../../components/ui/card";
import { loginSchema } from '../schemas/loginSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
const Login = () => {
    const navigate = useNavigate();
    const { loginUser, loading, error } = useAuthStore();
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            NumeroDocumento: "",
            Password: "",
        }
    });
    const onSubmit = async (data) => {
        // console.log("Formulario enviado", data)
        await loginUser(data);
        navigate('/dashboard', { replace: true });
    };
    return (_jsx(AuthLayout, { children: _jsxs(Card, { className: "w-[450px] shadow-lg shadow-blue-gray-500 dark:shadow-gray-900 dark:bg-gray-100 rounded-2xl", children: [_jsx(CardHeader, { className: 'flex justify-center items-center pb-10', children: _jsx(CardTitle, { className: 'text-gray-900 text-3xl font-bold', children: "Iniciar Sesi\u00F3n" }) }), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), children: [_jsxs(CardContent, { className: 'space-y-5', children: [_jsx(FormField, { control: form.control, name: "NumeroDocumento", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: 'text-gray-900', children: "Usuario" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", className: 'text-gray-900', placeholder: "Usuario" }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Password", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: 'text-gray-900', children: "Contrase\u00F1a" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "password", className: 'text-gray-900', placeholder: "******" }) }), _jsx(FormMessage, {})] })) })] }), _jsxs(CardFooter, { className: "flex flex-col justify-end", children: [_jsx("div", { className: 'flex justify-end w-full', children: _jsx(Button, { type: 'submit', className: 'w-52 bg-gray-900 text-gray-100 hover:bg-gray-900 rounded-lg', children: loading ? 'Cargando...' : 'Iniciar sesión' }) }), error && _jsx("div", { className: 'flex justify-center items-center w-full mt-10', children: _jsx("p", { className: "text-red-500", children: error }) })] })] }) })] }) }));
};
export default Login;
