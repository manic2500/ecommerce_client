/* import { SERVER_URL } from "@/lib/constants";
import type { LoginFormData } from "@/schemas/auth.schema";
import type { LoginResponse } from "@/types/user";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginFormData>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        })
    })
})

export const { useLoginMutation } = userApi;
 */