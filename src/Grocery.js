import React, { Component } from 'react';

class Grocery extends Component {
    render() {
        return (
            <div>
                <div id="productContainer">
                    <div className="productCard">{this.props.products.item} {this.props.products.quantity} {this.props.products.units}</div>
                    {/* <div className="productCard"></div>
                    <div className="productCard"></div> */}
                    

                </div>                              
            </div>
        );
    }
}

export default Grocery;