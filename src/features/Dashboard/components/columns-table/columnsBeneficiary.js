import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteUser from '../../components/DeleteUser';
import EditIcon from '../../../../assets/icons/EditIcon';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import UpdateUser from "../UpdateUser";
import { UserInfoModal } from "../UserInfoModal";
import { canPerformAction } from "../../../../utils/canPerformAction";
export const columnsBeneficiary = (userRole, actionState) => [
    {
        accessorKey: "idBeneficiario",
        header: "Id",
    },
    {
        accessorKey: "Contrato",
        header: "N° Contrato",
    },
    {
        accessorKey: "NumeroDocumento",
        header: "Número de documento",
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
        accessorKey: "Correo",
        header: "Email",
    },
    {
        accessorKey: "Estado.nombre",
        header: "Estado",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const beneficiary = row.original;
            return (_jsxs("div", { className: "w-full flex justify-center items-center space-x-3", children: [canPerformAction('edit', userRole) && _jsx(UpdateUser, { idUser: beneficiary.idBeneficiario, beneficiaryData: beneficiary, icon: _jsx(EditIcon, {}) }), canPerformAction('delete', userRole) && _jsx(DeleteUser, { idUser: beneficiary.idBeneficiario, actionState: actionState, icon: _jsx(DeleteIcon, {}), title: 'Eliminar Beneficiario', description: `¿Está seguro de eliminar a este beneficiario con número de documento ${beneficiary.NumeroDocumento}?` }), canPerformAction('view', userRole) && _jsx(UserInfoModal, { user: beneficiary })] }));
        },
    },
];
