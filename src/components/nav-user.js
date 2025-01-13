"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthStore } from "../store/authStore";
import { BadgeCheck, ChevronsUpDown, LogOut, } from "lucide-react";
import { Avatar, AvatarFallback,
// AvatarImage,
 } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "./ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export function NavUser({ user }) {
    const { logout } = useAuthStore();
    const { isMobile } = useSidebar();
    return (_jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [_jsx(Avatar, { className: "h-8 w-8 rounded-lg", children: _jsx(AvatarFallback, { className: "rounded-lg", children: `${user.name ? user.name.charAt(0) : 'Joe'}${user.lastname ? user.lastname.charAt(0) : 'Doe'}` }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: `${user.name} ${user.lastname}` }), _jsx("span", { className: "truncate text-xs", children: user.email })] }), _jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), _jsxs(DropdownMenuContent, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: isMobile ? "bottom" : "right", align: "end", sideOffset: 4, children: [_jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: _jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [_jsx(Avatar, { className: "h-8 w-8 rounded-lg", children: _jsx(AvatarFallback, { className: "rounded-lg", children: `${user.name ? user.name.charAt(0) : 'Joe'}${user.lastname ? user.lastname.charAt(0) : 'Doe'}` }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: `${user.name} ${user.lastname}` }), _jsx("span", { className: "truncate text-xs", children: user.email })] })] }) }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuGroup, { children: _jsxs(DropdownMenuItem, { children: [_jsx(BadgeCheck, {}), _jsx(Link, { to: "/dashboard/account", className: "w-full flex justify-start border-none px-0", children: "Cuenta" })] }) }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: _jsxs(Button, { onClick: () => logout(), variant: "outline", className: "w-full flex justify-start border-none px-0", children: [_jsx(LogOut, {}), "Cerrar sesi\u00F3n"] }) })] })] }) }) }));
}
