import React, { Component } from "react";

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

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
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

export default Login;
