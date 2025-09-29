import { Breadcrumbs, Link, Typography } from "@mui/material";
import { getBreadcrumbs } from "@/utils/breadcrumb.utils";

export default function AppBreadcrumbs() {
  const pathname = window.location.pathname;
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) =>
        idx < breadcrumbs.length - 1 ? (
          <Link
            underline="hover"
            color="inherit"
            key={crumb.to}
            href={crumb.to}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {crumb.label}
          </Link>
        ) : (
          <Typography
            color="text.primary"
            key={crumb.to}
            sx={{ fontWeight: "600" }}
          >
            {crumb.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
