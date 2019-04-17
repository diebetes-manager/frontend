import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

const styles = {
  root: {
    background: " #2592F2",
    bottom: 0,
    width: "100%",
    overflow: "hidden",
    position: "fixed"
  }
};

class BottomNav extends React.Component {
  state = {
    value: "home"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<i className="fas fa-home fa-2x nav" />}
            component={Link}
            to="/dashboard"
          />
          <BottomNavigationAction
            label="Overview"
            value="overview"
            icon={<i className="fas fa-eye fa-2x nav" />}
            component={Link}
            to="/overview"
          />

          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<i className="fas fa-user fa-2x nav" />}
            component={Link}
            to="/profile"
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(BottomNav);
