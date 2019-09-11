import React from 'react';
import Styles from './footer.css';


class Footer extends React.Component {
  constructor(props){
    super(props);

    };

    
  render() {
    return (
      <div className="Footer">
        <img className="logo-footer" src={require('../../images/logoBlanco.png')} />
      </div>
    )
  }
}
export default Footer;