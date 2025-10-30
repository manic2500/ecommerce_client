import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RegisterSchema, type RegisterFormData } from '@/schemas/auth.schema';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '@/redux/api/authApi';
import { handleFormError } from '@/lib/utils';

export default function RegisterPage() {

    const [signup, { isLoading }] = useRegisterMutation();

    // 2. Set up React Hook Form
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { name: "Manic", email: 'mani1@example.com', password: '123456' }
    });

    const onSubmit = async (data: RegisterFormData) => {
        console.log('Form Submitted:', data);
        try {
            const response = await signup(data).unwrap()
            console.log("✅ Register successful:", response);

        } catch (err: unknown) {
            // Handle server-side validation errors:            
            handleFormError<RegisterFormData>(err, setError, "root.serverError");
        }
    };

    return (
        <>
            {/* Page-specific title */}
            <h1 className="text-2xl font-bold text-center">Register</h1>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" {...register('name')} />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register('email')} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...register('password')} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>


                {errors.root?.serverError && (
                    <p style={{ color: "red" }}>{errors.root.serverError.message}</p>
                )}


                <Button type="submit" disabled={isSubmitting || isLoading}>
                    Register
                </Button>
            </form>

            {/* Page-specific bottom link */}
            <p className="text-sm text-center text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Log in
                </Link>
            </p>
        </>
    );
}