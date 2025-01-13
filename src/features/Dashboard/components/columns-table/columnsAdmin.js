import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteUser from '../../components/DeleteUser';
import UpdateAdmin from '../../components/UpdateAdmin';
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
export const columnsAdmin = (actionState) => [
    {
        accessorKey: "idAdministrador",
        header: "Id",
    },
    {
        accessorKey: "NumeroDocumento",
        header: "Número de identificación",
    },
    {
        accessorKey: "Nombre",
        header: "Nombre",
    },
    {
        accessorKey: "Apellido",
        header: "Apellido",
    },
    {
        accessorKey: "Telefono",
        header: "Teléfono",
    },
    {
        accessorKey: "Correo",
        header: "Correo electrónico",
    },
    {
        accessorKey: "Rol.Rol",
        header: "Rol",
    },
    {
        accessorKey: "Estado.Estado",
        header: "Estado",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const admin = row.original;
            return (_jsxs(_Fragment, { children: [_jsx(UpdateAdmin, { idAdmin: admin.idAdministrador, dataAdmin: admin, icon: _jsx(EditIcon, {}) }), _jsx(DeleteUser, { idUser: admin.idAdministrador, actionState: actionState, icon: _jsx(DeleteIcon, {}), title: 'Eliminar administrador', description: '\u00BFEst\u00E1 seguro de eliminar a este administrador?' })] }));
        },
    },
];
