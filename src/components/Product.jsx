export default function Product({ product, addToWishlist, addToCart }){

    return (
        <div className="product">
            <div className="product-image">
                <img src={product.image_url} alt={product.name} />
            </div>
            <p>
              <span className="pr-name">{product.name}</span>
              <span className="pr-price">${product.price}</span>
            </p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
            <button onClick={() => addToWishlist(product)}><span>&#129293;</span> <span>Add to wishlist</span></button>
        </div>
    );
}