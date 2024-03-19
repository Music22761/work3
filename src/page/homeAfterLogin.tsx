import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Landmark, User } from "../model/data";
import data from "../json/data.json";
import {useNavigate } from "react-router-dom";

function HomeAfterLogin() {
  const userStorage: User = JSON.parse(localStorage.getItem("objUser")!);
  const navigate = useNavigate();
  
  

  function userLanmark(e:Landmark) {

    
    if (userStorage.country ===  e.country) {
      return (
        <Grid xs={4} style={{ marginBottom: "10%" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={e.image}
              alt={e.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.name} {e.country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.description}
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
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {userStorage.username}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Show all landmark
            </Typography>
            <Button
              style={{ backgroundColor: "purple" }}
              variant="contained"
              onClick={() => {
                localStorage.clear();
                navigate("/");
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
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={4}
          columnSpacing={4}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ padding: "10%" }}
        >
          {data.landmarks.map((e) => (
            userLanmark(e)
          ))}
        </Grid>
      </div>
    </>
  );
}

export default HomeAfterLogin;
