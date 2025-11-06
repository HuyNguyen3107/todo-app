"use client";
import React from "react";
import { useRegisterHook } from "../hooks/use-register.hooks";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import FormInput from "@/components/form-input.components";
import { useRouter } from "next/navigation";

type Props = Record<string, never>;

function RegisterForm({}: Props) {
  const router = useRouter();
  const { control, rules, onSubmit, formState, isPending } =
    useRegisterHook(router);
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
      <Box mb={2}>
        <FormInput
          name="confirmPassword"
          control={control}
          type="password"
          label="Confirm Password"
          rule={rules.confirmPassword}
          required
        />
      </Box>
      <Box mb={2}>
        <FormInput name="firstName" control={control} label="First Name" />
      </Box>
      <Box mb={2}>
        <FormInput
          name="lastName"
          control={control}
          label="Last Name"
          rule={rules.lastName}
          required
        />
      </Box>
      <LoadingButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{
          mt: 2,
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
        }}
        disabled={!formState.isValid}
        loading={isPending}
      >
        Đăng ký
      </LoadingButton>
    </Box>
  );
}

export default RegisterForm;
