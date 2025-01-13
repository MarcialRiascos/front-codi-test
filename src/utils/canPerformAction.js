export const canPerformAction = (action, role) => {
    const permissions = {
        edit: ["admin_super", "admin_registrador"],
        delete: ["admin_super"],
        view: ["admin_super", "admin_registrador", "admin_lector"],
    };
    return permissions[action]?.includes(role);
};
