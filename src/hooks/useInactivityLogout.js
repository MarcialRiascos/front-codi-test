import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
const useInactivityLogout = (timeout = 900000) => {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    useEffect(() => {
        let timeoutId;
        const resetTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                logout();
                navigate('/'); // Redirige a la página de login
            }, timeout);
        };
        // Detectar eventos de actividad
        const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
        events.forEach((event) => window.addEventListener(event, resetTimeout));
        // Configurar el timeout inicial
        resetTimeout();
        return () => {
            clearTimeout(timeoutId);
            events.forEach((event) => window.removeEventListener(event, resetTimeout));
        };
    }, [logout, navigate, timeout]);
};
export default useInactivityLogout;
