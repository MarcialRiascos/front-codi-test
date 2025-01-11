'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { User, Mail, Phone, Smartphone, MapPin, Calendar, Contact, Info, MapPinned, MapPinHouse } from 'lucide-react'
import { BeneficiaryData } from "../types"
import { format } from "date-fns"

interface UserInfoModalProps {
    user: BeneficiaryData;
}

export function UserInfoModal({ user }: UserInfoModalProps) {
    const typeImage = ["jpg", "jpeg", "png"];

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='p-0 size-7 w-7 h-7'>
                        {<Info />}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] h-[70vh] max-h-[95vh] overflow-y-auto flex flex-col">
                    <DialogHeader className="h-fit">
                        <DialogTitle>Información Detallada del Usuario</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="personal" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="personal">Personal</TabsTrigger>
                            <TabsTrigger value="contact">Contacto</TabsTrigger>
                            <TabsTrigger value="documents">Documentos</TabsTrigger>
                        </TabsList>

                        <TabsContent value="personal">
                            <Card>
                                <CardContent className="space-y-4 p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Tipo de Documento</p>
                                            <p className="text-sm text-muted-foreground">{user.TipoDocumento.nombre}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Número de Documento</p>
                                            <p className="text-sm text-muted-foreground">{user.NumeroDocumento}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Nombres</p>
                                            <p className="text-sm text-muted-foreground">{user.Nombre}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Apellidos</p>
                                            <p className="text-sm text-muted-foreground">{user.Apellido}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Fecha de Nacimiento</p>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{format(new Date(user.FechaNacimiento), "dd/MM/yyyy")}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Género</p>
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Sexo.nombre}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="contact">
                            <Card>
                                <CardContent className="space-y-4 p-4">
                                    <div className="grid gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Email Personal</p>
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Correo}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {user.Telefono && <div className="space-y-1">
                                            <p className="text-sm font-medium">Teléfono 1</p>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Telefono}</p>
                                            </div>
                                        </div>}
                                        {user.Celular && <div className="space-y-1">
                                            <p className="text-sm font-medium">Teléfono 2</p>
                                            <div className="flex items-center gap-2">
                                                <Smartphone className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Celular}</p>
                                            </div>
                                        </div>}
                                        {user.TelefonoTres && <div className="space-y-1">
                                            <p className="text-sm font-medium">Teléfono 3</p>
                                            <div className="flex items-center gap-2">
                                                <Smartphone className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.TelefonoTres}</p>
                                            </div>
                                        </div>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Departamento</p>
                                            <div className="flex items-center gap-2">
                                                <MapPinned className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Departamento.replace(/-/gi, " ")}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Municipio</p>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.Municipio.replace(/-/gi, " ")}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Barrio</p>
                                            <div className="flex items-center gap-2">
                                                <MapPinHouse className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">
                                                    {/* {user.address.street}, {user.address.city}, {user.address.state}, {user.address.country} {user.address.zipCode} */}
                                                    <p className="text-sm text-muted-foreground">{user.Barrio}</p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Dirección</p>
                                            <div className="flex items-center gap-2">
                                                <MapPinHouse className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">
                                                    {/* {user.address.street}, {user.address.city}, {user.address.state}, {user.address.country} {user.address.zipCode} */}
                                                    <p className="text-sm text-muted-foreground">{user.Direccion}</p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="documents">
                            <Card>
                                <CardContent className="space-y-4 p-4">
                                    {(user.Documentos && user.Documentos.length > 0) ? (
                                        user.Documentos.map((document, i) => (
                                            <div key={i} className="space-y-1">
                                                <p className="text-sm font-medium">{document.TipoDocumento}</p>
                                                <div className="flex items-center gap-2">
                                                    {/* <File className="h-4 w-4 text-muted-foreground" /> */}
                                                    {typeImage.filter((img) => document.Url.toLowerCase().includes(img)).length > 0 ? (
                                                        <img
                                                            src={document.Url}
                                                            alt="Vista Previa"
                                                            className="max-w-full rounded"
                                                        />
                                                    ) : (
                                                        // <p>document.Url</p>
                                                        <iframe
                                                            src={document.Url}
                                                            className="w-full h-[80vh]"
                                                            title="Vista Previa PDF"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )
                                        )) : (
                                        <div className="space-y-1">
                                            <p className="text-sm text-muted-foreground">No hay documentos del beneficiario</p>
                                        </div>
                                    )}

                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </>
    )
}