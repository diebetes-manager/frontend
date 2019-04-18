import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const { name, age, height, weight, id } = this.props.user;
    return (
      <div className="flex">
        <div className="profile">
          <h1>Profile</h1>
          <p>name: {name}</p>
          <p>age: {age}</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <div className="profile-btns">
            <button>
              <Link to={`profile/${id}`}>edit</Link>
            </button>
            <button>Sign Out</button>
          </div>
        </div>
        <div className="inputs">
          <h1>Add Your Data</h1>
          <h4>BSL</h4>
          <input className="csv-inputs" placeholder="enter BSL" />
          <h4>Insulin</h4>
          <input className="csv-inputs" placeholder="enter Insulin levels" />
          <button>CSV</button>
        </div>
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
)(Profile);
