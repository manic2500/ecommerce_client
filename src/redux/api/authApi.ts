import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApiQuery } from './baseApiQuery';
import type { LoginFormData, RegisterFormData } from '@/schemas/auth.schema';
import { type User, type LoginResponse } from '@/types/user';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseApiQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginFormData>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<User, RegisterFormData>({
            query: (user) => ({
                url: '/auth/register',
                method: 'POST',
                body: user
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;



// endpoints-(builder)=>login: builder.mutation=>query:(body)=>({})

/* 
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (body)=>({
                url,
                method,
                body
            })
        })
    })

*/