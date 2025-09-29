import { API_PATHS } from "@/constants/api-path.constants";
import { httpServer } from "@/libs/server-http.libs";
import type {
  RefreshDataRequest,
  RefreshDataResponse,
} from "../types/refresh.types";

export const refresh = async (
  data: RefreshDataRequest
): Promise<RefreshDataResponse> => {
  const response = await httpServer.post<RefreshDataResponse>(
    API_PATHS.REFRESH_TOKEN,
    data
  );
  return response.data;
};
