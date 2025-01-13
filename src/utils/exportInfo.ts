import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { BeneficiaryData } from "../features/Dashboard/types";

export const generateUserExcel = (users: BeneficiaryData[]) => {
    // 1. Crear los datos en formato de matriz de objetos
    const data = users.map((user) => ({
        "Nombre": user.Nombre,
        "Apellido": user.Apellido,
        "Tipo Documento": user.TipoDocumento.nombre,
        "Número Documento": user.NumeroDocumento,
        "Email": user.Correo,
        "Teléfono": user.Telefono,
        "Departamento": user.Departamento,
        "Municipio": user.Municipio,
        "Via principal": user.ViaPrincipalClave,
        "Campo via principal": user.ViaPrincipalValor,
        "Via secundaria": user.ViaSecundariaClave,
        "Campo via secundaria": user.ViaSecundariaValor,
        "Campo via secundaria 2": user.ViaSecundariaValorDos,
        "Tipo unidad 1": user.TipoUnidadUnoClave,
        "Campo tipo unidad 1": user.TipoUnidadUnoValor,
        "Tipo unidad 2": user.TipoUnidadDosClave,
        "Campo tipo unidad 2": user.TipoUnidadDosValor,
        "Barrio": user.Barrio,
        "Direccion": user.Direccion,
        "Estrato": user.Estrato.nombre,
    }));

    // 2. Convertir los datos a una hoja de trabajo
    const worksheet = XLSX.utils.json_to_sheet(data);

    // 3. Crear un libro de trabajo y agregar la hoja
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    // 4. Generar el archivo Excel como blob
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    // 5. Guardar el archivo usando file-saver
    saveAs(blob, "datos-beneficiarios.xlsx");
};