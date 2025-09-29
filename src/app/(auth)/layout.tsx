import Toast from "@/components/toast.components";
import QueryProvider from "@/libs/query-provider.libs";
import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Auth Layout",
  description: "Layout for authentication pages",
};

function AuthLayout({ children }: Props) {
  return (
    <div>
      <QueryProvider>
        {children}
        <Toast />
      </QueryProvider>
    </div>
  );
}

export default AuthLayout;
