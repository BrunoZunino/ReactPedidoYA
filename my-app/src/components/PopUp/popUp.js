import React from 'react';  
import Styles from './popUp.css';

class Popup extends React.Component {
    constructor(props){
        super(props);
    
          this.state={
            solicitFood: false,
          };
        };  

    selectButtons = (x) => {
        console.log("X", x);
        let btn = document.getElementById(x.ingredientes);
        console.log(btn);
        if(btn.classList[0] === 'buttonIngredientsDisabled'){
            btn.classList = ['buttonIngredients']
        }else{
            btn.classList = ['buttonIngredientsDisabled'];
        }
    }

  render() {  
    console.log(this.props.ingredients);
    console.log("Solicit", this.state.solicitFood);
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>
                <button className="Popup" type="button" onClick={this.props.closePopup}> X </button>
                <h1 className="PopupTitle">{this.props.text}</h1>
                <h2 className="PopupInfo">{this.props.type}</h2>
                <h3 className="WarningIngredients">Desactiva todos los ingredientes que no desees</h3>
                    <ul className=" container-ingredients list-group">
                        {
                            this.props.ingredients.map(x => {
                                return (<li className=" PopupIngredients list-group-item "> 
                                            <button type="button" id={x.ingredientes} className="buttonIngredients" onClick={ () => this.selectButtons(x)}>{x.ingredientes}</button>
                                        </li> );
                            })
                        }
                    </ul>
                <select className="custom-select Cash-tarjet">
                    <option value="1">En Efectivo</option>
                    <option disabled value="2">Con Tarjeta</option>
                </select>
                <button type="button" class="btn Popup-Button" onClick={() => {this.setState({ solicitFood: true });}}>Realizar pedido</button>
                { this.state.solicitFood ?
                    <div className="solicitResult">
                        <a className="solicitText"> Su pedido ha sido registrado</a>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
 }  
}  

export default Popup;