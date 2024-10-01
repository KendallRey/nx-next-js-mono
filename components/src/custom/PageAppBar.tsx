"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import MuiMenu from "../menu/Menu";
import MuiMenuItem from "../menu-item/MenuItem";
import MuiTypography from "../typography/Typograph";
import MuiIconButton from "../icon-button/IconButton";
import MuiBox from "../box/Box";
import MuiButton from "../button/Button";
import { User } from "@supabase/supabase-js";
import { useCallOnce } from "../hooks/useCallOnce";
import { APP } from "@/constants/APP";
import MuiLink from "../link/Link";
import Link from "next/link";

// Sample
const pages: string[] = [];

const PageAppBar = () => {
  const router = useRouter();
  const client = createClient();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<User | null>();
  const getUser = useCallback(async () => {
    const response = await client.auth.getUser();
    setUser(response.data.user);
  }, [client]);

  useCallOnce(getUser);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const onOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const onOpenUserMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const onCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const onCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const onLogout = useCallback(async () => {
    setAnchorElUser(null);
    setLoading(true);
    const { error } = await client.auth.signOut();
    setLoading(false);
    if (error) return;
    router.replace("/login");
    router.refresh();
  }, [router, client]);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MuiTypography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {APP.NAME}
          </MuiTypography>

          <MuiBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MuiIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onOpenNavMenu}
              color="inherit"
            >
              <BiMenu />
            </MuiIconButton>
            <MuiMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={onCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {Object.values(APP.ROUTES.USER).map((route) => (
                <MuiMenuItem key={route.href}>
                  <MuiLink
                    component={Link}
                    href={route.href}
                    variant="body2"
                    onClick={onCloseNavMenu}
                    underline="hover"
                  >
                    <MuiTypography fontSize={20}>{route.name}</MuiTypography>
                  </MuiLink>
                </MuiMenuItem>
              ))}
            </MuiMenu>
          </MuiBox>

          <MuiTypography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {APP.NAME}
          </MuiTypography>
          <MuiBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MuiButton key={page} onClick={onCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </MuiButton>
            ))}
          </MuiBox>
          <MuiBox sx={{ flexGrow: 0 }}>
            <MuiIconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user?.email || "User"} src="/static/images/avatar/2.jpg" />
            </MuiIconButton>
            <MuiMenu
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
              onClose={onCloseUserMenu}
            >
              <MuiMenuItem onClick={onCloseUserMenu} disabled={loading}>
                <MuiTypography sx={{ textAlign: "center" }}>Profile</MuiTypography>
              </MuiMenuItem>
              <MuiMenuItem onClick={onLogout} disabled={loading}>
                <MuiTypography sx={{ textAlign: "center" }}>Logout</MuiTypography>
              </MuiMenuItem>
            </MuiMenu>
          </MuiBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default PageAppBar;
