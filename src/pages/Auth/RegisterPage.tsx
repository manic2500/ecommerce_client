import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RegisterSchema, type RegisterFormData } from '@/schemas/auth.schema';
import { Link } from 'react-router-dom';

export default function RegisterPage() {

    // 2. Set up React Hook Form
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = (data: RegisterFormData) => {
        console.log('Form Submitted:', data);
    };

    return (
        <>
            {/* Page-specific title */}
            <h1 className="text-2xl font-bold text-center">Register</h1>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" {...register('username')} />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
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

                <Button type="submit" disabled={isSubmitting}>
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