export default function CartItem({ item, children }) {
    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={item.image_url} alt={item.name} />
            </div>
            <div>
                <span>{item.name}</span>
                <span>${item.price}</span>
                {children}
            </div>
        </div>
    );
}