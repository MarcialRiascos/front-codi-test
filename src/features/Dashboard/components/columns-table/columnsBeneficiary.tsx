import { ColumnDef } from "@tanstack/react-table"
import { BeneficiarioSchema } from '../../schemas/registerUser'
import { BeneficiaryData } from "../../types"

import DeleteUser from '../../components/DeleteUser'

import EditIcon from '../../../../assets/icons/EditIcon'
import DeleteIcon from '../../../../assets/icons/DeleteIcon'
import UpdateUser from "../UpdateUser"
import { UserInfoModal } from "../UserInfoModal"
import { canPerformAction } from "../../../../utils/canPerformAction"


export type Beneficiary = {
  user: BeneficiarioSchema
}

export const columnsBeneficiary = (userRole: string, actionState: (id: number | string) => void): ColumnDef<BeneficiaryData>[] => [
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
      const beneficiary = row.original

      return (
        <div className="w-full flex justify-center items-center space-x-3">

          {canPerformAction('edit', userRole) && <UpdateUser
            idUser={beneficiary.idBeneficiario}
            beneficiaryData={beneficiary}
            icon={<EditIcon />}
          />}

          {canPerformAction('delete', userRole) && <DeleteUser
            idUser={beneficiary.idBeneficiario}
            actionState={actionState}
            icon={<DeleteIcon />}
            title='Eliminar Beneficiario'
            description={`¿Está seguro de eliminar a este beneficiario con número de documento ${beneficiary.NumeroDocumento}?`}
          />}
          { canPerformAction('view', userRole) && <UserInfoModal user={beneficiary} />}
        </div>
      )
    },
  },
]