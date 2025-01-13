import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from '../components/Header';
import { AppSidebar } from "../../../components/app-sidebar";
import { SidebarInset, SidebarProvider, } from "../../../components/ui/sidebar";
import useInactivityLogout from '../../../hooks/useInactivityLogout';
const DashboardLayout = ({ children }) => {
    useInactivityLogout();
    return (_jsx(_Fragment, { children: _jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs(SidebarInset, { children: [_jsx(Header, {}), _jsx("div", { className: "flex flex-1 flex-col gap-4 py-10 px-4", children: children })] })] }) }));
};
export default DashboardLayout;
