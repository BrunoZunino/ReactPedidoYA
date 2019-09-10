import React from 'react';
import Styles from './food.css';
import Popup from '../PopUp/popUp.js';


class Food extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        htmlForRestaurants: "",
        showPopup: false, 
      };
    };

    togglePopup() {  
      this.setState({  
           showPopup: !this.state.showPopup  
      });  
       } 

  render() {
    return (
      <div className="list-food">
        <div className="imageComponent">
          {this.props.info.imagen ? 
          <img className="img-food" src={this.props.info.imagen} alt="" />
          :
          <img className="img-food" src={require('../../images/imgNotFound.png')} />
          }
        </div>
        <section className="foodInfo">
          <div>
            <div className="foodName">
              {this.props.info.nombre}
            </div>
            <div className="foodType">
              {this.props.info.tipo}
            </div>
            <div className="foodButton">
              <button type="button" class="btn btn-outline-danger" onClick={this.togglePopup.bind(this)} >Realizar Pedido</button>
              {this.state.showPopup ?  
                <Popup  
                  text='Este es un popUp para los ingrdientes y pedido'  
                  closePopup={this.togglePopup.bind(this)}  
                />  
                : null  
                } 
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Food;