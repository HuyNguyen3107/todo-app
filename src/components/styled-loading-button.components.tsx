import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: 700,
  fontSize: 18,
  padding: theme.spacing(1.5, 0),
  borderRadius: 12,
  boxShadow: "0 4px 16px 0 #6366f140",
  transition: "all 0.2s",
  ":hover": {
    background: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
    boxShadow: "0 8px 32px 0 #6366f180",
    transform: "translateY(-2px) scale(1.03)",
  },
}));

export default StyledLoadingButton;
