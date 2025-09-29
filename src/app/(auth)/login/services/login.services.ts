import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type { LoginFormInputs, LoginResponse } from "../types/login.types";

export const login = async (data: LoginFormInputs): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>(API_PATHS.LOGIN, data);
  return response.data;
};
