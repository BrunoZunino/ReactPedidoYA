import React from 'react';
import Styles from './restaurantInfo.css';


class RestaurantInfo extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
      };
    };

  render() {

    

    return (
      <div className="list-restaurant">
        <div className="imageComponent">
          {/* <img class="logo" src={require({this.image})} /> */}
        </div>
        <section className="restaurantInfo">
          <div className="restaurantName">
           <a> MC Donalds </a>
          </div>
          <div className="restaurantOpenTime">
           <a>Abre a las </a>
          </div>
        </section>
      </div>
    )
  }
}
export default RestaurantInfo;