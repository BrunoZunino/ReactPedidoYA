import React from 'react';
import Styles from './login.css';
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

  goHome = () => {
    // to send info to the server, we need to make a post.
    // control of data with ifs.
    var BodyString = { 
      method: 'GET',
      email: this.state.email,
      pass: this.state.pass,
    }

    fetch('http://localhost:5000/login/sign_in', BodyString)
      .then(function(response) {
        console.log('response.body =', response.body);
        console.log('response.bodyUsed =', response.bodyUsed);
        console.log('response.headers =', response.headers);
        console.log('response.ok =', response.ok);
        console.log('response.status =', response.status);
        console.log('response.statusText =', response.statusText);
        console.log('response.type =', response.type);
        console.log('response.url =', response.url);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        if(data.correo == BodyString.email & data.contraseña == BodyString.pass){
          window.location.href = '/home';
        } else {
          console.log("no son iguales");
        }

    })
    .catch(function(err) {
        console.error(err);
    });

    
  }
  

  goRegister = () => {
    window.location.href = '/register';
  }

  render(){
    console.log('email: ', this.state.email);
    console.log('pass: ', this.state.pass);
    return (
      <div class="main">
        <div class="containerLogin">
          <div className="containerLogo">
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
                  <a className="TextRegister">Don't have an account yet?</a>
                  <button type="button" class="btn btn-primary registerButton " onClick={this.goRegister}>Sign up</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
