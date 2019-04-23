import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Amplify from "aws-amplify";
// import awsmobile from "./aws-exports";
// import { withAuthenticator } from "aws-amplify-react";
import Media from "react-media";

// components
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import Overview from "./components/Overview";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";



class App extends Component {

  render() {
    return (
      <Router>
        <section className="App">
          <Media query="(max-width: 599px)">
            {matches => (matches ? null : <TopBar />)}
          </Media>

          <Route 
            exact 
            path="/" 
            render={() => (
              <Dashboard />
            )}
          />
          <Route 
            exact 
            path="/overview" 
            render={() => (
              <Overview />
            )}
          />
          <Route 
            exact 
            path="/profile" 
            render={() => (
              <Profile />
            )}
          />
          <Route 
            exact 
            path="/profile/:id" 
            render={() => (
              <UpdateProfile />
            )}
          />

          <Media query="(max-width: 599px)">
            {matches => (matches ? <BottomNav /> : null)}
          </Media>
        </section>
      </Router>
    );
  }
}

export default App;
// export default withAuthenticator(App, true);
