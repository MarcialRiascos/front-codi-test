import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import RegisterAdmin from '../components/RegisterAdmin';
import { useAdminStore } from '../../../store/adminStore';
import { DataTable } from '../../../components/data-table';
import { columnsAdmin } from '../components/columns-table/columnsAdmin';
import { Label } from '../../../components/ui/label';
const Admin = () => {
    const { userAdmin, loading, error, getAdmins, deleteAdmin } = useAdminStore();
    useEffect(() => {
        getAdmins();
    }, [getAdmins]);
    // if (loading) return <p>Cargando usuarios...</p>;
    // if (error) return <p className='text-red-500'>Error al cargar usuarios</p>;
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "relative shadow-md sm:rounded-lg", children: [(loading || error) && _jsxs("div", { className: 'flex justify-center', children: [loading && _jsx(Label, { className: 'text-sm font-bold', children: "Cargando administradores..." }), error && _jsx(Label, { className: 'text-sm font-bold text-red-500', children: error })] }), _jsx(DataTable, { columns: columnsAdmin(deleteAdmin), data: userAdmin || [], children: _jsx(RegisterAdmin, {}) })] }) }));
};
export default Admin;
