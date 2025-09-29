import { useForm } from "react-hook-form";
import type { LoginFormInputs } from "../types/login.types";
import { useLoginMutation } from "../login.mutation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import RULES from "../constants/rules.constants";

export function useLoginHook(router: AppRouterInstance) {
  const loginMutation = useLoginMutation(router);
  const method = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const rules = RULES;
  const onSubmit = method.handleSubmit((data: LoginFormInputs) => {
    loginMutation.mutate(data);
  });

  return {
    ...method,
    rules,
    onSubmit,
    isPending: loginMutation.isPending,
  };
}
