import { Box, Pagination } from "@mui/material";
import type { PaginationProps } from "@mui/material";

type AppPaginationProps = PaginationProps & {
  total: number;
  pagination: { page: number; perPage: number };
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const AppPagination: React.FC<AppPaginationProps> = ({
  total,
  pagination,
  handlePageChange,
  ...paginationProps
}) => {
  const totalPage = Math.ceil(total / pagination.perPage);

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      {totalPage > 1 && (
        <Pagination
          count={totalPage}
          page={pagination.page}
          onChange={handlePageChange}
          {...paginationProps}
        />
      )}
    </Box>
  );
};

export default AppPagination;
