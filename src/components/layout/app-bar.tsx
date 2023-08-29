import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* MATERIAL UI | COMPONENTS */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/* MATERIAL UI | ICONS */
import BookIcon from "@mui/icons-material/Book";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";

import useResponsive from "@/helpers/hooks/use-responsive";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function AppBarLayoutComponent() {
  const { isMobile } = useResponsive();
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "tab" ||
          (event as React.KeyboardEvent).key === "shift")
      ) {
        return;
      }

      setOpenDrawer(isOpen);
    };
  React.useEffect(() => {
    if (!isMobile) setOpenDrawer(false);
  }, [isMobile]);

  const AppBarExtendProps = openDrawer && { elevation: 0 };
  const bgColorDrawerOpen = openDrawer ? { backgroundColor: "#272727" } : {};
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ...bgColorDrawerOpen,
        }}
        {...AppBarExtendProps}
      >
        <Box component="nav">
          <Container fixed>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => {
                  setTimeout(() => {
                    setOpenDrawer(false);
                  }, 500);
                }}
              >
                <Link href="/">NEXTJS BLOG</Link>
              </Typography>

              <Box sx={{ display: { xs: "none", md: "initial" } }}>
                <Link href="/posts">
                  <Button color="inherit">Posts</Button>
                </Link>

                <Link href="/contact">
                  <Button color="inherit">Contact</Button>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "initial", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleDrawer(!openDrawer)}
                  sx={{ color: "rgb(255, 255, 255)" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          width: "auto",
          [`& .MuiDrawer-paper`]: {
            width: "auto",
            boxSizing: "border-box",
            pt: 7,
          },
        }}
      >
        <Box
          component="div"
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          sx={{ backgroundColor: "#272727" }}
        >
          <List>
            <ListItem
              onClick={() => {
                router.push("/posts");

                setTimeout(() => {
                  setOpenDrawer(false);
                }, 500);
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItemButton>
            </ListItem>
            <ListItem
              onClick={() => {
                router.push("/contact");

                setTimeout(() => {
                  setOpenDrawer(false);
                }, 500);
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default AppBarLayoutComponent;
