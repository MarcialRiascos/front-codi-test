import { Button } from "../../../components/ui/button"
import { showConfirmationModal } from "../../../utils/modal";
interface Props {
    idUser: number | string;
    icon?: React.ReactNode
    title: string
    description: string
    actionState: (id: number | string) => void
    // children?: React.ReactNode
}

const DeleteUser = ({ idUser, icon, title, description, actionState }: Props) => {

    const handleDeleteUser = async(id: number | string) => {
        const resp = await showConfirmationModal(title,description)
        if (resp) actionState(id);
        if (!resp) return;
    }

    return (
        <>
            <Button
                variant="outline"
                className="p-0 size-7 w-7 h-7"
                onClick={() => handleDeleteUser(idUser)}
            >
                {icon}
            </Button>
        </>
    )
}

export default DeleteUser;
