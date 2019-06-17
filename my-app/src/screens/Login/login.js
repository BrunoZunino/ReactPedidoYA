import React from 'react';
import styles from './login.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state={
      email: "",
      pass: "",
    };
  }

  componentDidMount() {
    console.log('I was triggered during componentDidMount');
  }

  goHome() {
    // to send info to the server, we need to make a post.
    // control of data with ifs.
    window.location.href = 'http://localhost:3000/home';

    var BodyString = { method: 'POST',
    email: this.state.email,
    pass: this.state.pass,
  };

    fetch('http://example.com/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }

  render(){
    console.log('email: ', this.state.email);
    console.log('pass: ', this.state.pass);
    return (
      <div class="main">
        <div class="container">
          <div>
            <img class="logo" src={require('../../images/logo.png')} />
          </div>
          <div class="login">
              <form>
                <div class="form-group emailinput">
                  <input  value={this.state.email} onChange={(event) => {this.setState({email: event.target.value});}} type="email" class="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                  <div class="form-group passInput">
                  <input value={this.state.pass} onChange={(event) => {this.setState({pass: event.target.value});}} type="password" class="form-control passInput" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="button" class="btn btn-primary loginButton" onClick={this.goHome}>Sign in</button>
                <div>
                  <button type="button" class="btn btn-primary registerButton ">Sign up</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
