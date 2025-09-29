"use client";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "../services/task-create.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";
import { useToastStore } from "@/stores/toast.stores";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE_PATHS } from "@/constants/route-path.constants";

export const useCreateTaskMutation = () => {
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: [QUERY_KEYS.TASKS],
    mutationFn: createTask,
    onSuccess: () => {
      showToast("Task created successfully");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      router.push(ROUTE_PATHS.HOME);
    },
    onError: (error: string) => {
      showToast(error, "error");
    },
  });
};
