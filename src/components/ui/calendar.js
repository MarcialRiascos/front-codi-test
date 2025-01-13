import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";
import { format, setMonth } from "date-fns";
import { es } from "date-fns/locale";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./select";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return (_jsx(DayPicker, { showOutsideDays: showOutsideDays, className: cn("p-3", className), classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium hidden",
            nav: "space-x-1 flex items-center",
            nav_button: cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1 hidden",
            nav_button_next: "absolute right-1 hidden",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md", props.mode === "range"
                ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                : "[&:has([aria-selected])]:rounded-md"),
            day: cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
            day_range_start: "day-range-start",
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            caption_dropdowns: "flex items-center space-x-2 w-full",
            ...classNames,
        }, components: {
            IconLeft: ({ className, ...props }) => (_jsx(ChevronLeft, { className: cn("h-4 w-4", className), ...props })),
            IconRight: ({ className, ...props }) => (_jsx(ChevronRight, { className: cn("h-4 w-4", className), ...props })),
            Dropdown: (props) => {
                const { fromDate, fromMonth, fromYear, toDate, toMonth, toYear } = useDayPicker();
                const { goToMonth, currentMonth } = useNavigation();
                if (props.name === "months") {
                    const selectItems = Array.from({ length: 12 }, (_, i) => ({
                        value: i.toString(),
                        label: format(setMonth(new Date(), i), "MMMM", { locale: es }),
                    }));
                    return (_jsxs(Select, { onValueChange: (newValue) => {
                            const newDate = new Date(currentMonth);
                            newDate.setMonth(parseInt(newValue));
                            goToMonth(newDate);
                        }, value: props.value?.toString(), children: [_jsx(SelectTrigger, { children: format(currentMonth, "MMM", { locale: es }).toUpperCase() }), _jsx(SelectContent, { children: selectItems.map((selectItem) => (_jsx(SelectItem, { value: selectItem.value, children: selectItem.label ? selectItem.label.charAt(0).toUpperCase() + selectItem.label.slice(1) : selectItem.label }, selectItem.value))) })] }));
                }
                else if (props.name === "years") {
                    const earliestYear = fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear();
                    const latestYear = toYear || toMonth?.getFullYear() || toDate?.getFullYear();
                    let selectItems = [];
                    if (earliestYear && latestYear) {
                        const yearsLength = latestYear - earliestYear + 1;
                        selectItems = Array.from({ length: yearsLength }, (_, i) => ({
                            label: (earliestYear + i).toString(),
                            value: (earliestYear + i).toString(),
                        }));
                    }
                    return (_jsxs(Select, { onValueChange: (newValue) => {
                            const newDate = new Date(currentMonth);
                            newDate.setFullYear(parseInt(newValue));
                            goToMonth(newDate);
                        }, value: props.value?.toString(), children: [_jsx(SelectTrigger, { children: currentMonth.getFullYear() }), _jsx(SelectContent, { children: selectItems.map((selectItem) => (_jsx(SelectItem, { value: selectItem.value, children: selectItem.label }, selectItem.value))) })] }));
                }
                return null;
            }
        }, ...props }));
}
Calendar.displayName = "Calendar";
export { Calendar };