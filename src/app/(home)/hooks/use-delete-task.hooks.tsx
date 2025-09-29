import { useForm } from "react-hook-form";
import { useDeleteTaskMutation } from "../mutation/task-delete.mutation";
import { useState } from "react";

export const useDeleteTaskHook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState<number>(0);
  const { mutateAsync, isPending } = useDeleteTaskMutation();

  const { handleSubmit } = useForm();

  const onSubmit = (taskId: number) => {
    handleSubmit(async () => {
      await mutateAsync({
        taskId,
      });
      handleClose();
    })();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    onSubmit,
    isPending,
    isOpen,
    handleOpen,
    handleClose,
    taskId,
    setTaskId,
  };
};
