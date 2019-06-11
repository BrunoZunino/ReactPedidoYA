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
    
  }

  render(){
    console.log('email: ', this.state.email);
    console.log('pass: ', this.state.pass);
    return (
      <div class="main">
        <div>
          <img class="imagen" src={require('../../images/picante.png')} />
        </div>
        <div class="container">
          <div class="login">
              <form>
                <div class="form-group emailinput">
                  <input  value={this.state.email} onChange={(event) => {this.setState({email: event.target.value});}} type="email" class="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                  <div class="form-group passInput">
                  <input value={this.state.pass} onChange={(event) => {this.setState({pass: event.target.value});}} type="password" class="form-control passInput" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary loginButton" onClick={this.goHome}>Log in</button>
                <div>
                  <button type="submit" class="btn btn-primary registerButton ">Sign up</button>
                </div>
                <div class="plusButtons">
                  <button type="submit" class="btn btn-primary facebookButton ">Facebook</button>
                  <button type="submit" class="btn btn-primary gmailButton ">Gmail</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
