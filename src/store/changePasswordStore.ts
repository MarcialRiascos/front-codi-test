import { create } from 'zustand';
import { fetchApi } from '../services/api';
import { showConfirmationModal, showModal } from '../utils/modal';
import { ChangePasswordSchema } from '../features/Dashboard/schemas/registerUser';
import { useAuthStore } from './authStore';

interface ViaState {
    error: string | null;
    changePassword: (data: ChangePasswordSchema) => Promise<void>;
}

export const useChangePassword = create<ViaState>()((set) => ({
    error: null,
    changePassword: async (data: ChangePasswordSchema) => {
        const { logout } = useAuthStore.getState();
        set({ error: '' });
        const { oldPassword, newPassword, confirmNewPassword } = data;
        set({ error: '' });
        if (newPassword === confirmNewPassword) {
            const response = await fetchApi<ChangePasswordSchema>(
                'api/v1/admin/change-password',
                'POST',
                {oldPassword,newPassword},
                undefined,
                true // Incluye las cookies en la solicitud
            )
    
            if (response.data) {
                // await showModal("Contraseña", response.data.message, "success");
                const resp = await showConfirmationModal("Cerrar sesión", "¿Deseas cerrar sesión?", "Si, cerrar sesión", "No, continuar aquí");
                if(resp){
                    logout();
                }else{
                    set({ error: '' });
                }
            } else {
                showModal("Error al cambiar la contraseña", `${response.error}`, "error");
                set({ error: response.error });
            }
        }else{
            showModal("Error", "La nueva contraseña no coincide con la confirmación", "error");
        }
    },
}));