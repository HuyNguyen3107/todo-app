import { useForm } from "react-hook-form";
import type { CreateTaskPayload } from "../types/task-create.types";
import { createTaskRules } from "../constants/task-create.constants";
import { useCreateTaskMutation } from "../mutation/task-create.mutation";

export const useCreateTaskHook = () => {
  const { mutateAsync, isPending } = useCreateTaskMutation();
  const { control, formState, handleSubmit } = useForm<CreateTaskPayload>({
    mode: "onChange",
    defaultValues: {
      name: "",
      dueDate: "",
      status: 1,
    },
  });
  const rules = createTaskRules;

  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync(data);
  });
  return {
    control,
    formState,
    rules,
    onSubmit,
    isPending,
  };
};
