import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog"; // Asegúrate de importar correctamente desde ShadCN
const ModalViewer = ({ fileUrl }) => {
    const [textBtn, setTextBtn] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const typeImage = ["jpg", "jpeg", "png"];
    const typeDocument = ["pdf", "doc", "docx"];
    let fileType;
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    if (typeImage.filter((img) => fileUrl.includes(img))) {
        setTextBtn("Ver Imagen");
        fileType = "image";
    }
    else if (typeDocument.filter((doc) => fileUrl.includes(doc))) {
        setTextBtn("Ver documento");
    }
    else {
        setTextBtn("Ver documento");
    }
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleOpen, className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition", children: textBtn }), _jsx(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: _jsxs(DialogContent, { className: "max-w-4xl", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Vista Previa" }) }), _jsx("div", { className: "flex justify-center items-center", children: fileType === "image" ? (_jsx("img", { src: fileUrl, alt: "Vista Previa", className: "max-w-full max-h-[80vh] rounded" })) : (_jsx("iframe", { src: fileUrl, className: "w-full h-[80vh]", title: "Vista Previa PDF" })) })] }) })] }));
};
export default ModalViewer;
