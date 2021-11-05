import React from 'react';
import Products from './Products';
import shoes from './RecommendedShoes';

class RecommendedProducts extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log(shoes)
        return(
            <div>
                <ul>
                    <Products name={shoes[0].name} />
                </ul>
            </div>
        )   
    }
}

export default RecommendedProducts;