import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    passWord: ""
  };

  handleInputChange = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: ""
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          type="text"
          onChange={e => this.handleInputChange(e)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          type="text"
          onChange={e => this.handleInputChange(e)}
        />
        <br />
        <label htmlFor="userName">User Name</label>
        <br />
        <input
          name="userName"
          placeholder="Username"
          value={this.state.userName}
          type="text"
          onChange={e => this.handleInputChange(e)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          type="email"
          onChange={e => this.handleInputChange(e)}
        />
        <br />
        <label htmlFor="passWord">Password</label>
        <br />
        <input
          name="passWord"
          placeholder="Password"
          value={this.state.passWord}
          type="password"
          onChange={e => this.handleInputChange(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
