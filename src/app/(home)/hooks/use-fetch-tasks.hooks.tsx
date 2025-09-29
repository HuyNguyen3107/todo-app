"use client";
import { useGetTasksQuery } from "../query/task-get-list.query";
import { usePaginationHook } from "../../../hooks/use-pagination.hooks";
import { useEffect, useMemo } from "react";
import { TASK_STATUS } from "../constants/task-status.constants";
import { taskStatusEnum } from "../types/task-get-list.types";
import type {
  TaskStatusKey,
  TaskStatusInfo,
  MuiStatusColor,
} from "../types/task-get-list.types";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";

export function useFetchTasksHook() {
  const { pagination, total, setTotal, handlePageChange } = usePaginationHook();
  const { data, isLoading, error } = useGetTasksQuery({
    page: pagination.page,
    perPage: pagination.perPage,
  });
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setTotal(data.pagination.total);
      router.push(
        `${ROUTE_PATHS.HOME}?page=${pagination.page}&perPage=${pagination.perPage}`
      );
    }
  }, [data, setTotal]);

  const getStatusInfo = useMemo(() => {
    return (status: number): TaskStatusInfo => {
      const getStatusKey = (statusNum: number): TaskStatusKey => {
        const key = taskStatusEnum[statusNum];
        if (key === "TODO" || key === "IN_PROGRESS" || key === "DONE") {
          return key;
        }
        return "TODO";
      };

      const isMuiStatusColor = (color: string): color is MuiStatusColor => {
        return [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
          "default",
        ].includes(color);
      };

      const key = getStatusKey(status);

      return {
        color: isMuiStatusColor(TASK_STATUS.COLOR[key])
          ? TASK_STATUS.COLOR[key]
          : "default",
        label: TASK_STATUS.LABEL[key] || "",
        bgColor: TASK_STATUS.BG_COLOR[key] || "#f3f4f6",
        textColor: TASK_STATUS.TEXT_COLOR[key] || "#757575",
      };
    };
  }, []);

  return {
    tasks: data?.tasks,
    total,
    getStatusInfo,
    isLoading,
    error,
    handlePageChange,
    pagination,
  };
}
