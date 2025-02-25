import React from 'react'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../../../components/ui/form'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '../../../components/ui/select'
import { UseFormReturn } from 'react-hook-form'

interface Options {
    key?: string
    value: string
    label: string
}

interface Props {
    form: UseFormReturn<any | undefined>
    name: string
    formLabel: string
    options: Options[]
}

const SelectComponent = ({ form, name, formLabel, options }: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{formLabel}</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={(value) => {
                                field.onChange(value);
                            }}
                            defaultValue={field.value || ''}>
                            <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent className='border-gray-500 dark:border-gray-800'>
                                <SelectGroup>
                                    <SelectLabel>Selecciona una opción</SelectLabel>
                                    {options.map((option) => (
                                        <SelectItem key={option.key || option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SelectComponent