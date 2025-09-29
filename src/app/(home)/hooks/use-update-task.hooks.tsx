"use client";
import { useForm } from "react-hook-form";
import type { UpdateTaskPayload } from "../types/task-update.types";
import { updateTaskRules } from "../constants/task-update.constants";
import { useUpdateTaskMutation } from "../mutation/task-update.mutation";
import { useGetTaskQuery } from "../query/task-get-one.query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const useUpdateTaskHook = () => {
  const { id: taskIdParam } = useParams();
  const taskId = Number(taskIdParam);
  const { data: task } = useGetTaskQuery({
    taskId,
  });
  const { mutateAsync, isPending } = useUpdateTaskMutation();
  const rules = updateTaskRules;
  const { control, handleSubmit, setValue } = useForm<UpdateTaskPayload>({
    mode: "onChange",
    defaultValues: {
      name: "",
      dueDate: "",
      status: 0,
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync({ taskId, payload: data });
  });
  useEffect(() => {
    if (task) {
      console.log("Task data:", task);
      setValue("name", task.name);
      setValue("dueDate", task.dueDate);
      setValue("status", task.status);
    }
  }, [task, setValue]);
  return {
    rules,
    onSubmit,
    control,
    isPending,
  };
};
