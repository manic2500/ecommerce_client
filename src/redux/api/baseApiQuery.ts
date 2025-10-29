import { SERVER_URL } from "@/lib/constants";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// for Login, Register & Public routes
export const baseApiQuery = fetchBaseQuery({
    baseUrl: SERVER_URL,
    credentials: 'include',
    //mode: 'cors'
});



/* export const baseApiQuery = fetchBaseQuery({
    baseUrl: SERVER_URL,    
    prepareHeaders: (headers, { getState }) => {
        //const token = getState().auth.token; // Assuming you store the token in a Redux slice named 'auth'
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
}); */