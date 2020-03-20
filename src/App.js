import React from "react";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserDashboard from "./Components/UserDashboard";
import PartyDashboard from "./Components/PartyDashboard";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/user/:id/dashboard" component={UserDashboard} />
      <Route exact path="/party/:id" component={PartyDashboard} />
    </div>
  );
}

export default App;
