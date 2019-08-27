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

      this.state={
        categoriesData: null,
        errorCategoriesData: false,
      };
    };

    renderCategories(){
      fetch('http://localhost:5000/categories')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        this.setState({ categoriesData: data });
        console.log(data);
      })
      .catch(function(err) {
        console.log("error: ", err)
      });
      if (!this.state.errorCategoriesData){
        console.log("ok");
      } else{
        console.log("not ok");
      }
    }

    render(){

      

      return (
        <div className="mainRestaurant">
          <div className="backgroundImageTop">
          </div>
          <div className="filters">
            <div className="items_filters">
              <ol>
                <li>filtros</li>
                <ul>
                  <li>Pedido express</li>
                  <li>Cupones</li>
                </ul>
                <li>Categorias</li>
                <ul>
                  {this.renderCategories()}
                </ul>
              </ol>
            </div>
          </div>
          <RestaurantInfo />
          <Footer/>
        </div>
      );
    }
};


export default SearchFood;