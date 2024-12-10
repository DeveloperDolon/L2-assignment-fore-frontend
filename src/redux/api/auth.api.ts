import { createApi } from "@reduxjs/toolkit/query/react";
import fetchBaseQuery from "./fetchBaseQuery";

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery,
  endpoints: () => ({}),
  tagTypes: ['user']
});

export default authApi;
