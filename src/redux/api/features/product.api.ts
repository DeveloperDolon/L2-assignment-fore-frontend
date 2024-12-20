import baseApi from '../baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    storeProduct: builder.mutation({
      query: (data) => {
        return {
          url: '/product',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['product'],
    }),
    productList: builder.query({
      query: (queryParams) => ({
        url: `/product`,
        params: queryParams
      }),
      providesTags: ['product'],
    }),
  }),
});

export const { useStoreProductMutation, useProductListQuery } = productApi;
