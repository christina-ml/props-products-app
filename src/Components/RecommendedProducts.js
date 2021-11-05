import React from 'react';
import Products from './Products';

class RecommendedProducts extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <ul>
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                </ul>
            </div>
        )   
    }
}

export default RecommendedProducts;