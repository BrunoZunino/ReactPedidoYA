import React from 'react';
import Styles from './food.css';
import Popup from '../PopUp/popUp.js';


class Food extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        htmlForRestaurants: "",
        showPopup: false,
        ingredients: [],
      };
    };

    componentDidMount(){
    }

    async togglePopup() {  
      await this.renderIngredients(this.props.info.codigo);
    } 

    async renderIngredients(codigo){
      let ingredientes = await fetch(`http://localhost:5000/food/ingredients/${codigo}`).then(r => r.json());

      this.state.ingredients = ingredientes;
      this.state.showPopup = !this.state.showPopup;
      console.log("THIS STATE => ",this.state);
      this.setState(this.state);
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
            <div className="foodPrice">
              ${this.props.info.precio}
            </div>
            <div className="foodTime">
              {this.props.info.tiempo_preparacion} minutos
            </div>
            <div className="foodButton">
              <button type="button" class="btn btn-outline-danger" onClick={this.togglePopup.bind(this)} >Realizar Pedido</button>
              {this.state.showPopup ?
                <Popup  
                  text={this.props.info.nombre}
                  type={this.props.info.tipo}
                  ingredients={this.state.ingredients}
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