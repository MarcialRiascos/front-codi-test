import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Settings2 } from 'lucide-react';
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
export function DataTableViewOptions({ table, }) {
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", size: "sm", className: "ml-auto h-8", children: [_jsx(Settings2, { className: "mr-2 h-4 w-4" }), "Vista"] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [_jsx(DropdownMenuLabel, { children: "Mostrar columnas" }), _jsx(DropdownMenuSeparator, {}), table
                        .getAllColumns()
                        .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
                        .map((column) => {
                        return (_jsx(DropdownMenuCheckboxItem, { className: "capitalize", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id));
                    })] })] }));
}
