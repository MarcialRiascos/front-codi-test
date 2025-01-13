import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import {
    format,
    // parseISO
} from "date-fns";
// import {} from "date-fns-tz";
import { es } from "date-fns/locale";
import { Calendar } from "../../../components/ui/calendar";
import { SelectSingleEventHandler } from "react-day-picker";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "../../../utils/formatDate";

interface DatePickerProps {
    value: Date | string;
    onChange: SelectSingleEventHandler | undefined;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
    const formatedDate = new Date(formatDate(value, "yyyy-MM-dd", 2));
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full pl-3 text-left font-normal border-gray-500 dark:border-gray-800",
                    )}
                >
                    {/* format(parseISO(date) */}
                    {value ? format(formatedDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-2 border-gray-500 dark:border-gray-800">
                <Calendar
                    mode="single"
                    selected={formatedDate}
                    onSelect={onChange}
                    locale={es} // Configuración del idioma
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}