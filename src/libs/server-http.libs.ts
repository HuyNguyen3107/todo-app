import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const httpServer: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

httpServer.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const authStorage = JSON.parse(
    cookieStore.get("auth-storage")?.value || "null"
  );

  if (authStorage?.token) {
    config.headers["Authorization"] = `Bearer ${authStorage.token}`;
  }

  return config;
});

httpServer.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.status);
  }
);
