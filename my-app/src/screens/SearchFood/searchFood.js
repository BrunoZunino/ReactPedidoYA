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
      };
    };

    componentDidMount(){
      this.renderCategories();
    }

    async renderCategories(){

      let categories = await fetch('http://localhost:5000/categories').then(r => r.json());

      let htmlForCategories = categories.map((cat) => {
        return <li>{cat.tipo}</li>
      });

      this.state.htmlForCategories = htmlForCategories;
      this.setState(this.state);
    }

    render(){
      return (
        <div className="mainRestaurant">
          <div className="backgroundImageTop">
          </div>
          <div className="filters">
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
          </div>
          <RestaurantInfo />
          <Footer/>
        </div>
      );
    }
};


export default SearchFood;