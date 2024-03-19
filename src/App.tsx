import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./page/login"
import HomeAfterLogin from "./page/homeAfterLogin"
import ShowAllUser from "./page/showAllUser"
import ShowAllLandmark from "./page/showAllLandmark"
import HomePage from "./page/home"


const routers = createBrowserRouter(
  [
    { path:"/", element:<HomePage/>},
    { path:"/login", element:<LoginPage/>},
    { path:"/homeAfterLogin", element:<HomeAfterLogin/>},
    { path:"/showAllUser", element:<ShowAllUser/>},
    { path:"/showAllLandmark", element:<ShowAllLandmark/>},
  ]
)

function App() {
 return(
  <RouterProvider router ={routers}/> 
 )
}

export default App
