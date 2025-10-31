import { baseApi } from "../baseApi/BaseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signup",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signin",
                method: "POST",
                body: data
            })
        })
    })
})
export const { useRegisterMutation, useLoginMutation } = authApi;