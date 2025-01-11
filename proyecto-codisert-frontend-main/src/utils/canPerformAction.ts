export const canPerformAction = (action: "edit" | "delete" | "view", role: string) => {
    const permissions = {
        edit: ["admin_super", "admin_registrador"],
        delete: ["admin_super"],
        view: ["admin_super", "admin_registrador", "admin_lector"],
    };

    return permissions[action]?.includes(role);
};