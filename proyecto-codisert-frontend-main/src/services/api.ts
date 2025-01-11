import { useAuthStore } from "../store/authStore";

const API_URL = import.meta.env.VITE_API_URL

type ApiResponse<T> = {
    data?: T; // Datos de la respuesta en caso de éxito
    message?: string;
    error?: string; // Mensaje de error en caso de fallo
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const getData = async (url: string) => {
    // const { logout } = useAuthStore.getState();
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
        });
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error);
    }
};

export const getDataBeneficiary = async (url: string) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error en la petición GET');
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al hacer GET:', error);
        throw error;
    }
};

export const post = async (url: string, data: object) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
            body: JSON.stringify(data),
        });

        const responseData = await response.json()

        if (response.status === 400) {
            throw new Error(`${responseData.message}`);
        }

        if (!response.ok) {
            throw new Error(`No se pudo realizar el registro, ${responseData.message}`);
        }

        return responseData
    } catch (error) {
        console.error('Ha ocurrido un error, por favor, contacta con el administrador');
        throw error;
    }
}

export const uploadFiles = async (url: string, data: FormData) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
            body: data,
        });

        const responseData = await response.json()
        console.log("Datos enviados", responseData.message)


        if (response.status === 400) {
            throw new Error(`${responseData.message}`);
        }

        if (!response.ok && response.status !== 400) {
            throw new Error(`No se pudo realizar el registro, ${responseData.message}`);
        }

        return responseData
    } catch (error) {
        console.error('Ha ocurrido un error, por favor, contacta con el administrador');
        throw error;
    }
}

export const updateEndpoint = async (url: string, id: string | number, data: object) => {
    try {
        const response = await fetch(`${API_URL}/${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('No se pudo realizar la actualización, revisa los datos y vuelva a intentarlo');
        }

        const responseData = await response.json()

        return responseData
    } catch (error) {
        console.error('Error en la petición');
        throw error;
    }
}

export const deleteEndpoint = async (url: string) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
        });

        if (!response.ok) {
            throw new Error('No se pudo realizar la eliminación, revisa los datos y vuelva a intentarlo');
        }

        const responseData = await response.json()

        return responseData
    } catch (error) {
        console.error('Error en la petición');
        throw error;
    }
}

// Función para peticiones externas
export const fetchApiExternal = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error en la petición GET');
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al hacer GET:', error);
        throw error;
    }
};

export async function fetchApi<T>(
    url: string,
    method: HttpMethod,
    body?: Record<string, unknown> | null,
    headers: Record<string, string> = { "Content-Type": "application/json" },
    includeCredentials: boolean = false // Nuevo parámetro para incluir cookies
): Promise<ApiResponse<T>> {
    const { refreshToken, logout } = useAuthStore.getState();
    try {
        const options: RequestInit = {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
            credentials: includeCredentials ? "include" : "same-origin", // Configuración de cookies
        };

        const response = await fetch(`${API_URL}/${url}`, options);

        // Verifica si hubo un problema con la respuesta de la API
        if (!response.ok) {
            const errorDetails = await response.json().catch(() => ({}));
            if (response.status === 404) {
                console.error(`Recurso no encontrado: ${errorDetails.message}`);
                return { error: `Recurso no encontrado` };
            } else if (response.status === 400) {
                return { error: errorDetails.message };
            }else if (response.status === 401 && (errorDetails.message === "Token inválido" || errorDetails.message.includes("Token expirado"))) {
                refreshToken();
            }else if (response.status === 401 && errorDetails.message === "Token no proporcionado") {
                logout();
            }else {
                // Si hubo otro error HTTP (500, etc.)
                console.error(`Error HTTP: ${response.status}`);
                console.log(errorDetails.message);
            }
            return { error: `HTTP error: ${errorDetails.message}` };
        }

        // Si la respuesta es JSON, parsea y devuelve los datos
        const result = await response.json();
        const data: T = result.data;
        return { data, message: result.message };
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error in fetchApi: ${error.message}`);
            return { error: error.message };
        }
        return {error: "Se produjo un error desconocido"};
    }
}