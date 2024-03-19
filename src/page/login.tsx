import {
    AppBar,
    Box,
    Button,
    Card,
    Divider,
    IconButton,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material";
  import HomeIcon from "@mui/icons-material/Home";
  import { Link, useNavigate } from "react-router-dom";
  import LockIcon from "@mui/icons-material/Lock";
  import EmailIcon from "@mui/icons-material/Email";
  import data from "../json/data.json";
  import CryptoJS from 'crypto-js';
  function LoginPage() {


    const navigate = useNavigate();
  
    let username = "";
    let password = "";
  
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
  
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              <Card
                style={{
                  borderRadius: "30px",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "pink",
                  width: "50vh",
                  height: "80vh",
                }}
              >
                <h1>Log in</h1>
                <Divider />
  
                <TextField
                  // inputRef={emailRef}
                  placeholder="Username"
                  sx={{ m: 1, width: "90%" }}
                  type="username"
                  autoComplete="current-username"
                  onChange={(e)=>{
                    username = e.target.value;
                  }}
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <EmailIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
  
                <TextField
                  // inputRef={passwordRef}
                  placeholder="Password"
                  sx={{ m: 1, width: "90%" }}
                  type="password"
                  autoComplete="current-password"
                  onChange={(e)=>{
                    password = e.target.value;
                  }}
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <LockIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
  
                <Button
                  style={{ width: "100px", backgroundColor: "purple" }}
                  variant="contained"
                  onClick={() => {
                    console.log(username);
                    console.log(password);
                    // btnClick(email,password);
                    data.users.map(async (e) => {
                      // console.log("In Map "+email);
                      try {
                        if (String(e.username) === String(username)) {
                          console.log("Email Chk");
  
                          if (String(e.password) === String(password) && e.type == 1) {
                            console.log("Password Chk");
                            
                            const hash = CryptoJS.SHA256(e.password);

                            console.log(hash.toString);
                            const dataHash = {
                              id:e.id,
                              type:e.type,
                              username:e.username,
                              password:hash.toString(),
                              country:e.country
                            }
                            localStorage.clear()
                            localStorage.setItem("objUser", JSON.stringify(dataHash));
                            

                            navigate(`/homeAfterLogin`)
                            alert("Login Success!! Welcome User");
                          }else if (String(e.password) === String(password) && e.type == 99) {
                            console.log("Password Chk");
                            const hash = CryptoJS.SHA256(e.password);

                            console.log(hash.toString);
                            const dataHash = {
                              id:e.id,
                              type:e.type,
                              username:e.username,
                              password:hash.toString(),
                              country:e.country
                            }
                            localStorage.clear()
                            localStorage.setItem("objUser", JSON.stringify(dataHash));
                            navigate(`/showAllUser`)
                            alert("Login Success!! Welcome Admin");
                          }
                        }
                      } catch (error) {
                        console.log("Access Denied!!: ", error);
                      }
                    });
                  }}
                >
                  Log In
                </Button>
              </Card>
            </div>
      </>
    );
  }
  
  export default LoginPage;
  