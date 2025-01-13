import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, 
// BreadcrumbLink,
BreadcrumbList, BreadcrumbPage,
// BreadcrumbSeparator,
 } from "../../../components/ui/breadcrumb";
import { SidebarTrigger, } from "../../../components/ui/sidebar";
import { ModeToggle } from '../../../components/mode-toggle';
import { useAuthStore } from "../../../store/authStore";
const Header = () => {
    const { userRole } = useAuthStore();
    return (_jsx("header", { className: "w-full flex h-24 shrink-0 items-center gap-2 border-b px-4 text-gray-100 shadow-gray-400 shadow-sm", children: _jsxs("div", { className: 'flex items-center justify-between w-full', children: [_jsx(SidebarTrigger, { className: "-ml-1 text-gray-900 dark:text-gray-100" }), _jsx(Breadcrumb, { children: _jsx(BreadcrumbList, { children: _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: userRole }) }) }) }), _jsx(ModeToggle, {})] }) }));
};
export default Header;
