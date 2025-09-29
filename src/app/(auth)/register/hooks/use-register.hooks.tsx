import { useForm } from "react-hook-form";
import type { RegisterFormInputs } from "../types/register.types";
import useRegisterMutation from "../register.mutation";
import { RULES } from "../constants/rules.constants";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useRegisterHook(router: AppRouterInstance) {
  const registerMutation = useRegisterMutation(router);
  const method = useForm<RegisterFormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = method.handleSubmit(async (data: RegisterFormInputs) => {
    await registerMutation.mutateAsync(data);
  });

  const rules = RULES;

  return {
    ...method,
    rules,
    onSubmit,
    isPending: registerMutation.isPending,
  };
}
