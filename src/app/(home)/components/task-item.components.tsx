import { TableRow, TableCell, Button, Box } from "@mui/material";
import type { Task } from "../types/task-get-list.types";
import type { TaskStatusInfo } from "../types/task-get-list.types";

export interface TaskItemProps {
  task: Task;
  statusInfo: TaskStatusInfo;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  statusInfo,
  onEdit,
  onDelete,
}) => (
  <TableRow hover>
    <TableCell>{task.name}</TableCell>
    <TableCell>
      <Box
        component="span"
        sx={{
          px: 2,
          py: 0.5,
          borderRadius: 2,
          fontWeight: 600,
          fontSize: 13,
          backgroundColor: statusInfo.bgColor,
          color: statusInfo.textColor,
        }}
      >
        {statusInfo.label}
      </Box>
    </TableCell>
    <TableCell>{new Date(task.dueDate).toLocaleString()}</TableCell>
    <TableCell>{new Date(task.createdAt).toLocaleString()}</TableCell>
    <TableCell align="center">
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{ mr: 1, borderRadius: 2, textTransform: "none", fontWeight: 600 }}
        onClick={onEdit}
      >
        Sửa
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="small"
        sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
        onClick={onDelete}
      >
        Xóa
      </Button>
    </TableCell>
  </TableRow>
);

export default TaskItem;
