"use client";
import { useUpdateTaskHook } from "../../../hooks/use-update-task.hooks";
import MainCard from "@/components/main-card.components";
import TaskForm from "../../../components/task-form.components";

function UpdateTaskScreen() {
  const { rules, onSubmit, control, isPending } = useUpdateTaskHook();
  return (
    <MainCard title="✏️ Cập Nhật Công Việc">
      <TaskForm
        control={control}
        rules={rules}
        onSubmit={onSubmit}
        isPending={isPending}
        submitLabel="💾 Cập Nhật"
        isEdit={true}
      />
    </MainCard>
  );
}

export default UpdateTaskScreen;
