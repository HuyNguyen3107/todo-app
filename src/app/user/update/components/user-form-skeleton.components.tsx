import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const UserFormSkeleton = () => (
  <Grid container spacing={2}>
    <Grid size={12}>
      <Skeleton variant="rectangular" height={56} />
    </Grid>
    <Grid size={6}>
      <Skeleton variant="rectangular" height={56} />
    </Grid>
    <Grid size={6}>
      <Skeleton variant="rectangular" height={56} />
    </Grid>
    <Grid size={12}>
      <Skeleton variant="rectangular" height={56} />
    </Grid>
    <Grid size={6}>
      <Skeleton variant="text" width={120} />
    </Grid>
    <Grid size={6}>
      <Skeleton variant="text" width={120} />
    </Grid>
    <Grid size={12}>
      <Skeleton variant="rectangular" height={48} />
    </Grid>
  </Grid>
);

export default UserFormSkeleton;
