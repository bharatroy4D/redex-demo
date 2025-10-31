import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./baseApi/BaseApi"
import authReducer from "./features/AuthSlice.jsx"

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(baseApi.middleware)
})