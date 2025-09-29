"use client";
import { useUpdateTaskHook } from "../../../hooks/use-update-task.hooks";
import MainCard from "@/components/main-card.components";
import TaskForm from "../../../components/task-form.components";

function UpdateTaskScreen() {
  const { rules, onSubmit, control, isPending } = useUpdateTaskHook();
  return (
    <MainCard title="Update Task">
      <TaskForm
        control={control}
        rules={rules}
        onSubmit={onSubmit}
        isPending={isPending}
        submitLabel="Update Task"
        isEdit={true}
      />
    </MainCard>
  );
}

export default UpdateTaskScreen;
