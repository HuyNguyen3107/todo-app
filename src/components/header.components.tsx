"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useLogout } from "../app/(auth)/logout/hooks/use-logout.hooks";
import { ROUTE_PATHS } from "@/constants/route-path.constants";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { push: navigate } = useRouter();
  const { logout } = useLogout();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(102, 126, 234, 0.1)",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Link
            href={ROUTE_PATHS.HOME}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
              }}
            >
              <Typography fontSize="20px">📝</Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.5px",
              }}
            >
              TODO APP
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  border: "2px solid",
                  borderColor: "transparent",
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                  mt: 1,
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate(ROUTE_PATHS.USER_UPDATE);
                  handleCloseUserMenu();
                }}
                sx={{
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                  },
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                  handleCloseUserMenu();
                }}
                sx={{
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                  },
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
