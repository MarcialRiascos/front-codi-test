import { z } from 'zod';

const phoneValidation = z
    .string()
    .regex(/^\d*$/, "Solo se permiten números")
    .refine((val) => val === "" || (val.length >= 7 && val.length <= 10), {
        message: "El número debe tener entre 7 y 10 dígitos",
    });

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export const beneficiarioSchema = z.object({
    Contrato: z.string().trim().regex(/^\d+$/, "Solo se permiten números").min(1, "El campo no puede estar vacío"),
    Servicio: z.string().min(1, "Debes seleccionar un plan"),
    Nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    Apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    TipoDocumento_idTipoDocumento: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    NumeroDocumento: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    FechaNacimiento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha de nacimiento no es válida"),
    Telefono: phoneValidation,
    Celular: phoneValidation,
    TelefonoTres: phoneValidation,
    Correo: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    FechaInicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha de inicio de operación no es válida"),
    FechaFin: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha de inicio de operación no es válida").optional(),
    Departamento: z.string().min(1, "Debes seleccionar un departamento"),
    CodigoDaneDpmto: z.string().min(1, "No hay departamento seleccionado"),
    Municipio: z.string().min(1, "Debes seleccionar un municipio"),
    CodigoDaneMunicipio: z.string().min(1, "Debes seleccionar un código DANE"),
    ViaPrincipalClave: z.string().min(1, "Debes seleccionar una via principal"),
    ViaPrincipalValor: z.string().min(1, "Debes ingresar la via principal"),
    ViaSecundariaClave: z.string().min(1, "Debes seleccionar una via secundaria"),
    ViaSecundariaValor: z.string().min(1, "Debes ingresar el primer valor de la via secundaria"),
    ViaSecundariaValorDos: z.string().min(1, "Debes ingresar el segundo valor de la via secundaria"),
    TipoUnidadUnoClave: z.string().min(1, "Debes seleccionar un tipo de unidad"),
    TipoUnidadUnoValor: z.string().min(1, "Debes ingresar el valor de la unidad"),
    TipoUnidadDosClave: z.string().min(1, "Debes seleccionar un tipo de unidad 2"),
    TipoUnidadDosValor: z.string().min(1, "Debes ingresar el valor de la unidad 2"),
    Direccion: z.string().min(2, "Debes ingresar una dirección"),
    Barrio: z.string().min(2, "Debes ingresar una dirección"),
    Estrato_idEstrato: z.string().regex(/^\d{1}$/, "Número de estrato incorrecto"),
    Anexo: z.string().min(2, "Debes ingresar una dirección"),
    Estado_idEstado: z.string().min(1, "Debes seleccionar un estado"),
    Sexo_idSexo: z.string().min(1, "Debes seleccionar un sexo"),
}).refine(
    (data) => data.Telefono || data.Celular || data.TelefonoTres,
    { message: "Al menos un número de teléfono es obligatorio" }
);

export const beneficiaryDocumentSchema = z.object({
    contrato: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional(),
    }),
    copia_cc: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    copia_ds: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    foto_fp: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    velocidad_internet: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    cpe: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    recibo: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            ).optional()
    }),
    info_adicional: z.string().optional(),
})

export const uploadDocumentsSchema = z.object({
    documents: z.array(
        z.object({
            file: z
                .any()
                .superRefine((file, ctx) => {
                    // Validar que sea un archivo
                    if (!(file instanceof File)) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: "No hay archivo seleccionado.",
                        });
                        return;
                    }
                    // Validar tipo de archivo
                    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message:
                                "Tipos de archivos permitidos: PNG, JPG, JPEG, PDF, DOC, DOCX",
                        });
                    }
                    // Validar tamaño de archivo
                    if (file.size > 1024 * 1024 * 5) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: "El archivo debe ser menor a 5MB.",
                        });
                    }
                }),
            NombreDocumento: z
                .string()
                .trim()
                .min(1, 'El nombre del archivo es obligatorio'),
            TipoDocumento: z
                .string()
                .trim()
                .min(1, 'El nombre del archivo es obligatorio'),
        })
    )
})

export const adminSchema = z.object({
    Nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    Apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    TipoDocumento_idTipoDocumento: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    NumeroDocumento: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    Correo: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    Telefono: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    Password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    Estado_idEstado: z.string().min(1, "Debes seleccionar un estado"),
    Rol_idRol: z.string().min(1, "Debes seleccionar un rol"),
    Sexo_idSexo: z.string().min(1, "Debes seleccionar un sexo"),
})
export const changePasswordSchema = z.object({
    oldPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    newPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    confirmNewPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
})


export type AdminSchema = z.infer<typeof adminSchema>;
export type BeneficiarioSchema = z.infer<typeof beneficiarioSchema>;
export type BeneficiaryDocumentSchema = z.infer<typeof beneficiaryDocumentSchema>;
export type UploadDocumentsSchema = z.infer<typeof uploadDocumentsSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
