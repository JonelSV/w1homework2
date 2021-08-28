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
      units: this.state.units
    }
    this.setState({
      item: '',
      quantity: 0,
      units: '',
      products: [ newItem, ...this.state.products]

    })
  };

  
state = {
  products: products,
  item: '',
  quantity: 0,
  units: ''
}
 
  render() {
    console.log(products)
    return (
      <div>
        <div id="title">Shopping Cart</div>

                <div id="form-container">
                  <h2>Add item to Shopping Cart</h2>
                  <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item: </label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item" placeholder="Enter Item Name" />
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
                    <br />
                    <label htmlFor="units">Units: </label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} 
                            id="units" placeholder="Enter Units e.g. pounds, pieces" />
                    <br />
                    <input type="submit" value="Add To List"/>

                  </form>
                </div>
              <h3>Items in the cart</h3>
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

