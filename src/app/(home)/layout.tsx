import ResponsiveAppBar from "@/components/header.components";
import Toast from "@/components/toast.components";
import QueryProvider from "@/libs/query-provider.libs";
import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Task",
  description: "Layout for home pages",
};

function HomeLayout({ children }: Props) {
  return (
    <div>
      <QueryProvider>
        <ResponsiveAppBar />
        {children}
        <Toast />
      </QueryProvider>
    </div>
  );
}

export default HomeLayout;
