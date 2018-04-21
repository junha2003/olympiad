import React, { Component } from 'react';

import { firebase, db } from './utils/firebase';
import './App.css';
import LoginForm from './containers/LoginForm.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      loginError: undefined
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var email = user.email;
        var uid = user.uid;
        console.log("You are logged in", email, uid);
      } else {
        console.log("You are now logged out");
      }
    });

    this.trySignin = this.trySignin.bind(this);
    this.trySignup = this.trySignup.bind(this);
  }

  trySignin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      this.setState({
        loginError: errorMessage
      })
      // ...
    });
  }

  trySignup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      this.setState({
        loginError: errorMessage
      })
    });
  }

  render() {

    const {user} = this.state;
    return (
      <div>
                
        { user && <div>Hello user</div> }
        { !user && <LoginForm 
          loginError = {this.state.loginError}
          trySignup = {this.trySignup}
          trySignin = {this.trySignin}/> }
      </div>
    );  
  }
}

export default App;
