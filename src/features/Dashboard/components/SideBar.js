import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppSidebar } from "../../../components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "../../../components/ui/breadcrumb";
import { Separator } from "../../../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger, } from "../../../components/ui/sidebar";
const SideBar = ({ children }) => {
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs(SidebarInset, { children: [_jsxs("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b px-4", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Building Your Application" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Data Fetching" }) })] }) })] }), _jsx("div", { className: "flex flex-1 flex-col gap-4 p-4", children: children })] })] }));
};
export default SideBar;