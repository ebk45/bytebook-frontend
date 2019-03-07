import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StyledLogin from "./components/Login";
import StyledNav from "./components/Nav";
import StyledFeed from "./components/Feed";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <React.Fragment>
      <StyledNav />
      <StyledFeed />
    </React.Fragment>
  );
}

function Login() {
  return (
    <React.Fragment>
      <StyledLogin />
    </React.Fragment>
  );
}

export default App;
