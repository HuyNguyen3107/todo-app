import { useMutation } from "@tanstack/react-query";
import { updateTask } from "../services/task-update.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";
import { useToastStore } from "@/stores/toast.stores";
import { useQueryClient } from "@tanstack/react-query";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";

export const useUpdateTaskMutation = () => {
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_TASK],
    mutationFn: updateTask,
    onSuccess: () => {
      showToast("Task updated successfully");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      router.push(ROUTE_PATHS.HOME);
    },
    onError: (error: string) => {
      showToast(error, "error");
    },
  });
};
