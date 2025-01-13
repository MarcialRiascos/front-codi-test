import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import RevenueCard from "../components/RevenueCard";
import DashboardLayout from "../layouts/DashboardLayout";
import { useBeneficiaryStore } from "../../../store/beneficiaryStore";
const Dashboard = () => {
    const { userBeneficiary, getBeneficiaries } = useBeneficiaryStore();
    useEffect(() => {
        getBeneficiaries();
    }, [getBeneficiaries]);
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [_jsx(RevenueCard, { title: "N\u00FAmero total de clientes", value: `${userBeneficiary?.length || 0}`, text: "Total de clientes activos" }), _jsx(RevenueCard, { title: "Total de equipos", value: "12,345", text: "Total de equipos registrados activos" }), _jsx(RevenueCard, { title: "Total de administradores", value: "10", text: "Total de administradores registrados activos" })] }) }));
};
export default Dashboard;
