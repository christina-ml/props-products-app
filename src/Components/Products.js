// here we will create a template for a product component!

function Products( {name, description} ) {
    // console.log(props.name)
    // let { name, description } = props.shoe;
     
    return (
        <div className="product">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Products;
