
export interface UserAdmin {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: 'admin_super' | 'admin_lector' | 'admin_registrador';
}

interface DocumentosType {
    idDocumentos: number | string;
    NombreDocumento: string;
    TipoDocumento: string;
    Url: string;
}

export interface AdminData {
    idAdministrador: number | string,
    Nombre: string,
    Apellido: string,
    TipoDocumento_idTipoDocumento: number | string,
    NumeroDocumento: string,
    Telefono: string,
    Correo: string,
    Estado_idEstado: number | string,
    Rol_idRol: number | string,
    Administrador_idAdministrador: number | string,
    Sexo_idSexo: number | string,
    Rol: {
        Rol: string
    },
    Estado: {
        Estado: string
    },
    TipoDocumento: {
        TipoDocumento: string
    },
    SexoCreado: {
        Sexo: string
    },
    AdministradorCreado: object | null
}

export interface LoginData {
    email: string;
    password: string;
}

export interface BeneficiaryData {
    idBeneficiario: number;
    Contrato: string;
    Servicio: string;
    Nombre: string;
    Apellido: string;
    TipoDocumento: {
        id: number | string;
        nombre: string;
    };
    NumeroDocumento: string;
    Telefono: string;
    Celular?: string;
    TelefonoTres?: string;
    Correo: string;
    Estrato: {
        id: number | string;
        nombre: string;
    };
    FechaNacimiento: string | Date;
    FechaInicio: string | Date;
    FechaFin: string | Date;
    CodigoDaneDpmto: string;
    CodigoDaneMunicipio: string;
    Departamento: string;
    Municipio: string;
    ViaPrincipalClave?: string;
    ViaPrincipalValor?: string;
    ViaSecundariaClave?: string;
    ViaSecundariaValor?: string;
    ViaSecundariaValorDos?: string;
    TipoUnidadUnoClave?: string;
    TipoUnidadUnoValor?: string;
    TipoUnidadDosClave?: string;
    TipoUnidadDosValor?: string;
    Direccion: string;
    Barrio: string;
    Anexo: string;
    Estado: {
        id: number | string;
        nombre: string;
    };
    Sexo: {
        id: number | string;
        nombre: string;
    };
    Administrador: {
        idAdministrador: number;
        Nombre: string;
        Apellido: string;
    };
    Documentos: DocumentosType[];
}


export interface BeneficiaryDocument {
    idDocumentos: number | string,
    NombreDocumento: string,
    TipoDocumento: string,
    Url: string,
    Beneficiario: {
        idBeneficiario: number | string,
        Nombre: string,
        Apellido: string
    },
    Administrador: {
        idAdministrador: number | string,
        Nombre: string,
        Apellido: string
    }
}

export interface FormStep {
    title: string
    description: string
    component: React.ComponentType
    fields: readonly string[]
}