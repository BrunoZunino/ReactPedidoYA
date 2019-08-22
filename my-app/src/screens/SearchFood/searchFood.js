import React from 'react';
import Styles from './searchFood.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import RestaurantInfo from '../../components/RestaurantInfo/restaurantInfo.js';
import Footer from '../../components/Footer/footer.js'

class SearchFood extends React.Component {
  constructor(props){
    super(props);

    };

    render(){

      var request = new Request('http://localhost:5000/restaurant_info', {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    console.log(request);

      return (
        <div className="mainRestaurant">
          <div className="backgroundImageTop">
          </div>
          <div className="filters">
            <div className="items_filters">
                <a>hola</a>
            </div>
          </div>
          <div className="component">
          <RestaurantInfo />
          </div>
          <Footer/>
        </div>
      );
    }
};


export default SearchFood;