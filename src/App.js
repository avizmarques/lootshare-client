import React from "react";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserDashboard from "./Components/UserDashboard";
import PartyList from "./Components/PartyList";
import PartyDashboard from "./Components/PartyDashboard";
import CharacterDashboard from "./Components/CharacterDashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/user/:id/dashboard" component={UserDashboard} />
      <Route exact path="/partylist" component={PartyList} />
      <Route exact path="/party/:id" component={PartyDashboard} />
      <Route exact path="/character/:id" component={CharacterDashboard} />
    </div>
  );
}

export default App;
