import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/project">
            <Project />
        </Route>
        <Route path="/experience">
            <Experience />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
