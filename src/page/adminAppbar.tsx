import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
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
            <Link to={'/showAllUser'} ><Button style={{backgroundColor:'pink'}} variant='contained'>Show All Users</Button></Link>
            <Link to={'/showAllLandmark'} ><Button style={{backgroundColor:'pink'}} variant='contained'>Show All Landmark</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default AdminAppbar;
