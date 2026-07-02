import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ✅ Define types
export interface User {
  _id: string
  name: string
  email: string
}

export interface CreateUserRequest {
  email: string
  password: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    credentials: 'include', // for session/cookies
  }),
  tagTypes: ['User','equipment','product','blog','upload'],


  endpoints: (builder) => ({
    
    // GET Users
    getEquipments: builder.query<any,void>({
      query: () => '/equipment/all',
      providesTags: ['equipment'],
    }),

    // POST User
    login: builder.mutation<User, CreateUserRequest>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),


    // GET equipment
    deleteEquipments: builder.mutation<object, string | number>({
      // => `/equipment/delete/${id}`,
      query: (id) => ({
        url: `/equipment/delete/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['equipment'],
    }),


     // GET Users
     getProducts: builder.query<any,void>({
        query: () => '/products/all',
        providesTags: ['product'],
      }),

      getBlogs: builder.query<any,void>({
        query: () => '/blog/all',
        providesTags: ['blog'],
        transformResponse: (response: any ) => response.data,
      }),

      deleteBlog: builder.mutation<{ success: boolean; message: string },string> ({
      query: (id) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
      }),

      getBlogbyslug: builder.query<any,string>({
        query: (slug) => `/blog/slug/${slug}`,
        providesTags: ['blog'],
        transformResponse: (response: any ) => response.data,
      }),

      uploadimage: builder.mutation<{ success: boolean; message: string, imageUrls : string},{folder: string,data: FormData;}> ({
        query: ({ folder, data }) => ({
          url: `/upload/${folder}`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["upload"],
        }),

        createBlog: builder.mutation<any,object>({
          query: ( data ) => ({
            url: `/blog/add-blog`,
            method: "POST",
            body: data
          }),
          invalidatesTags: ["blog"],
          }),


    
  }),
})

// ✅ Export hooks
export const {
  useGetEquipmentsQuery,
  useLazyGetEquipmentsQuery,
  useLoginMutation,
  useDeleteEquipmentsMutation,
  useGetProductsQuery,
  useGetBlogsQuery,
  useDeleteBlogMutation,
  useGetBlogbyslugQuery,
  useUploadimageMutation,
  useCreateBlogMutation,
 
} = apiSlice