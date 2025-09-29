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
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Link
            href={ROUTE_PATHS.HOME}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            TODO APP
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
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
            >
              <MenuItem
                onClick={() => {
                  navigate(ROUTE_PATHS.USER_UPDATE);
                  handleCloseUserMenu();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                  handleCloseUserMenu();
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
