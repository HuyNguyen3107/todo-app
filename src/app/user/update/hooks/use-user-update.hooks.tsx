"use client";
import { useForm } from "react-hook-form";
import type { UserUpdateFormInputs } from "../types/user-update.types";
import { useUpdateUserMutation } from "../mutation/user-update.mutation";
import { useGetUserQuery } from "../query/user-get-info.query";
import { userFormRules } from "../constants/user-form-rules.constants";
import { useEffect } from "react";

export function useUserUpdateHook() {
  const { mutateAsync, isPending } = useUpdateUserMutation();
  const { data: user } = useGetUserQuery();
  const { formState, control, handleSubmit, setValue } =
    useForm<UserUpdateFormInputs>({
      mode: "onChange",
      defaultValues: {
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        password: "",
      },
    });
  const rules = userFormRules;
  const onSubmit = handleSubmit(async (data: UserUpdateFormInputs) => {
    await mutateAsync(data);
  });
  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
    }
  }, [user, setValue]);
  return {
    formState,
    control,
    rules,
    user,
    onSubmit,
    isPending,
  };
}
