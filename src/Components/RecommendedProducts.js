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
                    <Products name={shoes[0].name} description={shoes[0].description} />
                    <Products name={shoes[1].name} description={shoes[1].description} />
                </ul>
            </div>
        )   
    }
}

export default RecommendedProducts;