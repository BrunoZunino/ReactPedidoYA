import React from 'react';  
import Styles from './popUp.css';  

class Popup extends React.Component {  
  render() {  
    console.log(this.props.ingredients);
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>
                <h1 className="PopupTitle">{this.props.text}</h1>
                <button className="Popup" type="button" onClick={this.props.closePopup} >x</button>
                <h2 className="PopupInfo">{this.props.type}</h2>
                <h3 className="PopupInfo">{this.props.ingredients.ingredientes}</h3>
                <select className="custom-select Cash-tarjet">
                    <option value="1">En Efectivo</option>
                    <option disabled value="2">Con Tarjeta</option>
                </select>
                <button type="button" class="btn Popup-Button" onClick={this.props.closePopup}>Realizar pedido</button>  
            </div>
        </div>
    );
 }  
}  

export default Popup;