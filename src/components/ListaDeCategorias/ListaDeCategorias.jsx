import React, { Component } from 'react';

class ListaDeCategorias extends Component {

   _handleEventoInput (e) {
      if(e.key == "Enter") {
         console.log("adicionar categoria")
      }
   }
    
    render() { 
        return ( 
            <section>
                <ul>
                    <li> Categoria 3</li>
                    <li> Categoria 2 </li>
                    <li> Categoria 1 </li>
                </ul>
                <input type="text" className="lista-categorias-input" placeholder="Adiciona uma categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>   
        );
    }
}
 
export default ListaDeCategorias;