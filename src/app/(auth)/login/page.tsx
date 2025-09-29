import { Typography, Container } from "@mui/material";
import { Card, CardContent, Box } from "@mui/material";
import Link from "next/link";
import LoginFormComponents from "./components/login-form.components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page for users",
};

function LoginScreen() {
  return (
    <Container>
      <Card elevation={4} sx={{ borderRadius: 3, width: "100%" }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Đăng nhập
            </Typography>
          </Box>
          <LoginFormComponents />
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Chưa có tài khoản?{" "}
              <Link
                href="/register"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                Đăng ký
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
export default LoginScreen;
