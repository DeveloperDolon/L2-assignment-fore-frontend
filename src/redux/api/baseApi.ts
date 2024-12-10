
import { createApi } from '@reduxjs/toolkit/query/react';
import fetchBaseQuery from './fetchBaseQuery';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery,
  endpoints: () => ({}),
  tagTypes: ['product', 'category', 'order', 'user'],
});

export default baseApi;
