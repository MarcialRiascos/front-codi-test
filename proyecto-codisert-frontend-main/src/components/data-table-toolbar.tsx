"use client"

import { Table } from "@tanstack/react-table"
import { X } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
// import { DataTableViewOptions } from "./data-table-view-options"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useState } from "react"

interface OptionFilter {
  value: string
  label: string
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  options?: OptionFilter[]
}

export function DataTableToolbar<TData>({
  table,
  options,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [selectedColumn, setSelectedColumn] = useState<string>("")

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Select
          value={selectedColumn}
          onValueChange={(value) => {
            setSelectedColumn(value)
            // Clear previous filters
            table.resetColumnFilters()
          }}
        >
          <SelectTrigger className="h-8 w-[150px]">
            <SelectValue placeholder="Filtrar por..." />
          </SelectTrigger>
          {(options && options.length > 0) ?
            (<SelectContent>
              {options.map((option, index) => (
                <SelectItem key={`${option.value}-${index}`} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>)
            : (<SelectContent>
              <SelectItem value="NumeroDocumento">Número de documento</SelectItem>
              <SelectItem value="Nombre">Nombre</SelectItem>
              <SelectItem value="Apellido">Apellido</SelectItem>
              <SelectItem value="Correo">Email</SelectItem>
            </SelectContent>)
          }

        </Select>
        {selectedColumn && (
          <Input
            // placeholder={`Filtrar por ${selectedColumn}...`}
            placeholder={`Buscar...`}
            value={(table.getColumn(selectedColumn)?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              table.getColumn(selectedColumn)?.setFilterValue(event.target.value)
            }}
            className="h-8 w-[150px] lg:w-[250px]"
            type={selectedColumn === "amount" ? "number" : "text"}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters()
              setSelectedColumn("")
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reiniciar
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}