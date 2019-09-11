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
      method: 'POST',
      email: this.state.email,
      pass: this.state.pass,
    }

    function handleErrors(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
    }

    fetch('http://localhost:5000/login/sign_in', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
      }).then(handleErrors)
      .catch(function(err) {
        console.log(err);
      }).then(function(data) {
        console.log(data);
        if(data){
          // se logeó el usuario
          console.log("logeado");
          window.location.href = '/home';
        }else{
          // falló el login
          console.log("no logeado");
        }
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
                  <input  value={this.state.email} onChange={(event) => {this.setState({email: event.target.value});}} type="email" class="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mail"/>
                </div>
                  <div class="form-group passInput">
                  <input value={this.state.pass} onChange={(event) => {this.setState({pass: event.target.value});}} type="password" class="form-control passInput" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <button type="button" class="btn btn-primary loginButton" onClick={this.goHome}>Entrar</button>
                <div>
                  <a className="TextRegister">Don't have an account yet?</a>
                  <button type="button" class="btn btn-primary registerButton " onClick={this.goRegister}>Registrarse</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
