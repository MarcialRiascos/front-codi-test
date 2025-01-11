import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";

interface MessageDialogProps {
    isOpen?: boolean;
    // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: string;
}

const MessageDialog:React.FC<MessageDialogProps> = ({ isOpen, title, description }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

    return (
        <Dialog open={isDialogOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setIsDialogOpen(false)} variant="outline">
                        Aceptar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MessageDialog;