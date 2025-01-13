import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
export function ProgressIndicator({ steps, currentStep }) {
    return (_jsx("div", { className: "relative", children: _jsxs("nav", { "aria-label": "Progress", className: "mb-8", children: [_jsx("div", { className: "absolute top-4 left-0 w-full", children: _jsx("div", { className: "flex justify-between", children: steps.map((_, index) => (index !== steps.length - 1 && (_jsxs("div", { className: "relative w-full", children: [_jsx("div", { className: "h-0.5 w-full bg-muted" }), _jsx("div", { className: `absolute left-0 top-0 h-0.5 bg-primary transition-all duration-500 ease-in-out`, style: {
                                        width: index < currentStep ? '100%' : '0%',
                                    } })] }, index)))) }) }), _jsx("ol", { role: "list", className: "relative flex items-center justify-between", children: steps.map((step, index) => (_jsxs("li", { className: "relative flex flex-col items-center", children: [_jsx("span", { className: `flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background transition-all duration-500 ease-in-out ${index < currentStep
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : index === currentStep
                                        ? 'border-primary'
                                        : 'border-muted'}`, children: index < currentStep ? (_jsx(Check, { className: "h-4 w-4 transition-opacity duration-300" })) : (_jsx("span", { children: index + 1 })) }), _jsx("span", { className: "mt-2 text-sm font-medium", children: step.title })] }, step.title))) })] }) }));
}
