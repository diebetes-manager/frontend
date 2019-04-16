import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

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
    this.state = {
      user: {
        name: "joseph rios",
        age: 35,
        height: "5 ft 9in",
        weight: "140 lbs"
      }
    };
  }
  render() {
    console.log(this.props.user);
    const { classes } = this.props;
    const { name, age, height, weight } = this.state.user;
    return (
      <div className="center">
        <h1>Profile</h1>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <Button variant="contained" color="primary" className={classes.button}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Sign Out
          <DeleteIcon className={classes.rightIcon} />
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
