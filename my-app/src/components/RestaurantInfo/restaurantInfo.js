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
        <div className="restaurant_name">
        </div>
      </div>
    )
  }
}
export default RestaurantInfo;