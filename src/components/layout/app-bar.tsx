import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

import styles from "@/styles/app-bar.module.css";

function AppBarLayoutComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <nav className={styles.navigation}>
          <Container fixed>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/">NEXTJS BLOG</Link>
              </Typography>

              <Link href="/posts">
                <Button color="inherit">Posts</Button>
              </Link>

              <Link href="/contact">
                <Button color="inherit">Contact</Button>
              </Link>
            </Toolbar>
          </Container>
        </nav>
      </AppBar>
    </Box>
  );
}

export default AppBarLayoutComponent;
