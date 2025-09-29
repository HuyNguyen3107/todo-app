import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type {
  UserUpdateFormInputs,
  UserUpdateResponse,
} from "../types/user-update.types";

export const updateUser = async (
  data: UserUpdateFormInputs
): Promise<UserUpdateResponse> => {
  const response = await http.patch<UserUpdateResponse>(
    API_PATHS.USER_INFO,
    data
  );
  return response.data;
};
