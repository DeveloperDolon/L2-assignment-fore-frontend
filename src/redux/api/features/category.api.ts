import baseApi from '../baseApi';

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    categoryList: builder.query({
      query: () => '/category',
    }),
  }),
});

export const { useCategoryListQuery } = categoryApi;
