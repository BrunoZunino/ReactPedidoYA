import React from 'react';
import styles from './home.css';

class Home extends React.Component {
  Constructor(props){
  }

  render(){
    return (
      <div>
        <div clasName={styles.search}>
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
              <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>
        <div>
          <h1>Bienvenidos a pedido ya!</h1>
        </div>
      </div>
    );
  }
}


export default Home;
