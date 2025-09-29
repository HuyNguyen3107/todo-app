import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../services/user-get-info.services";
import { QUERY_KEYS } from "@/constants/query-key.constants";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: getUserInfo,
  });
};
