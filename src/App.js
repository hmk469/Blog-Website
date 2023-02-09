import TopBar from "./components/topbar/TopBar";
import React from "react";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import { BrowserRouter as Router, Route, Switch,  BrowserRouter } from "react-router-dom";
function App() {
  const user = false;
  return (
   <BrowserRouter>
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <LogIn />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
   </BrowserRouter>
  );
}

export default App;
