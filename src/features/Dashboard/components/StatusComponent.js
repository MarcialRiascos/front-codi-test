import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const StatusComponent = ({ status = false }) => {
    return (_jsxs("span", { className: "flex items-center text-sm font-medium text-gray-600 dark:text-white me-3", children: [_jsx("span", { className: `flex w-2.5 h-2.5 rounded-full me-1.5 flex-shrink-0 ${status ? 'bg-green-500' : 'bg-red-500'}` }), status ? 'Activo' : 'Inactivo'] })
    // <div className="flex items-center">
    //     <div className={`h-2.5 w-2.5 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'} me-2`}></div>
    //     {status ? 'Activo' : 'Inactivo'}
    // </div>
    );
};
export default StatusComponent;
