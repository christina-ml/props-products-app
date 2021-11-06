// here we will create a template for a product component!

function Products(banana) {
    console.log(banana.name)
    let { name, description } = banana.shoe;
     
    return (
        <div className="product">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Products;
