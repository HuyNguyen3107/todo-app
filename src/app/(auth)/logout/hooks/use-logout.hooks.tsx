import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";
import { clearAuthCookies } from "../action";
export const useLogout = () => {
  const router = useRouter();
  const logout = async () => {
    await clearAuthCookies();
    router.push(ROUTE_PATHS.LOGIN);
  };
  return { logout };
};
