import React, { Component } from 'react';
import './LoginForm.css';

const MODE_LOGIN = "LOGIN",
    MODE_SIGNUP = "SIGN UP";

class LoginForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
          mode: MODE_LOGIN,
          email: "",
          password: ""
      }

      this.setMode = this.setMode.bind(this);
    }

    setMode(mode) {
        this.setState({mode});
    }
  

    render() {
        let btnClass = "btn" + 
            ((this.state.mode === "LOGIN") ? "" : " secondary");


      return (
  
        <div className = "LoginArea">

          <form className = "LoginForm" onSubmit = {(event) => {
              event.preventDefault();

              if (this.state.mode === MODE_SIGNUP) {
                this.props.trySignup(this.state.email, this.state.password);
              }

              if (this.state.mode === MODE_LOGIN) {
                  this.props.trySignin(this.state.email, this.state.password);
                  console.log("tried");
              }
          }}>

            <div>{this.props.loginError}</div>
  
            <label>Email</label>
            <input type = "text" value = {this.state.email}
                onChange = { (event) => {
                    this.setState({email: event.target.value})
                }}
            />
  
            <label>Password</label>
            <input type = "password" value = {this.state.password}
                onChange = { (event) => {
                    this.setState({password: event.target.value})
                }}
            />
  
            <button className = {btnClass}>
                { this.state.mode}
            </button>
  
            <br />

            {
                this.state.mode === MODE_LOGIN &&
                <a onClick = {
                    () => this.setMode(MODE_SIGNUP)}>If you don't have an account, sign up</a>
            }
            {
                this.state.mode === MODE_SIGNUP &&
                <a onClick = {() => this.setMode(MODE_LOGIN)}>If you already have an account, log in</a>
            }

          </form>
        </div>
      )
    }
}

export default LoginForm;