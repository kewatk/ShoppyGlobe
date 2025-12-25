import "./style.css";
function ProductItem(props){
    return(
        <>
        <div className="product-card">
            <img
            src={props.ProductDetail.thumbnail}
            alt={props.ProductDetail.title}
            className="product-cover"
            />

            <h1 className="product-title">{props.ProductDetail.title}</h1>
            <h1 className="product-price">{props.ProductDetail.price}$</h1>
            <p className="product-description">{props.ProductDetail.description}</p>
        </div>
        

        </>
    )
}
export default ProductItem;