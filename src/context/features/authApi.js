import { baseApi } from "../baseApi/BaseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "api/v1/auth/sign-up",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "api/v1/auth/signin",
                method: "POST",
                body: data
            })
        })
    })
})
export const { useRegisterMutation, useLoginMutation } = authApi;