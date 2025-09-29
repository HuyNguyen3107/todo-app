import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-key.constants";
import { deleteTask } from "../services/task-delete.services";
import { useToastStore } from "@/stores/toast.stores";

export const useDeleteTaskMutation = () => {
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_TASK],
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      showToast("Task deleted successfully");
    },
    onError: (error: string) => {
      showToast(error, "error");
    },
  });
};
