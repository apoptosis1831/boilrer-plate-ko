
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";

 import LandingPage from './components/views/LandingPage/LandingPage'
 import LoginPage from "./components/views/LoginPage/LoginPage";
 import RegisterPage from "./components/views/RegisterPages/RegisterPage";
import Auth from './hoc/auth'

function App() {
  // const NewLandingPage = Auth(LandingPage,null, true)
  // const NewLoginPage = Auth(LoginPage,false)
  // const NewRegisterPage = Auth(RegisterPage, false)
  return (
    
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {Auth(LandingPage,null)}/>
          <Route exact path="/login" element = {Auth(LoginPage,false)}/>
          <Route exact path="/register" element = {Auth(RegisterPage,false) }/>
        </Routes> 
    </BrowserRouter>
  
  );
}


export default App;

