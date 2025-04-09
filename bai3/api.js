import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Tạo API với Redux Toolkit Query
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67bed4b9b2320ee050118a1f.mockapi.io' }), // Thay thế bằng URL API thật
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userData) => ({
                url: 'signup',  // Endpoint gửi dữ liệu
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

// Export mutation hook
export const { useSignupMutation } = userApi;
