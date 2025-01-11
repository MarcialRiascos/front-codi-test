import Swal from 'sweetalert2';

/**
 * Muestra un modal estilizado con SweetAlert2 y TailwindCSS.
 *
 * @param title - El título del modal.
 * @param text - El contenido del modal.
 * @param icon - El ícono del modal ('success', 'error', 'warning', 'info', 'question').
 */
export const showModal = async (
    title: string,
    text: string,
    icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info'
) => {
    const result = await Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: 'Aceptar',
        customClass: {
            container: 'bg-gray-800 bg-opacity-50 flex items-center justify-center', // Fondo semitransparente
            popup: 'bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6', // Estilo del popup
            title: 'text-xl font-semibold text-gray-800 dark:text-white', // Título del modal
            htmlContainer: 'text-gray-600 dark:text-gray-300', // Contenido
            confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none', // Botón de confirmar
        },
        buttonsStyling: false, // Desactiva los estilos predeterminados de SweetAlert2
    });

    return result; // Puedes usar esto para manejar eventos (e.g., `result.isConfirmed`)
};


/**
 * Muestra un modal de confirmación adaptado al tema actual de la aplicación.
 * 
 * @param title - Título del modal.
 * @param text - Texto del modal.
 * @param confirmButtonText - Texto del botón de confirmación.
 * @param cancelButtonText - Texto del botón de cancelación.
 * @returns Promise<boolean | undefined>
 */
export const showConfirmationModal = async (
    title: string,
    text: string,
    confirmButtonText: string = "Confirmar",
    cancelButtonText: string = "Cancelar",
): Promise<boolean | undefined> => {
    const result = await Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText,
        customClass: {
            container: 'flex items-center justify-center', // Fondo semitransparente gestionado automáticamente
            popup: 'bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6', // Popup adaptado a tema oscuro/claro
            title: 'text-gray-800 dark:text-white text-xl font-semibold',
            confirmButton: 'bg-primary hover:bg-primary/90 text-white dark:text-gray-800 font-bold py-2 px-4 rounded mr-2',
            cancelButton: 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false, // Para aplicar clases personalizadas
    });

    if (result.isConfirmed) {
        return true;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        return undefined;
    } else {
        return false;
    }
};