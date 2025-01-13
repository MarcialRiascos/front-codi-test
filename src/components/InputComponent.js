import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
const InputComponent = ({ id, name, type, label, value, placeholder, onChange, className, errors }) => {
    return (_jsxs("div", { className: `mt-2 ${className}`, children: [label && _jsx(Label, { htmlFor: "name", children: label }), _jsx(Input, { id: id, placeholder: placeholder, type: type, name: name, value: value, onChange: onChange, className: 'border-gray-500 dark:border-gray-800' }), errors && _jsx(Label, { className: "text-red-500", children: errors })] }));
};
export default InputComponent;
