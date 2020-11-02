import React from "react";
import Menu from "./layout/menu/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Router>
        <Menu />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
