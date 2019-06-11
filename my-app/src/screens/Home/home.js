import React from 'react';
import Styles from './home.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props);
    };


  render(){
    return (
      <div>
          <h1>Hello everybody!!</h1>
      </div>
    );
  }
}



export default Home;