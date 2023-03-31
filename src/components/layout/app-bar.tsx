import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function AppBarLayoutComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <nav>
          <Container fixed>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NEXTJS BLOG
              </Typography>

              <Button color="inherit">Posts</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </Container>
        </nav>
      </AppBar>
    </Box>
  );
}

export default AppBarLayoutComponent;
