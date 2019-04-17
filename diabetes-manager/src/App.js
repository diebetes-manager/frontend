import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Amplify from "aws-amplify";
//import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import Media from "react-media";
// components
// import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import TopBar from "./components/dashboard/TopBar";
import BottomNav from "./components/dashboard/BottomNav";
import Health from "./components/dashboard/Health";
import Overview from "./components/dashboard/Overview";
import Profile from "./components/dashboard/Profile";

// import PrivateRoute from "./components/private/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Media query="(max-width: 599px)">
            {matches => (matches ? null : <TopBar />)}
          </Media>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/profile" component={Profile} />
          <Media query="(max-width: 599px)">
            {matches => (matches ? <BottomNav /> : null)}
          </Media>
        </div>
      </Router>
    );
  }
}

export default App;
// export default withAuthenticator(App, true);
