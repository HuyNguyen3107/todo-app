import MainCard from "@/components/main-card.components";
import UpdateUserForm from "./components/update-user-form.components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update User - Todo App",
  description: "Update your user information in the Todo App.",
};

function UpdateUserScreen() {
  return (
    <MainCard title="👤 Chỉnh Sửa Thông Tin">
      <UpdateUserForm />
    </MainCard>
  );
}

export default UpdateUserScreen;
