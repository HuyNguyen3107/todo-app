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
  borderRadius: 8,
  textTransform: "none",
  boxShadow: "0 2px 8px #6366f120",
  marginBottom: 16,
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
    <MainCard title="Task List">
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => router.push(ROUTE_PATHS.TASK_CREATE)}
      >
        Add
      </StyledButton>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 300, mb: 2, maxWidth: "100%", overflowX: "auto" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
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
                  <Typography color="text.secondary">
                    No tasks found.
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
