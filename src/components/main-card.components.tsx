"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface MainCardProps {
  children: React.ReactNode;
  title?: string;
}

const StyledBox = styled(Box)({
  paddingTop: "24px",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  width: "100%",
  maxWidth: "1200px",
  padding: "40px",
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 25px 70px rgba(0, 0, 0, 0.35)",
  },
});

const StyledTypography = styled(Typography)({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textShadow: "none",
});

const MainCard: React.FC<MainCardProps> = ({ children, title }) => (
  <StyledBox>
    <StyledPaper elevation={0}>
      {title && (
        <StyledTypography
          variant="h4"
          fontWeight={800}
          mb={3}
          align="center"
          letterSpacing={1}
        >
          {title}
        </StyledTypography>
      )}
      {children}
    </StyledPaper>
  </StyledBox>
);

export default MainCard;
