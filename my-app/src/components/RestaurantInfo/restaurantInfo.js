import React from 'react';
import Styles from './restaurantInfo.css';


class RestaurantInfo extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        email: "",
        pass: "",
      };
    };

  render() {

    const i = [];

    // i.forEach(element => {
      
    // });


    return (
      <div className="Box-Component">
        <div className="imageComponent">
          {/* <img class="logo" src={require({this.image})} /> */}
        </div>
      </div>
    )
  }
}
export default RestaurantInfo;