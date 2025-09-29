import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/task-get-list.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";

export interface GetTasksParams {
  page: number;
  perPage: number;
}
export const useGetTasksQuery = (params: GetTasksParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, params.page, params.perPage],
    queryFn: () => getTasks(params),
    select: (response) => ({
      tasks: response.data,
      pagination: response.pagination,
    }),
  });
};
