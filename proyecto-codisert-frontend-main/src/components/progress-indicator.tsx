import { FormStep } from '../features/Dashboard/types'
import { Check } from 'lucide-react'

interface ProgressIndicatorProps {
    steps: readonly FormStep[]
    currentStep: number
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
    return (
        <div className="relative">
            <nav aria-label="Progress" className="mb-8">
                {/* Líneas de progreso con animación */}
                <div className="absolute top-4 left-0 w-full">
                    <div className="flex justify-between">
                        {steps.map((_, index) => (
                            index !== steps.length - 1 && (
                                <div key={index} className="relative w-full">
                                    {/* Línea de fondo */}
                                    <div className="h-0.5 w-full bg-muted" />
                                    {/* Línea de progreso animada */}
                                    <div
                                        className={`absolute left-0 top-0 h-0.5 bg-primary transition-all duration-500 ease-in-out`}
                                        style={{
                                            width: index < currentStep ? '100%' : '0%',
                                        }}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* Indicadores de paso con animación */}
                <ol role="list" className="relative flex items-center justify-between">
                    {steps.map((step, index) => (
                        <li key={step.title} className="relative flex flex-col items-center">
                            <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background transition-all duration-500 ease-in-out ${index < currentStep
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : index === currentStep
                                            ? 'border-primary'
                                            : 'border-muted'
                                    }`}
                            >
                                {index < currentStep ? (
                                    <Check className="h-4 w-4 transition-opacity duration-300" />
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                            </span>
                            <span className="mt-2 text-sm font-medium">
                                {step.title}
                            </span>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}