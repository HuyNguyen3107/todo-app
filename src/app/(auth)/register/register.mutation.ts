import { QUERY_KEYS } from "@/constants/query-key.constants";
import register from "./services/register.services";
import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@/stores/toast.stores";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { getErrorMessage } from "./utils/register-error.utils";

const useRegisterMutation = (router: AppRouterInstance) => {
  const { showToast } = useToastStore();
  return useMutation({
    mutationFn: register,
    mutationKey: [QUERY_KEYS.REGISTER],
    onSuccess: (_data, variables) => {
      showToast("Registration successful");
      router.push(ROUTE_PATHS.LOGIN);
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(+error);
      showToast(errorMessage, "error");
    },
  });
};

export default useRegisterMutation;
