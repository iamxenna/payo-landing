import { default as axiosLib } from "axios";

export const axios = axiosLib.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST || "",
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => response,
  (reject) => {
    if (!reject.response) {
      return Promise.reject(reject);
    }
    return Promise.reject(reject.response);
  },
);
