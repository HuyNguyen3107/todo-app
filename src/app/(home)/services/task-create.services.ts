import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";
import type {
  CreateTaskPayload,
  CreateTaskResponse,
} from "../types/task-create.types";

export const createTask = async (
  payload: CreateTaskPayload
): Promise<CreateTaskResponse> => {
  const response = await http.post(API_PATHS.TASKS, payload);
  return response.data;
};
