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
          </div>
        </section>
        {/* <Button variant="outline-primary">Primary</Button> */}
      </div>
    )
  }
}
export default RestaurantInfo;