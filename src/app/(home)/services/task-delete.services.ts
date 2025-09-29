import { API_PATHS } from "@/constants/api-path.constants";
import { http } from "@/libs/http.libs";

type DeleteTaskParams = {
  taskId: number;
};

export const deleteTask = async (params: DeleteTaskParams) => {
  const { taskId } = params;
  const response = await http.delete(`${API_PATHS.TASKS}/${taskId}`);
  return response.data;
};
