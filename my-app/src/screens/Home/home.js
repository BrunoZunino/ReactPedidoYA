import React from 'react';
import Styles from './home.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Footer from '../../components/Footer/footer.js';

class Home extends React.Component {
  constructor(props){
    super(props);
    };

    componentDidMount() {
      $(document).ready(function(){
        var altura = $('.logoHome').offset().top;
        
        $(window).on('scroll', function(){
          if ( $(window).scrollTop() > altura ){
            $('.form').addClass('menu-fixed');
          } else {
            $('.form').removeClass('menu-fixed');
          }
        });
      });    
    }


  render(){


    let list = [
      "Canelones", "Montevideo", "Maldonado" 
    ];

    list.forEach(element => {
      list.push(<option>{element}</option>);
      return list;
    });

    return (
      <div className="Home">
        <div className="buscadorHome">
          <img class="logoHome" src={require('../../images/logoBlanco.png')} />
          <form className="form">
            <div>
              <select class="form-control SearchAddresInput" id="exampleFormControlSelect1">
              {list}
              </select>
              <input type="search" id="miBusqueda" name="q" className="buscarHome form-control" placeholder="ej: Una direccion o lo que quieras ordenar"/>
              <button className=" btn buscarBotonHome">Buscar</button>
            </div>
          </form>
          <img class="menuHome" src={require('../../images/menu.png')} /><a className="textImagenesHome1">1. Elegí tu comida</a>
          <img class="creditHome" src={require('../../images/credit-card.png')} /> <a className="textImagenesHome2">2. Hacé tu pedido</a>
          <img class="deliveryHome" src={require('../../images/delivery.png')} /> <a className="textImagenesHome3">3. Recibí tu comida</a>
        </div>
        <div className="infoHome">
          <h1 className="restaurantesHomeText">Los mejores restaurantes</h1>
          <h2 className="textHome"> Pedi online rapido y facil a reconocidas marcas y +1.500 restaurantes</h2>
          <img class="restaurante1" src={require('../../images/restaurante1.png')} />
          <img class="restaurante2" src={require('../../images/restaurante2.png')} />
          <img class="restaurante4" src={require('../../images/restaurante4.png')} />
          <img class="restaurante5" src={require('../../images/restaurante5.png')} />
          <div className="opinionesHome">
          </div>
        </div>
        <div>
          <li className="card content_card content_img">
            <img  src="https://img.pystatic.com/users/burger-2.png" alt="" title=""/>
            <span className="name">Vicky</span>
            <div className="content_rating">
              <span className="rating-points box_split_review_05">5.0</span>
              <span className="rating rating_50"></span>
            </div>
              <p>Exelente como siempre</p>
            <span className="restaurant_name">Porto Vanila - Ellauri</span>
            <span className="date">15 ago, 2019</span>
          </li>
        </div>
        <Footer/>
      </div>
    );
  }
}



export default Home;