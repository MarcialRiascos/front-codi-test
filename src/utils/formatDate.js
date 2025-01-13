import { format, addDays, parseISO } from "date-fns";
/**
 * Formatea una fecha al formato deseado y ajusta días si es necesario.
 *
 * @param date - Fecha en formato Date, ISO 8601, o cadena reconocida por `Date`.
 * @param formatPattern - Patrón de formato (ej. "dd-MM-yyyy" o "EEEE-MM-dd").
 * @param daysToAdjust - Número de días a añadir o restar (opcional).
 * @returns Fecha formateada como una cadena.
 */
export function formatDate(date, formatPattern = "yyyy-MM-dd", daysToAdjust = 0) {
    // Convertir la entrada a un objeto Date
    const parsedDate = typeof date === "string" ? parseISO(date) : new Date(date);
    if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date provided");
    }
    // Ajustar la fecha si es necesario
    const adjustedDate = addDays(parsedDate, daysToAdjust);
    // Formatear la fecha
    return format(adjustedDate, formatPattern);
}
