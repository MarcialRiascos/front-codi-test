import { jsx as _jsx } from "react/jsx-runtime";
const TableHeader = ({ className, children }) => {
    return (_jsx("th", { scope: "col", className: `px-6 py-3 ${className}`, children: children }));
};
export default TableHeader;
