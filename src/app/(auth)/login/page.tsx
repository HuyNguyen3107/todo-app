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
                📝
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
              Đăng nhập
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục
            </Typography>
          </Box>
          <LoginFormComponents />
          <Box mt={3} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Chưa có tài khoản?{" "}
              <Link
                href="/register"
                style={{
                  textDecoration: "none",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Đăng ký ngay
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
export default LoginScreen;
