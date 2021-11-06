// here we will create a template for a product component!

function Products(props) {
    console.log(props.name)
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Products;
