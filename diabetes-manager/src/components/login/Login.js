import React, { Component } from "react";

class Login extends Component {
  state = {
    auth: {
      username: "",
      password: ""
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
          <input
            placeholder="enter username..."
            type="text"
            value={username}
            name="username"
          />
          <input
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
