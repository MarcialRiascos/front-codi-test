import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-100", children: [_jsx("h1", { className: "text-4xl font-bold text-red-500 mb-4", children: "404" }), _jsx("p", { className: "text-lg text-gray-700 mb-4", children: "P\u00E1gina no encontrada" }), _jsx(Link, { to: "/", className: "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600", children: "Volver al inicio" })] }));
};
export default NotFound;
