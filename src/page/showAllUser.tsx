import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  AppBar,
  Box,
  IconButton,
  Toolbar,
} from "@mui/material";
import { User } from "../model/data";
import HomeIcon from "@mui/icons-material/Home";
import data from "../json/data.json";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

function ShowAllUser() {
  const userStorage: User = JSON.parse(localStorage.getItem("objUser")!);
//   const [user,setUser] = useState();

  const navigate = useNavigate();

  function userAll(e:User) {
    if (userStorage.id !=  e.id) {
      return (
        <Grid xs={4} style={{ marginBottom: "10%" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={e.avatar}
              alt={e.username}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.username} {e.country}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      )
    }
  }

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
              {userStorage.username}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Show all users
            </Typography>
            <Link to={"/showAllLandmark"}>
              <Button
                style={{ backgroundColor: "purple", marginRight: "20px" }}
                variant="contained"
              >
                Show All Landmark
              </Button>
            </Link>
            <Button
              style={{ backgroundColor: "purple" }}
              variant="contained"
              onClick={() => {
                localStorage.clear();
                navigate('/')
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          marginTop: "15vh",
          width: "100%",
          display: "flex",
        }}
      >
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ padding: "10%" }}
        >
          {data.users.map((e) => (
            userAll(e)
          ))}

          {/* {console.log(user)} */}
        </Grid>
      </div>
    </>
  );
}

export default ShowAllUser;
