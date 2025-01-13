import { useDepartmentStore } from "../store/departmentStore";


// interface Department {
//     value: string;
//     label: string;
// }


export const getDaneDepartment = (identificador: string|number) => {
    const departments = useDepartmentStore.getState().departments;
    
    const namedepartment = departments.filter((department) => (department.value === identificador || department.label === identificador))[0];

    console.log(namedepartment);
    
    const data = {
        name: namedepartment.label,
        id: namedepartment.value,
    };    
    
    return data;
}