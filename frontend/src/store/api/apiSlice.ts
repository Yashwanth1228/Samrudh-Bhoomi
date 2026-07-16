import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ✅ Define types
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  isActive: boolean;
  avatar: {
    url: string;
    publicId: string;
  };
  createdAt: string;
  length: number;
}

export interface UpdateUserPayload {
  id: string;

  name: string;
  email: string;
  phone?: string;
  role: string;
  isActive: boolean;

  avatar?: {
    url: string;
    publicId: string;
  };

  password?: string;
}

export interface UploadedImage {
  url: string;
  publicId: string;
}

interface UploadResponse {
  success: boolean;
  message: string;
  imageUrls: UploadedImage[];
}
export interface CreateUserRequest {
  email: string
  password: string
}

export interface ProductInfo {
  _id: string;
  name: string;
  category: string;
  images?: string[];
  inventory?: {
    sku?: string;
    unit?: string;
  };
}

export interface InventoryItem {
  _id: string;
  productId: ProductInfo | null;
  quantity: number;
  minStockLevel: number;
  maxStockLevel: number;
  warehouseLocation?: string;
  supplierName?: string;
  supplierContact?: string;
  purchasePrice: number;
  sellingPrice: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  createdAt: string;
  updatedAt: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    credentials: 'include', // for session/cookies
  }),
  tagTypes: ['User','equipment','product','blog','upload','users','inquiries','inventory'],


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
        transformResponse: (response: any ) => response.data,
      }),

      // blogs routes
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

      uploadimage: builder.mutation< UploadResponse,{folder: string,data: FormData;}> ({
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

          updateBlog: builder.mutation({
            query: ({ id, ...body }) => ({
              url: `/blog/${id}`,
              method: "PUT",
              body,
            }),
            invalidatesTags: ["blog"],
          }),


          // users routes

          getUsers: builder.query<any, void>({
            query: () => "/auth/users",
            providesTags: ["users"],
            transformResponse: (response: any) => response.data,
          }),
          
          updateUserRole: builder.mutation<
            any,
            { userId: string; role: "admin" | "user" }
          >({
            query: ({ userId, role }) => ({
              url: `/auth/users/${userId}/role`,
              method: "PATCH",
              body: { role },
            }),
            invalidatesTags: ["users"],
          }),
          
          deleteUser: builder.mutation<any, string>({
            query: (userId) => ({
              url: `/auth/users/${userId}`,
              method: "DELETE",
            }),
            invalidatesTags: ["users"],
          }),

          getUserById: builder.query<User, string>({
            query: (id) => `/auth/users/${id}`,
            transformResponse: (response: any) => response.data,
            providesTags: ["users"],
          }),

          createUser: builder.mutation<any, any>({
            query: (body) => ({
              url: "/auth/register",
              method: "POST",
              body,
            }),
            invalidatesTags: ["users"],
          }),

          updateUser: builder.mutation<any, UpdateUserPayload>({
            query: ({ id, ...body }) => ({
              url: `/auth/users/${id}`,
              method: "PUT",
              body,
            }),
            invalidatesTags: ["users"],
          }),

        // Contact us page routes

        getInquiries: builder.query<any, void>({
          query: () => "/inquiries",
          providesTags: ["inquiries"],
          transformResponse: (response: any) => response.data,
        }),

        createInquiries: builder.mutation<any, any>({
          query: ( data) => ({
            url: "/inquiry",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["inquiries"],
        }),

        updateInquiry: builder.mutation<any, { id: string; status: string }>({
          query: ({ id, status }) => ({
            url: `/inquiry/${id}`,
            method: "PATCH",
            body: { status },
          }),
          invalidatesTags: ["inquiries"],
        }),

        // Inventory routes

        getInventories: builder.query<InventoryItem[], void>({
          query: () => "/inventory/all",
          transformResponse: (response: any) => response.data,
          providesTags: ["inventory"],
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
  useUpdateBlogMutation,
  useGetUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetInquiriesQuery,
  useCreateInquiriesMutation,
  useUpdateInquiryMutation,
  useGetInventoriesQuery,
 
} = apiSlice