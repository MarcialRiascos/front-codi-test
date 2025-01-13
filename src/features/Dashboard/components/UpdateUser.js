import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
// import Tooltip from './TooltipComponent';
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "../../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../../../components/ui/card";
import UpdateForm from "./updates/UpdateForm";
import UserDocuments from "./updates/UserDocuments";
const UpdateUser = ({ idUser, beneficiaryData, icon }) => {
    return (_jsx(_Fragment, { children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", className: 'p-0 size-7 w-7 h-7', children: icon }) }), _jsxs(DialogContent, { className: "sm:max-w-[820px] h-[95vh] overflow-y-auto", "aria-describedby": undefined, children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { className: "text-2xl", children: "Actualizar Informaci\u00F3n del Beneficiario" }) }), _jsxs(Tabs, { defaultValue: "data-user", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [_jsx(TabsTrigger, { value: "data-user", children: "Datos del usuario" }), _jsx(TabsTrigger, { value: "document-user", children: "Documentos" })] }), _jsx(TabsContent, { value: "data-user", className: "", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Actualizar usuario" }), _jsx(CardDescription, { children: "Intruduce los datos a cambiar del usuario" })] }), _jsx(CardContent, { children: _jsx(UpdateForm, { idUser: idUser, beneficiaryData: beneficiaryData }) })] }) }), _jsx(TabsContent, { value: "document-user", children: _jsxs(Card, { className: "", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Documentos del usuario" }), _jsx(CardDescription, { children: "Actualiza o agrega los documentos del usuario" })] }), _jsx(CardContent, { className: "space-y-2", children: _jsx(UserDocuments, { idUser: idUser }) })] }) })] })] })] }) }));
};
export default UpdateUser;
