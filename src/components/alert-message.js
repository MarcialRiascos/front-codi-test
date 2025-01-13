import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, } from './ui/alert-dialog';
import { Button } from './ui/button';
const AlertMessage = ({ dialog, setDialog }) => {
    return (_jsx(AlertDialog, { open: dialog.isOpen, onOpenChange: (isOpen) => setDialog({ ...dialog, isOpen }), children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: dialog.title }), _jsx(AlertDialogDescription, { children: dialog.message })] }), _jsx(AlertDialogFooter, { children: _jsx(Button, { onClick: () => setDialog({ ...dialog, isOpen: false }), children: "Aceptar" }) })] }) }));
};
export default AlertMessage;
