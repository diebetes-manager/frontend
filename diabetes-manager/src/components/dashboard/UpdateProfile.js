import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { updateUserInfo } from "../../actions";

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
    console.log(this.props.match.params.id);
    const { classes } = this.props;
    const { name, age, height, weight } = this.state;
    return (
      <div className="center">
        <h1> Update Profile</h1>
        <form onSubmit={this.onSubmit}>
          <input
            label="Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={this.onChange}
          />
          <input
            label="age"
            name="age"
            placeholder="Enter age"
            value={age}
            onChange={this.onChange}
          />
          <input
            label="height"
            name="height"
            placeholder="Enter height"
            value={height}
            onChange={this.onChange}
          />
          <input
            label="weight"
            name="weight"
            placeholder="Enter weight"
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
