import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsername = (event) => {
    console.log(event.target.value)
    let newUsername = event.target.value;
    this.setState({username: newUsername}, () => {console.log(this.state)})
  }

  handlePassword = (event) =>{
    console.log(event.target.value);
    let newPassword = event.target.value;
    this.setState({password: newPassword}, () => {console.log(this.state)})
  }

  handlesubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state)
    if (this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handlesubmitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => {this.handleUsername(event)}} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => {this.handlePassword(event)}}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
