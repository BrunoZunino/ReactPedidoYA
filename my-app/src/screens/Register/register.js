import React from 'react';
import Styles from './register.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state={
      Name: "",
      LastName: "",
      Email: "",
      Pass: "",
      Country:"",
    };
  };

  render(){
    console.log('email: ', this.state.email);
    console.log('pass: ', this.state.pass);
    console.log('pais: ', this.state.Country);
    return (
        <div className="backgroundRegister">
          <div><img class="logoRegister" src={require('../../images/logoBlanco.png')} /></div>
            <div className="containerRegister">
              <form>
                  <div class="form-group NameRegister">
                    <input  value={this.state.Name} onChange={(event) => {this.setState({Name: event.target.value});}} type="text" class="form-control NameRegisterInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First name"/>
                  </div>
                  <div class="form-group LastNameRegister">
                    <input value={this.state.LastName} onChange={(event) => {this.setState({LastName: event.target.value});}} type="text" class="form-control LastNameRegisterInput" id="exampleInputPassword1" placeholder="Last name"/>
                  </div>
                  <div class="form-group EmailRegister">
                    <input value={this.state.Email} onChange={(event) => {this.setState({Email: event.target.value});}} type="Email" class="form-control EmailRegisterInput" id="exampleInputPassword1" placeholder="Email"/>
                  </div>
                  <div class="form-group PassRegisterInput">
                    <input value={this.state.Pass} onChange={(event) => {this.setState({Pass: event.target.value});}} type="password" class="form-control PassRegisterInput" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <label for="CountryRegister" className="CountryRegisterText">Country</label>
                  <select class="form-control CountryRegisterInput" id="exampleFormControlSelect1">
                    <option>Uruguay</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                  </select>
                  <div>
                    <input class="form-check-input checkbox" type="checkbox" id="gridCheck"></input>
                    <label className="form-check-label termsText" for="gridCheck">
                        I agree with <a>Terms & Conditions</a>
                    </label>
                    <button type="button" class="btn btn-primary newAccountButton" onClick={this.goHome}>Create new account</button>
                </div>
              </form>
            </div>
        </div>
    );
  }
}



export default Register;