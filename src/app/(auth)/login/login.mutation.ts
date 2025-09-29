import { useMutation } from "@tanstack/react-query";
import { login } from "./services/login.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { getLoginErrorMessage } from "./utils/login-error.utils";
import { useToastStore } from "@/stores/toast.stores";
import { setAuthCookies } from "./action";
export const useLoginMutation = (router: AppRouterInstance) => {
  const { showToast } = useToastStore();
  return useMutation({
    mutationFn: login,
    mutationKey: [QUERY_KEYS.LOGIN],
    onSuccess: (data) => {
      setAuthCookies(data);
      router.push(ROUTE_PATHS.HOME);
    },
    onError: (error) => {
      const errorMessage = getLoginErrorMessage(+error);
      showToast(errorMessage, "error");
    },
  });
};
