import React, { Component } from 'react';

class Purchased extends Component {
    
    render() {
        return (
            <div>
                
                    <h4>{this.props.purchasedItems}</h4>

            </div>
        
        );
    }
}

export default Purchased;