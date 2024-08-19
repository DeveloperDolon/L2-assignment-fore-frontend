import { createApi } from "@reduxjs/toolkit/query";
import fetchBaseQuery from "./fetchBaseQuery";

const authApi = createApi({
  baseQuery: fetchBaseQuery,
  endpoints: () => ({}),
});

export default authApi;
