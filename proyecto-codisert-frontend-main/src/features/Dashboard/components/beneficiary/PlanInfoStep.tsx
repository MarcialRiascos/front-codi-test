import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/ui/input"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../../components/ui/form"
import SelectComponent from "../SelectComponent"

export function PlanInfoStep() {
    const form = useFormContext()

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="Contrato"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número de contrato *</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder="Número de contrato"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SelectComponent
                    form={form}
                    name="Servicio"
                    formLabel="Servicio"
                    options={[
                        { value: "plan1", label: "Internet + TV" },
                        { value: "plan2", label: "Internet" },
                    ]}
                />
            </div>
        </div>
    )
}
