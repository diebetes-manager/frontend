import React, { Component } from "react";
import { connect } from "react-redux";
import { loggedIn } from "../../actions";

class Login extends Component {
  state = {
    auth: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      auth: {
        ...this.state.auth,
        [e.target.name]: e.target.value
      }
    });
  };

  submitChanges = e => {
    e.preventDefault();
    this.props.loggedIn(this.state.auth);

    this.setState({
      auth: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/dashboard");
    }
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitChanges}>
          <input
            onChange={this.handleChanges}
            placeholder="enter username..."
            type="text"
            value={username}
            name="username"
          />
          <input
            onChange={this.handleChanges}
            placeholder="enter password..."
            type="password"
            value={password}
            name="password"
          />
          <button>login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducers.isLoggedIn
});

export default connect(
  mapStateToProps,
  { loggedIn }
)(Login);
