import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const TaskListSkeleton = () => {
  return (
    <Stack spacing={2}>
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={80} />
      ))}
    </Stack>
  );
};

export default TaskListSkeleton;
