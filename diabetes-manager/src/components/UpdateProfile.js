import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { updateUserInfo } from "../state/actions/index.js";



const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      weight: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, age, height, weight } = this.state;

    const updatedUser = {
      name,
      age,
      height,
      weight
    };
    const { id } = this.props.match.params;
    this.props.updateUserInfo(updatedUser, id);

    this.props.history.push("/profile");
  };

  render() {
    const { classes } = this.props;
    const { name, age, height, weight } = this.state;
    return (
      <div className="center inputs">
        <h1> Update Profile</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="update-inputs"
            label="Name"
            name="name"
            placeholder={this.props.user.name}
            value={name}
            onChange={this.onChange}
          />
          <input
            className="update-inputs"
            label="age"
            name="age"
            placeholder={this.props.user.age}
            value={age}
            onChange={this.onChange}
          />
          <input
            className="update-inputs"
            label="height"
            name="height"
            placeholder={this.props.user.height}
            value={height}
            onChange={this.onChange}
          />
          <input
            className="update-inputs"
            label="weight"
            name="weight"
            placeholder={this.props.user.weight}
            value={weight}
            onChange={this.onChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit Edit
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.dashboardReducers.userInfo
});

export default connect(
  mapStateToProps,
  { updateUserInfo }
)(withStyles(styles)(UpdateProfile));
