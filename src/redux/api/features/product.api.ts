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
      query: (queryParams) => {
        const cleanedParams = Object.fromEntries(
          Object.entries(queryParams).filter(([_, value]) => value != null),
        );

        return {
          url: `/product`,
          params: cleanedParams,
        };
      },
      providesTags: ['product'],
    }),
    showProduct: builder.query({
      query: (productId) => `/product/${productId}`,
      providesTags: ['product']
    })
  }),
});

export const { useStoreProductMutation, useProductListQuery, useShowProductQuery } = productApi;
