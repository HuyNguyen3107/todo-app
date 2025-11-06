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
  <TableRow
    hover
    sx={{
      transition: "all 0.2s ease",
      "&:hover": {
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
      },
    }}
  >
    <TableCell sx={{ fontWeight: 600 }}>{task.name}</TableCell>
    <TableCell>
      <Box
        component="span"
        sx={{
          px: 2.5,
          py: 0.75,
          borderRadius: 3,
          fontWeight: 700,
          fontSize: 13,
          backgroundColor: statusInfo.bgColor,
          color: statusInfo.textColor,
          display: "inline-block",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
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
        size="small"
        sx={{
          mr: 1,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 700,
          borderWidth: 2,
          borderColor: "#667eea",
          color: "#667eea",
          transition: "all 0.3s ease",
          "&:hover": {
            borderWidth: 2,
            borderColor: "#667eea",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
          },
        }}
        onClick={onEdit}
      >
        ✏️ Sửa
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="small"
        sx={{
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 700,
          borderWidth: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            borderWidth: 2,
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(244, 67, 54, 0.3)",
          },
        }}
        onClick={onDelete}
      >
        🗑️ Xóa
      </Button>
    </TableCell>
  </TableRow>
);

export default TaskItem;
