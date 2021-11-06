// here we will create a template for a product component!

function Products(props) {
    console.log(props.name)
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <p>The YEEZY BOOST 350 V2 features an upper...</p>
        </div>
    )
}

export default Products;
