import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select';
const SelectComponent = ({ form, name, formLabel, options }) => {
    return (_jsx(FormField, { control: form.control, name: name, render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: formLabel }), _jsx(FormControl, { children: _jsxs(Select, { onValueChange: (value) => {
                            field.onChange(value);
                        }, defaultValue: field.value || '', children: [_jsx(SelectTrigger, { className: 'border-gray-500 dark:border-gray-800', children: _jsx(SelectValue, { placeholder: "Selecciona una opci\u00F3n" }) }), _jsx(SelectContent, { className: 'border-gray-500 dark:border-gray-800', children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Selecciona una opci\u00F3n" }), options.map((option) => (_jsx(SelectItem, { value: option.value, children: option.label }, option.key || option.value)))] }) })] }) }), _jsx(FormMessage, {})] })) }));
};
export default SelectComponent;
