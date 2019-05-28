import React from 'react';
import styles from './login.css';

class Login extends React.Component {
  Constructor(props){
  }

  render(){
    return (
      <div class="main">
        <div class="container">
          <div class="login">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                  <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
