import baseApi from '../baseApi';

const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    brandList: builder.query({
      query: () => '/brand',
    }),
  }),
});

export const { useCategoryListQuery } = brandApi;
