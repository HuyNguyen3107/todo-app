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
  paddingTop: "48px",
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  width: "100%",
  padding: "40px",
  borderRadius: "48px",
  backgroundColor: "#fff",
  boxShadow: "0 8px 32px 0 #6366f120",
});

const StyledTypography = styled(Typography)({
  textShadow: "0 2px 8px #bdbdbd33",
});

const MainCard: React.FC<MainCardProps> = ({ children, title }) => (
  <StyledBox>
    <StyledPaper elevation={8}>
      <StyledTypography
        variant="h4"
        fontWeight={800}
        mb={3}
        align="center"
        color="primary"
        letterSpacing={1.5}
      >
        {title}
      </StyledTypography>
      {children}
    </StyledPaper>
  </StyledBox>
);

export default MainCard;
