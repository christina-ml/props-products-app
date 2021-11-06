import React from 'react';
import Products from './Products';
import shoes from './RecommendedShoes';

class RecommendedProducts extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log(this.props)
        let {title} = this.props;

        return(
            <div className="">
                <h1>{title}</h1>
                <ul>
                    {/* <Products shoe={shoes[0]} /> */}
                    <Products name={shoes[1].name} description={shoes[1].description} />
                </ul>
            </div>
        )   
    }
}

export default RecommendedProducts;