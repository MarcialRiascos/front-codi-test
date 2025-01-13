import { useEffect } from 'react'

import DashboardLayout from '../layouts/DashboardLayout'

import { columnsBeneficiary } from '../components/columns-table/columnsBeneficiary'

import { DataTable } from '../../../components/data-table'
import { Label } from '../../../components/ui/label'
import { useBeneficiaryStore } from '../../../store/beneficiaryStore'
import { useAuthStore } from '../../../store/authStore'
import { Button } from '../../../components/ui/button';
import { generateUserExcel } from '../../../utils/exportInfo';


const Beneficiario = () => {
    const { userRole } = useAuthStore();
    const { userBeneficiary, loading, getBeneficiaries, deleteBeneficiary } = useBeneficiaryStore()

    useEffect(() => {        
        getBeneficiaries();
    }, [getBeneficiaries]);

    const hadleExportingData = () => {
        generateUserExcel(userBeneficiary||[])
    }
    
    return (
        <DashboardLayout>
            <div className="relative shadow-md sm:rounded-lg">
                {(loading) && <div className='flex justify-center'>
                    {loading && <Label className='text-sm font-bold'>
                        Cargando beneficiarios...
                    </Label>}
                </div>}

                <DataTable
                    columns={columnsBeneficiary(userRole||"", deleteBeneficiary)}
                    data={userBeneficiary || []}
                    options={[
                        { value: "Contrato", label: "Contrato" },
                        { value: "NumeroDocumento", label: "Número de documento" },
                        { value: "Nombre", label: "Nombre" },
                        { value: "Apellido", label: "Apellido" },
                        { value: "Correo", label: "Correo electrónico" },
                    ]}
                >
                    <Button
                        variant="outline"
                        className=""
                        onClick={hadleExportingData}
                    >Exportar datos de usuarios</Button>
                </DataTable>
            </div>
        </DashboardLayout>
    )
}

export default Beneficiario