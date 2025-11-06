"use client";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFetchTasksHook } from "../hooks/use-fetch-tasks.hooks";
import MainCard from "@/components/main-card.components";
import AppPagination from "@/components/app-pagination.components";
import TaskListSkeleton from "./task-list-skeleton.components";
import DeleteModal from "@/components/delete-modal.components";
import { useDeleteTaskHook } from "../hooks/use-delete-task.hooks";
import TaskItem from "./task-item.components";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";

const StyledButton = styled(Button)({
  fontWeight: 700,
  borderRadius: 12,
  textTransform: "none",
  fontSize: "1rem",
  padding: "12px 32px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
  marginBottom: 24,
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});

const StyledTableHead = styled(TableHead)({
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
  "& th": {
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "#667eea",
  },
});

export default function TaskListScreen() {
  const {
    tasks,
    total,
    getStatusInfo,
    isLoading,
    error,
    handlePageChange,
    pagination,
  } = useFetchTasksHook();
  const router = useRouter();

  const {
    isOpen,
    handleOpen,
    handleClose,
    onSubmit,
    isPending,
    taskId,
    setTaskId,
  } = useDeleteTaskHook();

  if (isLoading) {
    return <TaskListSkeleton />;
  }

  if (error) {
    return (
      <Typography color="error" align="center" mt={4}>
        An error occurred while loading tasks.
      </Typography>
    );
  }

  return (
    <MainCard title="📋 Danh Sách Công Việc">
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => router.push(ROUTE_PATHS.TASK_CREATE)}
      >
        ➕ Thêm Công Việc
      </StyledButton>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 400,
          mb: 2,
          maxWidth: "100%",
          overflowX: "auto",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <TableCell>Tên Công Việc</TableCell>
              <TableCell>Trạng Thái</TableCell>
              <TableCell>Hạn Hoàn Thành</TableCell>
              <TableCell>Ngày Tạo</TableCell>
              <TableCell align="center">Thao Tác</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  statusInfo={getStatusInfo(task.status)}
                  onEdit={() =>
                    router.push(
                      ROUTE_PATHS.TASK_UPDATE.replace(
                        ":taskId",
                        task.id.toString()
                      )
                    )
                  }
                  onDelete={() => {
                    setTaskId(+task.id);
                    handleOpen();
                  }}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary" py={3}>
                    Chưa có công việc nào. Hãy tạo công việc đầu tiên! 🚀
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {total > 1 && (
        <AppPagination
          total={total}
          pagination={pagination}
          handlePageChange={handlePageChange}
        />
      )}
      <DeleteModal
        open={isOpen}
        onClose={handleClose}
        onConfirm={onSubmit}
        loading={isPending}
        id={taskId}
      />
    </MainCard>
  );
}
