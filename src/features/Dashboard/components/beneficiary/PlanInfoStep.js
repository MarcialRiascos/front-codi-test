import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../../../components/ui/form";
import SelectComponent from "../SelectComponent";
export function PlanInfoStep() {
    const form = useFormContext();
    return (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(FormField, { control: form.control, name: "Contrato", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "N\u00FAmero de contrato *" }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "text", placeholder: "N\u00FAmero de contrato" }) }), _jsx(FormMessage, {})] })) }), _jsx(SelectComponent, { form: form, name: "Servicio", formLabel: "Servicio", options: [
                        { value: "plan1", label: "Internet + TV" },
                        { value: "plan2", label: "Internet" },
                    ] })] }) }));
}
