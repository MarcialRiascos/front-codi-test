import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../../../components/ui/form";
export function OtherInfoStep() {
    const form = useFormContext();
    return (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(FormField, { control: form.control, name: "FechaInicio", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Fecha de inicio de operaci\u00F3n" }), _jsx(Input, { ...field, type: "date", value: field.value, onChange: (value) => {
                                    field.onChange(value);
                                }, placeholder: "", className: 'w-full p-2 border rounded-md bg-input text-gray-700 border-gray-500 dark:border-gray-800 focus:outline-none focus:ring-2 focus:border-blue-500 dark:bg-input dark:text-gray-200' }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "Anexo", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Anexo *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "Anexo" }) }), _jsx(FormMessage, {})] })) })] }) }));
}
