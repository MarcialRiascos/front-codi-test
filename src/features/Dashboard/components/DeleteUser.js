import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "../../../components/ui/button";
import { showConfirmationModal } from "../../../utils/modal";
const DeleteUser = ({ idUser, icon, title, description, actionState }) => {
    const handleDeleteUser = async (id) => {
        const resp = await showConfirmationModal(title, description);
        if (resp)
            actionState(id);
        if (!resp)
            return;
    };
    return (_jsx(_Fragment, { children: _jsx(Button, { variant: "outline", className: "p-0 size-7 w-7 h-7", onClick: () => handleDeleteUser(idUser), children: icon }) }));
};
export default DeleteUser;
