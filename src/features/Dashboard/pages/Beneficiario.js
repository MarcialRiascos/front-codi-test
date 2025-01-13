import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { columnsBeneficiary } from '../components/columns-table/columnsBeneficiary';
import { DataTable } from '../../../components/data-table';
import { Label } from '../../../components/ui/label';
import { useBeneficiaryStore } from '../../../store/beneficiaryStore';
import { useAuthStore } from '../../../store/authStore';
import { Button } from '../../../components/ui/button';
import { generateUserExcel } from '../../../utils/exportInfo';
const Beneficiario = () => {
    const { userRole } = useAuthStore();
    const { userBeneficiary, loading, getBeneficiaries, deleteBeneficiary } = useBeneficiaryStore();
    useEffect(() => {
        getBeneficiaries();
    }, [getBeneficiaries]);
    const hadleExportingData = () => {
        generateUserExcel(userBeneficiary || []);
    };
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "relative shadow-md sm:rounded-lg", children: [(loading) && _jsx("div", { className: 'flex justify-center', children: loading && _jsx(Label, { className: 'text-sm font-bold', children: "Cargando beneficiarios..." }) }), _jsx(DataTable, { columns: columnsBeneficiary(userRole || "", deleteBeneficiary), data: userBeneficiary || [], options: [
                        { value: "Contrato", label: "Contrato" },
                        { value: "NumeroDocumento", label: "Número de documento" },
                        { value: "Nombre", label: "Nombre" },
                        { value: "Apellido", label: "Apellido" },
                        { value: "Correo", label: "Correo electrónico" },
                    ], children: _jsx(Button, { variant: "outline", className: "", onClick: hadleExportingData, children: "Exportar datos de usuarios" }) })] }) }));
};
export default Beneficiario;
