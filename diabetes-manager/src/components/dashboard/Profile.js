import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.user);
    const { classes } = this.props;
    const { name, age, height, weight, id } = this.props.user;
    return (
      <div className="center">
        <h1>Profile</h1>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <Button variant="contained" color="primary" className={classes.button}>
          <Link to={`profile/${id}`}>edit</Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Sign Out
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.dashboardReducers.userInfo
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Profile));
