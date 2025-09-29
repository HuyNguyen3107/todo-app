import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type { GetTaskResponse } from "../types/task-get-one.types";

type getTaskParams = {
  taskId: number;
};

export const getTask = async (
  params: getTaskParams
): Promise<GetTaskResponse> => {
  const { data } = await http.get<GetTaskResponse>(
    `${API_PATHS.TASKS}/${params.taskId}`
  );
  return data;
};
