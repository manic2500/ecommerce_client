import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useLoginMutation } from '@/redux/api/authApi';
import { LoginSchema, type LoginFormData } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();

    const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation();

    // 2. Set up React Hook Form
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: 'mani@example.com', password: '123456' }
    });

    const onSubmit = async (data: LoginFormData) => {
        console.log('Form Submitted:', data);
        const response = await login(data).unwrap()
        console.log(response.user);
        navigate('/home')
    };

    console.log({ data, isLoading, isSuccess, isError });


    /* const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }).unwrap()
            console.log('✅ Login successful:', response)

            // Save token to localStorage for future authenticated requests
            localStorage.setItem('token', response.token)
            navigate('/home');

            // Optionally redirect user (using React Router, Next.js, etc.)
            // navigate('/dashboard')
        } catch (err) {
            console.error('❌ Login failed:', err)
        }        
    }; */

    /* try {
            const res = await axiosClient.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        } catch (err: any) {
            console.log(err);
        } */

    return (
        <>

            {/* Page-specific title */}
            <h1 className="text-2xl font-bold text-center">Login to your account</h1>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    Login
                </Button>
            </form>

            {/* Page-specific bottom link */}
            <p className="text-sm text-center text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </p>
            {/* <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form> */}
        </>
    );
}

export default LoginPage;


/* 

SARS
Store, Action, Reducer, Slice (name, initialState, reducers)
useDispatch
useSelector


*/