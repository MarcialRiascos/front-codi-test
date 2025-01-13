import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/ui/input"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../../components/ui/form"

export function OtherInfoStep() {
    const form = useFormContext()

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="FechaInicio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fecha de inicio de operación</FormLabel>
                            <Input
                                {...field}
                                type="date"
                                value={field.value}
                                onChange={(value) => {
                                    field.onChange(value);
                                }}
                                placeholder=""
                                className='w-full p-2 border rounded-md bg-input text-gray-700 border-gray-500 dark:border-gray-800 focus:outline-none focus:ring-2 focus:border-blue-500 dark:bg-input dark:text-gray-200'
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Anexo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anexo *</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder="Anexo"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}