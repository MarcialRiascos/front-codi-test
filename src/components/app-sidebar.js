import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthStore } from "../store/authStore";
// import { SearchForm } from "./search-form"
import logo from "/images/logo-codisert-con-slogan-azul.png";
import logoCodisertBlanco from "/images/logo-codisert-blanco-slogan.png";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarFooter, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, } from "./ui/sidebar";
// import { Label } from "./ui/label"
import { NavUser } from "./nav-user";
import { Link } from "react-router-dom";
import { HomeIcon, Users } from "lucide-react";
// import { last } from "lodash";
// This is sample data.
const data = {
    user: {
        id: 1,
        name: "John Doe",
        lastname: "Doe",
        email: "john@example.com",
        avatar: "/avatars/shadcn.jpg",
        role: 'admin_super',
    },
    navLinks: [
        {
            title: "Dashboard",
            isActive: true,
            url: "/dashboard",
            icon: HomeIcon,
            allowedRoles: ["admin_super", "admin_lector", "admin_registrador"],
        },
        {
            title: "Gestión de Usuarios",
            icon: Users,
            allowedRoles: ["admin_super", "admin_lector", "admin_registrador"],
            items: [
                {
                    title: "Lista de usuarios",
                    url: "/dashboard/beneficiario",
                    icon: Users,
                    allowedRoles: ["admin_super", "admin_lector", "admin_registrador"],
                },
                {
                    title: "Crear usuario",
                    url: "/dashboard/create-user",
                    icon: Users,
                    allowedRoles: ["admin_super", "admin_registrador"],
                },
            ]
        },
        {
            title: "Administración Avanzada",
            allowedRoles: ["admin_super"],
            items: [
                {
                    title: "Gestión de Administradores",
                    url: "/dashboard/administradores",
                    icon: Users,
                    allowedRoles: ["admin_super"], // Visible solo para admin_super
                },
                // {
                //   title: "Roles y permisos",
                //   url: "/dashboard/permisos",
                //   icon: Users,
                //   allowedRoles: ["admin_super"], // Visible solo para admin_super
                // },
            ]
        },
    ],
};
export function AppSidebar({ ...props }) {
    const { userAdmin, userRole } = useAuthStore();
    const filterRoutesByRole = (routes) => {
        return routes
            .filter((route) => !route.allowedRoles || route.allowedRoles.includes(userRole))
            .map((route) => ({
            ...route,
            items: route.items
                ? route.items.filter((item) => !item.allowedRoles || item.allowedRoles.includes(userRole))
                : undefined,
        }));
    };
    const filteredRoutes = filterRoutesByRole(data.navLinks);
    return (_jsxs(Sidebar, { ...props, children: [_jsxs(SidebarHeader, { className: "flex justify-center h-24 shadow-gray-400 shadow-sm", children: [_jsx("img", { src: logo, alt: "Logo", className: "w-40 h-auto block dark:hidden" }), _jsx("img", { src: logoCodisertBlanco, alt: "Logo Codisert", className: "w-40 h-auto hidden dark:block" })] }), _jsx(SidebarContent, { className: "pt-10", children: _jsx(SidebarGroup, { children: _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: filteredRoutes.map((item) => (_jsxs(SidebarMenuItem, { children: [_jsx(SidebarMenuButton, { asChild: true, children: item.url ? _jsx(Link, { to: item.url, className: "font-medium", children: item.title }) : _jsx("span", { className: "font-medium", children: item.title }) }), item.items?.length ? (_jsx(SidebarMenuSub, { children: item.items.map((item) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx(Link, { to: item.url, children: item.title }) }) }, item.title))) })) : null] }, item.title))) }) }) }) }), _jsx(SidebarFooter, { children: _jsx(NavUser, { user: userAdmin || data.user }) }), _jsx(SidebarRail, {})] }));
}
