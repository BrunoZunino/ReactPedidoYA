import React from 'react';
import Styles from './register.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state={
      name: "",
      lastName: "",
      email: "",
      pass: "",
      country: "",
    };
  };

  

  signUp = () => { 
    fetch('http://localhost:5000/register/sign_up',{
      method: 'POST',
      headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
      }).then(response => {
          console.log(response)
      })
      .catch(error =>{
          console.log(error)
      })
  }

  render(){

    let list = [
      "Uruguay", "Argentina", "Brasil" 
    ];

    list.forEach(element => {
      list.push(<option>{element}</option>);
      return list;
    });


    console.log('nombre: ', this.state.name);
    console.log('apellido: ', this.state.lastName);
    console.log('email: ', this.state.email);
    console.log('pass: ', this.state.pass);
    console.log('pais: ', this.state.Country);
    return (
        <div className="backgroundRegister row">
          <div><img className="logoRegister" src={require('../../images/logoBlanco.png')} /></div>
            <div className="containerRegister">
              <form>
                  <div className="form-group NameRegister">
                    <input  value={this.state.name} onChange={(event) => {this.setState({name: event.target.value});}} type="text" className="form-control NameRegisterInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First name"/>
                  </div>
                  <div className="form-group LastNameRegister">
                    <input value={this.state.lastName} onChange={(event) => {this.setState({lastName: event.target.value});}} type="text" className="form-control LastNameRegisterInput" id="exampleInputPassword1" placeholder="Last name"/>
                  </div>
                  <div className="form-group EmailRegister">
                    <input value={this.state.email} onChange={(event) => {this.setState({email: event.target.value});}} type="Email" className="form-control EmailRegisterInput" id="exampleInputPassword1" placeholder="Email"/>
                  </div>
                  <div className="form-group PassRegisterInput">
                    <input value={this.state.pass} onChange={(event) => {this.setState({pass: event.target.value});}} type="password" className="form-control PassRegisterInput" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <label htmlFor="CountryRegister" className="CountryRegisterText">Country</label>
                  <select value={this.state.country} onChange={(event) => {this.setState({country: event.target.value});}} className="form-control CountryRegisterInput" id="exampleFormControlSelect1" placeholder="Choose one country">
                    {list}
                  </select>
                  <div>
                    <input className="form-check-input checkbox" type="checkbox" id="gridCheck"></input>
                    <label className="form-check-label termsText" htmlFor="gridCheck">
                        I agree with <a>Terms & Conditions</a>
                    </label>
                    <button type="button" className="btn btn-primary newAccountButton" onClick={this.signUp}>Create new account</button>
                </div>
              </form>
            </div>
        </div>
    );
  }
}



export default Register;