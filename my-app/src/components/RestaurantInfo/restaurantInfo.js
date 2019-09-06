import React from 'react';
import Styles from './restaurantInfo.css';


class RestaurantInfo extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        htmlForRestaurants: "",
      };
    };

  render() {
    return (
      <div className="list-restaurant">
        <div className="imageComponent">
          {this.props.info.imagen ? 
          <img className="img-restaurant" src={this.props.info.imagen} alt="" />
          :
          <img className="img-restaurant" src={require('../../images/imgNotFound.png')} />
          }
        </div>
        <section className="restaurantInfo">
          <div>
            <div className="restaurantName">
              {this.props.info.nombre}
            </div>
            <div className="restaurantOpenTime">
            <a>Abre a las {this.props.info.apertura}</a>
            </div>
            <div className="restaurantAddress">
            <a>{this.props.info.barrio}</a> | <a>{this.props.info.calle}{this.props.info.numero}</a>
            </div>
            <div className="restaurantDescription">
            <a>{this.props.info.descripcion}</a>
            </div>
            <div className="restaurantButton">
              <div>
                <button type="button" class="btn btn-outline-danger">Ver Productos</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default RestaurantInfo;