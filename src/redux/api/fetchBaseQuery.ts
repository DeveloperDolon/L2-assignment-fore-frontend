import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export default fetchBaseQuery({
  baseUrl: window.__ENV__?.API_URL,
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});
