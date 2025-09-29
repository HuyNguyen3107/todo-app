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
            label="First Name"
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <FormInput
            name="lastName"
            control={control}
            label="Last Name"
            fullWidth
            rule={rules.lastName}
            required
          />
        </Grid>
        <Grid size={12}>
          <FormInput
            name="password"
            control={control}
            label="New Password (at least 6 characters)"
            type="password"
            fullWidth
            rule={rules.password}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" color="text.secondary">
            Created At:
            <b>
              {user && user.createdAt
                ? new Date(user.createdAt).toLocaleString()
                : ""}
            </b>
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" color="text.secondary">
            Last Updated:
            <b>
              {user && user.updatedAt
                ? new Date(user.updatedAt).toLocaleString()
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
          >
            Update
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdateUserForm;
