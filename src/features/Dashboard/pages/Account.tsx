import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import { Input } from "../../../components/ui/input"
import DashboardLayout from '../layouts/DashboardLayout'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { ChangePasswordSchema, changePasswordSchema } from '../schemas/registerUser';
import { useChangePassword } from '../../../store/changePasswordStore';
import { Eye, EyeOff } from 'lucide-react';

const Account = () => {
  const { changePassword, error } = useChangePassword();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const form = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",

    }
  });

  const toggleOldPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const { reset } = form;

  const onSubmit = async (data: ChangePasswordSchema) => {
    await changePassword(data)
    if (error) reset();
  }

  return (
    <DashboardLayout>
      <div className='flex justify-center'>
        <Card className='w-[720px] max-w-full'>
          <CardHeader>
            <CardTitle className='text-2xl'>Cambiar contraseña</CardTitle>
            <CardDescription>
              Introduce tu contraseña actual y la nueva contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='overflow-y-auto space-y-5'>
                <FormField
                  control={form.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña actual</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Contraseña actual"
                            className="pr-12 border-gray-500 dark:border-gray-800"
                          />
                          <Button
                            type="button"
                            onClick={toggleOldPasswordVisibility}
                            className="absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nueva contraseña</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={showNewPassword ? 'text' : 'password'}
                              placeholder="Nueva contraseña"
                              className="pr-12 border-gray-500 dark:border-gray-800"
                            />
                            <Button
                              type="button"
                              onClick={toggleNewPasswordVisibility}
                              className="absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent"
                              aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                            >
                              {showNewPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmNewPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar nueva contraseña</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={showConfirmNewPassword ? 'text' : 'password'}
                              placeholder="Confirmar nueva contraseña"
                              className="pr-12 border-gray-500 dark:border-gray-800"
                            />
                            <Button
                              type="button"
                              onClick={toggleConfirmNewPasswordVisibility}
                              className="absolute inset-y-0 right-1 flex items-center bg-transparent hover:bg-transparent"
                              aria-label={showConfirmNewPassword ? 'Hide password' : 'Show password'}
                            >
                              {showConfirmNewPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex justify-end items-center'>
                  <Button type="submit">Cambiar contraseña</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default Account