import ResponsiveAppBar from "@/components/header.components";
import Toast from "@/components/toast.components";
import QueryProvider from "@/libs/query-provider.libs";
import { Metadata } from "next";
import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Task",
  description: "Layout for home pages",
};

function HomeLayout({ children }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <QueryProvider>
        <ResponsiveAppBar />
        <Box sx={{ pt: 10 }}>{children}</Box>
        <Toast />
      </QueryProvider>
    </Box>
  );
}

export default HomeLayout;
