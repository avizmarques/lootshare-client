import React from "react";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}

export default App;
