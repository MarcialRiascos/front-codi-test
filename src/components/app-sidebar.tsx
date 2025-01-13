import * as React from "react"

import { useAuthStore } from "../store/authStore";

// import { SearchForm } from "./search-form"
import logo from "/images/logo-codisert-con-slogan-azul.png";
import logoCodisertBlanco from "/images/logo-codisert-blanco-slogan.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./ui/sidebar"
// import { Label } from "./ui/label"
import { NavUser } from "./nav-user"
import { Link } from "react-router-dom"
import { HomeIcon, Users } from "lucide-react"
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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { userAdmin, userRole } = useAuthStore();

  const filterRoutesByRole = (routes: typeof data.navLinks) => {

    return routes
      .filter((route) => !route.allowedRoles || route.allowedRoles.includes(userRole!))
      .map((route) => ({
        ...route,
        items: route.items
          ? route.items.filter(
            (item) => !item.allowedRoles || item.allowedRoles.includes(userRole!)
          )
          : undefined,
      }));
  };

  const filteredRoutes = filterRoutesByRole(data.navLinks);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex justify-center h-24 shadow-gray-400 shadow-sm">
        {/* <Label className="text-2xl font-extrabold">Dashboard</Label> */}
        <img src={logo} alt="Logo" className="w-40 h-auto block dark:hidden" />
        <img src={logoCodisertBlanco} alt="Logo Codisert" className="w-40 h-auto hidden dark:block" />
      </SidebarHeader>
      <SidebarContent className="pt-10">
        {/* <NavMain items={data.navLinks} /> */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.url ? <Link to={item.url} className="font-medium">
                      {item.title}
                    </Link> : <span className="font-medium">{item.title}</span>}
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={item.url}>{item.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userAdmin || data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
