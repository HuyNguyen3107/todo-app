"use client";
import MainCard from "@/components/main-card.components";
import { useCreateTaskHook } from "../../hooks/use-create-task.hooks";
import TaskForm from "../../components/task-form.components";

function CreateTaskScreen() {
  const { control, rules, onSubmit, isPending } = useCreateTaskHook();

  return (
    <MainCard title="Create New Task">
      <TaskForm
        control={control}
        rules={rules}
        onSubmit={onSubmit}
        isPending={isPending}
        submitLabel="Create Task"
        isEdit={false}
      />
    </MainCard>
  );
}

export default CreateTaskScreen;
