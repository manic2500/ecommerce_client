import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, refreshToken: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
            state.refreshToken = null;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
    },
});

export const { setToken, clearToken, setRefreshToken } = authSlice.actions;
export default authSlice.reducer;