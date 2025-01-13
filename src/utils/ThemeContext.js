import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext(undefined);
export default function ThemeProvider({ children }) {
    const persistedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(persistedTheme || 'light');
    const changeCurrentTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    useEffect(() => {
        document.documentElement.classList.add('[&_*]:!transition-none');
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
        }
        else {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
        }
        const transitionTimeout = setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        }, 1);
        return () => clearTimeout(transitionTimeout);
    }, [theme]);
    return _jsx(ThemeContext.Provider, { value: { currentTheme: theme, changeCurrentTheme }, children: children });
}
export const useThemeProvider = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeProvider debe usarse dentro de un ThemeProvider");
    }
    return context;
};
