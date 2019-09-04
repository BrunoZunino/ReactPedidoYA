import React from 'react';
import Styles from './searchFood.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import RestaurantInfo from '../../components/RestaurantInfo/restaurantInfo.js';
import Footer from '../../components/Footer/footer.js';

class SearchFood extends React.Component {
  constructor(props){
    super(props);

      this.state={
        errorCategoriesData: false,
        htmlForCategories: "",
        restaurantInfo: [],
      };
    };

    componentDidMount(){
      this.renderCategories();
      this.renderRestaurants();
    }

    async renderCategories(){

      let categories = await fetch('http://localhost:5000/categories').then(r => r.json());

      let htmlForCategories = categories.map((cat) => {
        return <li><a>{cat.tipo}</a></li>
      });

      this.state.htmlForCategories = htmlForCategories;
      this.setState(this.state);
    }

    async renderRestaurants(){
      let restaurants = await fetch('http://localhost:5000/restaurant').then(r => r.json());

      this.state.restaurantInfo = restaurants;
      this.setState(this.state);
      console.log(this.state.restaurantInfo);
    }

    render(){
      return (
        <div className="mainRestaurant">
          <div className="backgroundImageTop">
          </div>
          <div className="content-restaurant">
            <div className="items_filters">
              <ol>
                <li>Filtros</li>
                <ul>
                  <li>Pedido express</li>
                  <li>Cupones</li>
                </ul>
                <li>Categorias</li>
                <ul>
                  {this.state.htmlForCategories}
                </ul>
              </ol>
            </div>
            <div>
              {this.state.restaurantInfo.map(x => {
                return <RestaurantInfo info={x}/>
              })}
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
};


export default SearchFood;