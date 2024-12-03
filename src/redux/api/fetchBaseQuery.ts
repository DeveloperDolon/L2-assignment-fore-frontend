import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export default fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL + "/api/v1",
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});
