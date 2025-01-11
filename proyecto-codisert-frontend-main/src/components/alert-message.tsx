import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
} from './ui/alert-dialog';
import { Button } from './ui/button';

interface AlertMessageProps {
    dialog: {
        isOpen: boolean
        type: 'success' | 'error'
        title: string
        message: string
    }
    setDialog: React.Dispatch<React.SetStateAction<{
        isOpen: boolean
        type: 'success' | 'error'
        title: string
        message: string
    }>>
}

const AlertMessage = ({ dialog, setDialog }: AlertMessageProps) => {
    return (
        <AlertDialog open={dialog.isOpen} onOpenChange={(isOpen) => setDialog({ ...dialog, isOpen })}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {dialog.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>{dialog.message}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button onClick={() => setDialog({ ...dialog, isOpen: false })}>Aceptar</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertMessage


