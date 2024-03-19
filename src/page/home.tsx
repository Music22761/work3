import { User } from "../model/data";
import HomeAfterLogin from "./homeAfterLogin";
import LoginPage from "./login";
import ShowAllUser from "./showAllUser";



function HomePage() {



  function chkLogin() {

    console.log(userStorage);
    if (userStorage != null || undefined) {
      if (userStorage.type == 99) {
        return ShowAllUser()
      }else{
        return HomeAfterLogin()
      }
    }else{
      return LoginPage();
    }
  }

  const userStorage: User = JSON.parse(localStorage.getItem("objUser")!);


  return (
    chkLogin()
  )
}

export default HomePage;
