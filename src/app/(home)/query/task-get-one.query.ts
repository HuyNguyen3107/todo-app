import { useQuery } from "@tanstack/react-query";
import { getTask } from "../services/task-get-one.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";

type GetTaskParams = {
  taskId: number;
};

export const useGetTaskQuery = (params: GetTaskParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASK, params.taskId],
    queryFn: () => getTask({ taskId: params.taskId }),
    select: (data) => data,
  });
};
