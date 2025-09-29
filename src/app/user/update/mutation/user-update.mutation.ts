import { useToastStore } from "@/stores/toast.stores";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services/user-update.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";
import { useLogout } from "../../../(auth)/logout/hooks/use-logout.hooks";

export const useUpdateUserMutation = () => {
  const { showToast } = useToastStore();
  const { logout } = useLogout();
  return useMutation({
    mutationKey: [QUERY_KEYS.USER],
    mutationFn: updateUser,
    onSuccess: () => {
      showToast("User information updated successfully");
      logout();
    },
    onError: (error: string) => {
      showToast(error);
    },
  });
};
