"use client";
import React from "react";
import { useRegisterHook } from "../hooks/use-register.hooks";
import { Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import FormInput from "@/components/form-input.components";
import Link from "next/link";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";

type Props = {};

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
        sx={{ mt: 1, fontWeight: 600 }}
        disabled={!formState.isValid}
        loading={isPending}
      >
        Đăng ký
      </LoadingButton>
      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Đã có tài khoản?{" "}
          <Link
            href={ROUTE_PATHS.LOGIN}
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Đăng nhập
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default RegisterForm;
