"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { DataTableViewOptions } from "./data-table-view-options"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./ui/select";
import { useState } from "react";
export function DataTableToolbar({ table, options, }) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const [selectedColumn, setSelectedColumn] = useState("");
    return (_jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { className: "flex flex-1 items-center space-x-2", children: [_jsxs(Select, { value: selectedColumn, onValueChange: (value) => {
                        setSelectedColumn(value);
                        // Clear previous filters
                        table.resetColumnFilters();
                    }, children: [_jsx(SelectTrigger, { className: "h-8 w-[150px]", children: _jsx(SelectValue, { placeholder: "Filtrar por..." }) }), (options && options.length > 0) ?
                            (_jsx(SelectContent, { children: options.map((option, index) => (_jsx(SelectItem, { value: option.value, children: option.label }, `${option.value}-${index}`))) }))
                            : (_jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "NumeroDocumento", children: "N\u00FAmero de documento" }), _jsx(SelectItem, { value: "Nombre", children: "Nombre" }), _jsx(SelectItem, { value: "Apellido", children: "Apellido" }), _jsx(SelectItem, { value: "Correo", children: "Email" })] }))] }), selectedColumn && (_jsx(Input
                // placeholder={`Filtrar por ${selectedColumn}...`}
                , { 
                    // placeholder={`Filtrar por ${selectedColumn}...`}
                    placeholder: `Buscar...`, value: table.getColumn(selectedColumn)?.getFilterValue() ?? "", onChange: (event) => {
                        table.getColumn(selectedColumn)?.setFilterValue(event.target.value);
                    }, className: "h-8 w-[150px] lg:w-[250px]", type: selectedColumn === "amount" ? "number" : "text" })), isFiltered && (_jsxs(Button, { variant: "ghost", onClick: () => {
                        table.resetColumnFilters();
                        setSelectedColumn("");
                    }, className: "h-8 px-2 lg:px-3", children: ["Reiniciar", _jsx(X, { className: "ml-2 h-4 w-4" })] }))] }) }));
}
