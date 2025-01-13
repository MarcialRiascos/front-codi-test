import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
const MessageDialog = ({ isOpen, title, description }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
    return (_jsx(Dialog, { open: isDialogOpen, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: description })] }), _jsx(DialogFooter, { children: _jsx(Button, { onClick: () => setIsDialogOpen(false), variant: "outline", children: "Aceptar" }) })] }) }));
};
export default MessageDialog;
