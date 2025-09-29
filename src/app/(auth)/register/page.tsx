import React from "react";
import { Typography, Container } from "@mui/material";
import { Card, CardContent, Box } from "@mui/material";
import RegisterForm from "./components/register-form.components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};

type Props = {};

function RegisterScreen({}: Props) {
  return (
    <Container>
      <Card elevation={4} sx={{ borderRadius: 3, width: "100%" }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Đăng ký tài khoản
            </Typography>
          </Box>
          <RegisterForm />
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterScreen;
