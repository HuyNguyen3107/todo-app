"use client";
import MainCard from "@/components/main-card.components";
import { useCreateTaskHook } from "../../hooks/use-create-task.hooks";
import TaskForm from "../../components/task-form.components";

function CreateTaskScreen() {
  const { control, rules, onSubmit, isPending } = useCreateTaskHook();

  return (
    <MainCard title="📝 Tạo Công Việc Mới">
      <TaskForm
        control={control}
        rules={rules}
        onSubmit={onSubmit}
        isPending={isPending}
        submitLabel="✨ Tạo Mới"
        isEdit={false}
      />
    </MainCard>
  );
}

export default CreateTaskScreen;
