"use client";
import LoadingButton from "@mui/lab/LoadingButton";
import FormInput from "@/components/form-input.components";
import { Box } from "@mui/material";
import { useLoginHook } from "../hooks/use-login.hooks";
import { useRouter } from "next/navigation";
type Props = {};

function LoginFormComponents({}: Props) {
  const router = useRouter();
  const { control, onSubmit, rules, formState, isPending } =
    useLoginHook(router);
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Box mb={2}>
        <FormInput
          name="email"
          control={control}
          label="Email"
          rule={rules.email}
          required
        />
      </Box>
      <Box mb={2}>
        <FormInput
          name="password"
          control={control}
          type="password"
          label="Password"
          rule={rules.password}
          required
        />
      </Box>
      <LoadingButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ mt: 1, fontWeight: 600 }}
        disabled={!formState.isValid}
        loading={isPending}
      >
        Đăng nhập
      </LoadingButton>
    </Box>
  );
}

export default LoginFormComponents;
