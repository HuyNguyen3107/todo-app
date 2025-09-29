import type {
  RegisterFormInputs,
  RegisterResponse,
} from "../types/register.types";
import { http } from "../../../../libs/http.libs";
import { API_PATHS } from "../../../../constants/api-path.constants";

const register = async (
  data: RegisterFormInputs
): Promise<RegisterResponse> => {
  const response = await http.post<RegisterResponse>(API_PATHS.REGISTER, data);
  return response.data;
};

export default register;
