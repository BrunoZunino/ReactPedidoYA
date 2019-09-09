import React from 'react';
import Styles from './food.css';


class Food extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        htmlForRestaurants: "",
      };
    };

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
            <div className="foodName">
              {this.props.info.tipo}
            </div>
            <div className="foodButton">
              <button type="button" class="btn btn-outline-danger">Realizar Pedido</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Food;