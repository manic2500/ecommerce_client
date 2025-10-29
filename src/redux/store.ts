import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/productApi';
import { authApi } from './api/authApi';

export const store = configureStore({
    reducer: {
        //auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware()
            .concat(productApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
