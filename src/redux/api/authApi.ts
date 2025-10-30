import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApiQuery } from './baseApiQuery';
import type { LoginFormData, RegisterFormData } from '@/schemas/auth.schema';
import { type User, type LoginUserResponse } from '@/types/user';
import { type SuccessResponse } from "@/types/SuccessResponse";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseApiQuery,
    endpoints: (builder) => ({
        login: builder.mutation<SuccessResponse<LoginUserResponse>, LoginFormData>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: SuccessResponse<LoginUserResponse>) => {
                console.log(response.data);
                return response
            }
        }),
        register: builder.mutation<User, RegisterFormData>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/user/logout',
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