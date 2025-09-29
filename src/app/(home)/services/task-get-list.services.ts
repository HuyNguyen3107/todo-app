import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type { GetTasksResponse } from "../types/task-get-list.types";

type GetTasksParams = {
  page: number;
  perPage: number;
};

export const getTasks = async ({
  page,
  perPage,
}: GetTasksParams): Promise<GetTasksResponse> => {
  const response = await http.get<GetTasksResponse>(API_PATHS.TASKS, {
    params: { page, perPage },
  });
  return response.data;
};
