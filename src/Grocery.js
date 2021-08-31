import React, { Component } from 'react';

class Grocery extends Component {
    state = {
        purchased: false
    }
    render() {
        return (
            <div>
                <div id="productContainer">
             
                    <li className="productCard" onClick={() => 
                        (this.props.handleAdd(this.props.purchasedItems))}>
                        {this.props.products.item} {this.props.products.quantity} {this.props.products.units}
                        {this.state.purchased ? <span> Product is purchased</span> : ''}
                        </li>
                                      
                </div>                              
            </div>
        );
    }
}

export default Grocery;