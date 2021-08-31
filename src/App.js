import React, { Component } from 'react';
import Grocery from './Grocery';
import products from './data';
import Purchased from './Purchased';
import './App.css'



class App extends Component {

  
state = {
  products: products,
  item: '',
  quantity: 0,
  units: '',
  purchasedItems: []
}

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
      units: this.state.units,
      isPurchased: true,
    }
    this.setState({
      item: '',
      quantity: 0,
      units: '',
      products: [ newItem, ...this.state.products]

    })
  };

  addToPurchased = (item) => {
    this.setState({purchasedItems: [item, ...this.state.purchasedItems]})
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
                  {this.state.products.map((products, index) =>{
                    return (

                  
                      <Grocery key={index} products={products} handleAdd={this.addToPurchased} />
                  
                    
                    )
                  })}
              </div>
              <div id="puchased-container">


                 
              
                  {
                    this.state.purchasedItems.map((item, index) => {
                      return(
                   
                        <h3>Purchased: {this.state.purchasedItems} <Purchased key={index} item={item} />  </h3>
              
                      )
                    })
                  }
             
              </div>
     

              
      </div>
    )
  }
}

export default App;

