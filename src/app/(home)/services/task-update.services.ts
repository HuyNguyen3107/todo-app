import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type {
  UpdateTaskPayload,
  UpdateTaskResponse,
} from "../types/task-update.types";

type updateTaskParams = {
  taskId: number;
  payload: UpdateTaskPayload;
};

export const updateTask = async (
  params: updateTaskParams
): Promise<UpdateTaskResponse> => {
  const { data } = await http.patch<UpdateTaskResponse>(
    `${API_PATHS.TASKS}/${params.taskId}`,
    params.payload
  );
  return data;
};
