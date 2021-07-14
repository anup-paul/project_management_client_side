
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectHeader from './Components/ProjectHeader/ProjectHeader';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';


function App() {

  

  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" >
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/projectManagement" >
            <ProjectHeader></ProjectHeader>
          </Route>
        </Switch>
      </Router>
        
      

    </div>
  );
}

export default App;
