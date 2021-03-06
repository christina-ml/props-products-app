import React from 'react';
import Products from './Products';
import shoes from './RecommendedShoes';

class RecommendedProducts extends React.Component{
    constructor(){
        super();
    }

    render(){
        // console.log(this.props)
        let {title} = this.props;
        let recommended = shoes.map((item)=> {
            return <Products name={item.name} description={item.description} />
        })

        // console.log(recommended);
        return(
            <div>
                <h1>{title}</h1>
                <div className='product-ul'>
                    {/* <Products shoe={shoes[0]} /> */}
                    {/* <Products name={shoes[0].name} description={shoes[0].description} />
                    <Products name={shoes[1].name} description={shoes[1].description} />
                    <Products name={shoes[2].name} description={shoes[2].description} />
                    <Products name={shoes[3].name} description={shoes[3].description} />
                    <Products name={shoes[4].name} description={shoes[4].description} /> */}
                    {recommended}
                </div>
            </div>
        )   
    }
}

export default RecommendedProducts;