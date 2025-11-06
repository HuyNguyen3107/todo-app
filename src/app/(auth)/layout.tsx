import Toast from "@/components/toast.components";
import QueryProvider from "@/libs/query-provider.libs";
import { Metadata } from "next";
import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Auth Layout",
  description: "Layout for authentication pages",
};

function AuthLayout({ children }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <QueryProvider>
        {children}
        <Toast />
      </QueryProvider>
    </Box>
  );
}

export default AuthLayout;
