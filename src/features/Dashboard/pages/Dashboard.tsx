import { useEffect } from "react";

import RevenueCard from "../components/RevenueCard"
import DashboardLayout from "../layouts/DashboardLayout"
import { useBeneficiaryStore } from "../../../store/beneficiaryStore"


const Dashboard = () => {
  const {userBeneficiary, getBeneficiaries} = useBeneficiaryStore();

  useEffect(() => {
    getBeneficiaries();
  }, [getBeneficiaries]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <RevenueCard
          title="Número total de clientes"
          value={`${userBeneficiary?.length || 0}`}
          text="Total de clientes activos"
        />
        <RevenueCard title="Total de equipos" value="12,345" text="Total de equipos registrados activos" />
        <RevenueCard title="Total de administradores" value="10" text="Total de administradores registrados activos" />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard