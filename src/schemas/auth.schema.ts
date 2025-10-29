import { z } from 'zod';

// 1. Define Zod schema
export const RegisterSchema = z.object({
    username: z.string("User name is required").min(3, 'Username must be at least 3 characters'),
    email: z.email('Invalid email address'),
    password: z.string("Password is required").min(6, 'Password must be at least 6 characters'),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;


export const LoginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string("Password is required").min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
