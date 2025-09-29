import TaskListScreen from "@/app/(home)/components/task-list-screen.components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task List - Todo App",
  description: "Manage your tasks efficiently with the Todo App.",
};

export default function HomePage() {
  return <TaskListScreen />;
}
