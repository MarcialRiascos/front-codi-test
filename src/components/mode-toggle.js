import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";
export function ModeToggle() {
    const { setTheme } = useTheme();
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", size: "icon", className: "bg-transparent border-none hover:bg-transparent", children: [_jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-900 dark:text-gray-100" }), _jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-900 dark:text-gray-100" }), _jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }), _jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }), _jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })] })] }));
}
