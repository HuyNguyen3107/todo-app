import React from "react";
import { Typography, Container } from "@mui/material";
import { Card, CardContent, Box } from "@mui/material";
import RegisterForm from "./components/register-form.components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};

type Props = Record<string, never>;

function RegisterScreen({}: Props) {
  return (
    <Container maxWidth="sm">
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          width: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.35)",
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
              }}
            >
              <Typography variant="h3" color="white" fontWeight={700}>
                ✨
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Đăng ký tài khoản
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tạo tài khoản mới để bắt đầu sử dụng
            </Typography>
          </Box>
          <RegisterForm />
          <Box mt={3} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Đã có tài khoản?{" "}
              <Link
                href="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Đăng nhập
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterScreen;
