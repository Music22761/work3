import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function AdminAppbar() {


    
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ backgroundColor: "pink" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ width: "50px" }}
            >
              <Link to={"/"}>
                <HomeIcon />
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default AdminAppbar;
