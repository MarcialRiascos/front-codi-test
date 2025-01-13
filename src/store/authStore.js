import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { post } from '../services/api';
export const useAuthStore = create()(persist((set) => ({
    userAdmin: null,
    isAuthenticated: false,
    userRole: null,
    loading: false,
    error: '',
    loginUser: async (data) => {
        set({ loading: true, error: '' });
        try {
            const resp = await post('auth/login', data);
            set({ userAdmin: resp.user, isAuthenticated: true, userRole: resp.user.role, loading: false, error: '' });
        }
        catch (err) {
            console.log("Error al iniciar sesión", err);
            set({ isAuthenticated: false, loading: false, error: "Revisa las credenciales y vuelva a intentarlo. Si el problema persiste, contacta con el administrador" });
        }
    },
    logout: async () => {
        try {
            // Intenta hacer logout en el backend
            await post('auth/logout', {});
        }
        catch (error) {
            console.error("No se pudo comunicar con el backend para cerrar sesión", error);
        }
        finally {
            localStorage.removeItem('user-storage');
            localStorage.removeItem('admin-storage');
            localStorage.removeItem('beneficiary-storage');
            useAuthStore.setState({
                userAdmin: null,
                isAuthenticated: false,
                userRole: null,
                loading: false,
                error: '',
            }); // Actualiza Zustand
            window.location.href = "/";
        }
    },
    refreshToken: async () => {
        try {
            // Intenta hacer un refresh de token en el backend
            await post('auth/refresh-token', {});
        }
        catch (error) {
            console.error("No se pudo comunicar con el backend para actualizar el token", error);
        }
    },
}), {
    name: 'user-storage', // Nombre clave en localStorage
    storage: {
        getItem: (key) => {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null; // Parsea el valor
        },
        setItem: (key, value) => {
            localStorage.setItem(key, JSON.stringify(value)); // Guarda como string
        },
        removeItem: (key) => {
            localStorage.removeItem(key);
        },
    }
}));
