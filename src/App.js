import React, { Component } from 'react';
import Grocery from './Grocery';
import products from './data';
import './App.css'



class App extends Component {

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      unit: this.state.unit
    }
    this.setState({
      item: '',
      quantity: 0,
      unit: ''

    })
  };

  
state = {
  products: products
}
 
  render() {
    console.log(products)
    return (
      <div>
        <div id="title">Shopping Cart</div>
          <div id="form-container">
            <form id="form" onSubmit={this.handleSubmit}>
              <label htmlFor="item">Item: </label>
              <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
              <br />
              <label htmlFor="item">Quantity: </label>
              <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
              <br />
              <label htmlFor="item">Unit: </label>
              <input type="text" value={this.state.unit} onChange={this.handleChange} id="unit" />
              <br />
              <input type="submit" />

            </form>
          </div>
              <div id="mainContainer">
                  {this.state.products.map((products) =>{
                    return (

                     

                      <Grocery products={products}/>

                    
                    )
                  })}

                
                    
                      
                    
              
                  


              </div>
      </div>
    )
  }
}

export default App;

