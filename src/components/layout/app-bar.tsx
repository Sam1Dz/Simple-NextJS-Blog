import Link from "next/link";

/* MATERIAL UI | COMPONENTS */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppBarLayoutComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box component="nav">
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
        </Box>
      </AppBar>
    </Box>
  );
}

export default AppBarLayoutComponent;
