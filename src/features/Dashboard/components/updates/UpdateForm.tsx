import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { BeneficiarioSchema, beneficiarioSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Form } from '../../../../components/ui/form'


import { BeneficiaryData } from '../../types';
import { useBeneficiaryStore } from '../../../../store/beneficiaryStore';
import { formatDate } from '../../../../utils/formatDate';

import { PlanInfoStep } from '../beneficiary/PlanInfoStep';
import { PersonalInfoStep } from '../beneficiary/PersonalInfoStep';
import { AddressStep } from '../beneficiary/AddressStep';
import { OtherInfoStep } from '../beneficiary/OtherInfoStep';
import { ProgressIndicator } from '../../../../components/progress-indicator';
import { showConfirmationModal } from '../../../../utils/modal';

interface Props {
    idUser: string | number;
    beneficiaryData: BeneficiaryData;
}

const FORM_STEPS = [
    {
        title: "Plan",
        description: "Ingresa información de tu plan",
        component: PlanInfoStep,
        fields: ["Contrato", "Servicio"] as const,
    },
    {
        title: "Información personal",
        description: "Ingresa tu información personal",
        component: PersonalInfoStep,
        fields: ["Nombre", "Apellido", "TipoDocumento_idTipoDocumento", "NumeroDocumento", "FechaNacimiento", "Sexo_idSexo", "Correo", "Telefono", "Celular", "TelefonoTres"] as const,
    },
    {
        title: "Direccion",
        description: "Dirección",
        component: AddressStep,
        fields: [
            "Departamento",
            "CodigoDaneDpmto",
            "Municipio",
            "CodigoDaneMunicipio",
            "ViaPrincipalClave",
            "ViaPrincipalValor",
            "ViaSecundariaClave",
            "ViaSecundariaValor",
            "ViaSecundariaValorDos",
            "TipoUnidadUnoClave",
            "TipoUnidadUnoValor",
            "TipoUnidadDosClave",
            "TipoUnidadDosValor",
            "Barrio",
            "Estrato_idEstrato",
            "Estrato_idEstrato",
            "Direccion"
        ] as const,
    },
    {
        title: "Preferencias",
        description: "Personaliza tu experiencia",
        component: OtherInfoStep,
        fields: ["FechaInicio", "Anexo"] as const,
    },
] as const

const UpdateForm = ({ idUser, beneficiaryData }: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const { updateBeneficiary } = useBeneficiaryStore();

    const form = useForm<BeneficiarioSchema>({
        resolver: zodResolver(beneficiarioSchema),
        defaultValues: {
            Contrato: beneficiaryData.Contrato,
            Servicio: beneficiaryData.Servicio,
            Nombre: beneficiaryData.Nombre,
            Apellido: beneficiaryData.Apellido,
            TipoDocumento_idTipoDocumento: beneficiaryData.TipoDocumento?.id?.toString() || '',
            NumeroDocumento: beneficiaryData.NumeroDocumento,
            Telefono: beneficiaryData.Telefono||'',
            Celular: beneficiaryData.Celular||'',
            TelefonoTres: beneficiaryData.TelefonoTres||'',
            Correo: beneficiaryData.Correo,
            FechaNacimiento: formatDate(beneficiaryData.FechaNacimiento, undefined, 0),
            Sexo_idSexo: beneficiaryData.Sexo.id.toString(),
            Departamento: beneficiaryData.Departamento,
            CodigoDaneDpmto: beneficiaryData.CodigoDaneDpmto,
            Municipio: beneficiaryData.Municipio,
            CodigoDaneMunicipio: beneficiaryData.CodigoDaneMunicipio,
            ViaPrincipalClave: beneficiaryData.ViaPrincipalClave,
            ViaPrincipalValor: beneficiaryData.ViaPrincipalValor,
            ViaSecundariaClave: beneficiaryData.ViaSecundariaClave,
            ViaSecundariaValor: beneficiaryData.ViaSecundariaValor,
            ViaSecundariaValorDos: beneficiaryData.ViaSecundariaValorDos,
            TipoUnidadUnoClave: beneficiaryData.TipoUnidadUnoClave,
            TipoUnidadUnoValor: beneficiaryData.TipoUnidadUnoValor,
            TipoUnidadDosClave: beneficiaryData.TipoUnidadDosClave,
            TipoUnidadDosValor: beneficiaryData.TipoUnidadDosValor,
            Direccion: beneficiaryData.Direccion,
            Barrio: beneficiaryData.Barrio,
            Estrato_idEstrato: beneficiaryData.Estrato.id.toString(),
            Estado_idEstado: beneficiaryData.Estado.id.toString(),
            FechaInicio: formatDate(beneficiaryData.FechaInicio),
            FechaFin: beneficiaryData.FechaFin ? formatDate(beneficiaryData.FechaFin) : undefined,
            Anexo: beneficiaryData.Anexo,
        },
        mode: "onTouched"
    });
    // const { getValues, setValue } = form;


    // const isChecked = () => {
    //     setIsActiveFechaFin(!isActiveFechaFin);
    //     if (isActiveFechaFin) {
    //         console.log("Fecha fin desactivada");
    //         setValue("FechaFin", undefined);
    //     }
    // }



    const processForm = async (data: BeneficiarioSchema) => {
        if (currentStep === FORM_STEPS.length - 1) {
            await updateBeneficiary(idUser, data);
        }
        next()
    }

    const next = () => {
        setCurrentStep((step) => {
            if (step >= FORM_STEPS.length - 1) return step
            return step + 1
        })
    }

    const back = () => {
        setCurrentStep((step) => {
            if (step <= 0) return step
            return step - 1
        })
    }

    const handleNext = async () => {
        const fields = FORM_STEPS[currentStep].fields
        const output = await form.trigger(fields, { shouldFocus: true })

        if (!output) return

        const stepData = form.getValues()
        await processForm(stepData)
    }

    const CurrentStepComponent = FORM_STEPS[currentStep].component

    return (
        <>
            <ProgressIndicator steps={FORM_STEPS} currentStep={currentStep} />
            <Form {...form}>
                <form className='overflow-y-auto space-y-5'>
                    <CurrentStepComponent />
                    <div className="flex justify-between pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={back}
                            disabled={currentStep === 0}
                        >
                            Atrás
                        </Button>
                        <Button
                            type="button"
                            onClick={handleNext}
                        >
                            {currentStep === FORM_STEPS.length - 1 ? "Actualizar beneficiario" : "Siguiente"}
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default UpdateForm