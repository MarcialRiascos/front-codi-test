import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import "./styles/tailwind.css";
import App from './App';
import React from 'react';
createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: _jsx(App, {}) }) }) }));
