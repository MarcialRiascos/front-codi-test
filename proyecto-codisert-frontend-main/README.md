
# Proyecto Codisert

Este proyecto es una aplicación web desarrollada con React, TypeScript y Vite. La aplicación permite la gestión de usuarios, administradores y beneficiarios, así como la carga y visualización de documentos.

## Estructura del Proyecto


## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/juinerwd/proyecto-codisert-frontend.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd proyecto-codisert/proyecto-codisert-frontend
    ```
3. Instala las dependencias:
    ```sh
    pnpm install
    ```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila la aplicación para producción.
- `pnpm lint`: Ejecuta ESLint para encontrar y corregir problemas en el código.
- `pnpm preview`: Previsualiza la aplicación compilada.

## Configuración

### Variables de Entorno

Asegúrate de configurar las variables de entorno en el archivo [.env](http://_vscodecontentref_/17).

### Tailwind CSS

El proyecto utiliza Tailwind CSS para el diseño. La configuración se encuentra en el archivo [tailwind.config.js](http://_vscodecontentref_/18).

### ESLint

El proyecto está configurado para usar ESLint con TypeScript. La configuración se encuentra en el archivo [eslint.config.js](http://_vscodecontentref_/19).

## Estructura de Carpetas

- **src/components**: Componentes reutilizables de la UI.
- **src/features**: Funcionalidades específicas de la aplicación.
- **src/hooks**: Hooks personalizados.
- **src/lib**: Funciones y utilidades compartidas.
- **src/pages**: Páginas de la aplicación.
- **src/services**: Servicios para interactuar con APIs.
- **src/store**: Estado global de la aplicación utilizando Zustand.
- **src/styles**: Archivos de estilos.
- **src/types**: Definiciones de tipos TypeScript.
- **src/utils**: Utilidades y funciones auxiliares.

## Uso

### Gestión de Usuarios

La gestión de usuarios se realiza en la página [CreateUser](http://_vscodecontentref_/20) ubicada en [CreateUser.tsx](http://_vscodecontentref_/21). Aquí puedes crear, actualizar y eliminar usuarios.

### Gestión de Administradores

La gestión de administradores se realiza en la página [RegisterAdmin](http://_vscodecontentref_/22) ubicada en [RegisterAdmin.tsx](http://_vscodecontentref_/23). Aquí puedes registrar nuevos administradores.

### Carga de Documentos

La carga de documentos se realiza en el componente [UserDocuments](http://_vscodecontentref_/24) ubicado en [UserDocuments.tsx](http://_vscodecontentref_/25). Aquí puedes cargar y visualizar documentos de los usuarios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.