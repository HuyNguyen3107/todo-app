"use client";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FormInput from "../../../../components/form-input.components";
import { useUserUpdateHook } from "../hooks/use-user-update.hooks";
import UserFormSkeleton from "../components/user-form-skeleton.components";
import { LoadingButton } from "@mui/lab";

function UpdateUserForm() {
  const { control, rules, user, formState, onSubmit, isPending } =
    useUserUpdateHook();
  if (!user) {
    return <UserFormSkeleton />;
  }
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormInput
            name="firstName"
            control={control}
            label="Tên"
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <FormInput
            name="lastName"
            control={control}
            label="Họ"
            fullWidth
            rule={rules.lastName}
            required
          />
        </Grid>
        <Grid size={12}>
          <FormInput
            name="password"
            control={control}
            label="Mật khẩu mới (tối thiểu 6 ký tự)"
            type="password"
            fullWidth
            rule={rules.password}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" color="text.secondary">
            Ngày tạo:
            <b>
              {user && user.createdAt
                ? ` ${new Date(user.createdAt).toLocaleString()}`
                : ""}
            </b>
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" color="text.secondary">
            Cập nhật lần cuối:
            <b>
              {user && user.updatedAt
                ? ` ${new Date(user.updatedAt).toLocaleString()}`
                : ""}
            </b>
          </Typography>
        </Grid>
        <Grid size={12}>
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            loading={isPending}
            disabled={!formState.isValid || !formState.isDirty}
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
              "&:disabled": {
                background: "#ccc",
              },
            }}
          >
            💾 Cập Nhật
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdateUserForm;
