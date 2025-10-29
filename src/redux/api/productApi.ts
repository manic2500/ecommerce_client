import { createApi } from '@reduxjs/toolkit/query/react';
import type { Product } from '@/types/product';
import { baseApiQuery } from './baseApiQuery';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: baseApiQuery,
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products',
        }),
        getLatestProducts: builder.query<Product[], void>({
            query: () => '/products/latest',
        }),
    }),
});

// Export auto-generated hooks
export const { useGetProductsQuery, useGetLatestProductsQuery } = productApi;
