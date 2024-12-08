import baseApi from '../baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    storeProduct: builder.mutation({
      query: (data) => {
        return {
          url: '/product',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['product'],
    }),
    productList: builder.query({
      query: ({ page, search }) => `/product?page=${page}&search=${search}`,
      providesTags: ['product'],
    }),
  }),
});

export const { useStoreProductMutation } = productApi;
