import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { format,
// parseISO
 } from "date-fns";
// import {} from "date-fns-tz";
import { es } from "date-fns/locale";
import { Calendar } from "../../../components/ui/calendar";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "../../../utils/formatDate";
export function DatePicker({ value, onChange }) {
    const formatedDate = new Date(formatDate(value, "yyyy-MM-dd", 2));
    return (_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: cn("w-full pl-3 text-left font-normal border-gray-500 dark:border-gray-800"), children: [value ? format(formatedDate, "PPP", { locale: es }) : "Seleccionar fecha", _jsx(CalendarIcon, { className: "ml-auto h-4 w-4 opacity-50" })] }) }), _jsx(PopoverContent, { align: "start", className: "w-auto p-2 border-gray-500 dark:border-gray-800", children: _jsx(Calendar, { mode: "single", selected: formatedDate, onSelect: onChange, locale: es, initialFocus: true }) })] }));
}
