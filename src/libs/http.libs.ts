import axios, { AxiosInstance } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const http: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

http.interceptors.request.use(async (config) => {
  let decodedCookies = decodeURIComponent(document.cookie);
  decodedCookies = decodedCookies.split("=").pop() || "";
  const data = JSON.parse(decodedCookies || "{}");
  if (data?.token) {
    config.headers.Authorization = `Bearer ${data.token}`;
  }

  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.status);
  }
);
