import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/private/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
