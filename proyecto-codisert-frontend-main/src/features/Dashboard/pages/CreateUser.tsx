import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card"

import { BeneficiarioSchema, beneficiarioSchema } from '../schemas/registerUser';

import { Form } from '../../../components/ui/form'
import { useBeneficiaryStore } from '../../../store/beneficiaryStore';

import { formatDate } from '../../../utils/formatDate';
import { ProgressIndicator } from '../../../components/progress-indicator';
import { PersonalInfoStep } from '../components/beneficiary/PersonalInfoStep';
import { PlanInfoStep } from '../components/beneficiary/PlanInfoStep';
import { AddressStep } from '../components/beneficiary/AddressStep';
import { OtherInfoStep } from '../components/beneficiary/OtherInfoStep';
import { Button } from '../../../components/ui/button';

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

const CreateUser = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { createBeneficiary } = useBeneficiaryStore();

    const form = useForm<BeneficiarioSchema>({
        resolver: zodResolver(beneficiarioSchema),
        defaultValues: {
            Contrato: "",
            Servicio: "plan1",
            Nombre: "",
            Apellido: "",
            TipoDocumento_idTipoDocumento: "1",
            NumeroDocumento: "",
            Telefono: "",
            Celular: "",
            TelefonoTres: "",
            Correo: "",
            FechaNacimiento: undefined,
            Sexo_idSexo: "1",
            Departamento: "Valle del Cauca",
            CodigoDaneDpmto: "76",
            Municipio: "Buenaventura",
            CodigoDaneMunicipio: "76.109",
            ViaPrincipalClave: "",
            ViaPrincipalValor: "",
            ViaSecundariaClave: "",
            ViaSecundariaValor: "",
            ViaSecundariaValorDos: "",
            TipoUnidadUnoClave: "",
            TipoUnidadUnoValor: "",
            TipoUnidadDosClave: "",
            TipoUnidadDosValor: "",
            Direccion: "",
            Barrio: "",
            Estrato_idEstrato: "1",
            Estado_idEstado: "1",
            FechaInicio: formatDate(new Date()),
            FechaFin: undefined,
            Anexo: "",
        },
        mode: "onTouched"
    });

    const processForm = async (data: BeneficiarioSchema) => {
        if (currentStep === FORM_STEPS.length - 1) {
            await createBeneficiary(data);
            return
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

    // const currentStepFields = FORM_STEPS[currentStep].fields

    const handleNext = async () => {
        const fields = FORM_STEPS[currentStep].fields
        const output = await form.trigger(fields, { shouldFocus: true })

        if (!output) return

        const stepData = form.getValues()
        await processForm(stepData)
    }

    const CurrentStepComponent = FORM_STEPS[currentStep].component

    return (
        <DashboardLayout>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader className='mb-5'>
                    <CardTitle className='text-2xl font-bold'>Registrar nuevo usuario</CardTitle>
                    <CardDescription className='flex flex-col space-y-3'>
                        <span>Intruduce los datos del nuevo usuario</span>
                        <span>Requerido *</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ProgressIndicator steps={FORM_STEPS} currentStep={currentStep} />
                    <Form {...form}>
                        <form className="space-y-8">
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
                                    {currentStep === FORM_STEPS.length - 1 ? "Registrar beneficiario" : "Siguiente"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </DashboardLayout>
    )
}

export default CreateUser