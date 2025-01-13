import { useState } from 'react';
import { z } from 'zod';
// Interfaz para el estado del formulario
// interface UseFormProps<T> {
//     initialValues: T;
//   }
export const useForm = (schema, initialValues) => {
    const [formState, setFormState] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        if (target instanceof HTMLInputElement && target.files &&
            (target.name === 'contrato' ||
                target.name === 'copia_cc' ||
                target.name === 'copia_ds' ||
                target.name === 'foto_fp' ||
                target.name === 'velocidad_internet' ||
                target.name === 'cpe')) {
            const file = target.files?.[0] || undefined;
            setFormState((prev) => ({ ...prev, [name]: file }));
        }
        else {
            setFormState((prev) => ({ ...prev, [name]: value }));
        }
        if (schema.shape[name]) {
            try {
                schema.shape[name].parse(value);
                setErrors((prev) => ({ ...prev, [name]: null }));
            }
            catch (err) {
                if (err instanceof z.ZodError) {
                    setErrors((prev) => ({ ...prev, [name]: err.errors[0]?.message || null }));
                }
            }
        }
    };
    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        try {
            const parsedData = schema.parse(formState);
            callback(parsedData);
        }
        catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors = {};
                err.errors.forEach(({ path, message }) => {
                    const key = path[0];
                    fieldErrors[key] = message;
                });
                setErrors(fieldErrors);
            }
        }
    };
    const onResetForm = () => {
        setFormState(initialValues);
    };
    return {
        ...formState,
        formState,
        onInputChange,
        handleSubmit,
        errors,
        onResetForm,
    };
};
