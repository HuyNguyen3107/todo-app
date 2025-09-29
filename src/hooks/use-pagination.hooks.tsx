import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export function usePaginationHook(defaultPage = 1, defaultPerPage = 10) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [total, setTotal] = useState(0);

  const page = Number(searchParams.get("page")) || defaultPage;
  const perPage = Number(searchParams.get("perPage")) || defaultPerPage;

  const handlePageChange = (_: any, newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    params.set("perPage", perPage.toString());
    router.push(`?${params.toString()}`);
  };
  return {
    pagination: { page, perPage },
    total,
    setTotal,
    handlePageChange,
  };
}
