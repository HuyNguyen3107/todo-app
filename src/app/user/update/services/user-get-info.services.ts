import { API_PATHS } from "@/constants/api-path.constants";
import type { UserInfo } from "../types/user-get-info.types";
import { http } from "@/libs/http.libs";

export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await http.get<UserInfo>(API_PATHS.USER_INFO);
  console.log(response.data);

  return response.data;
};
