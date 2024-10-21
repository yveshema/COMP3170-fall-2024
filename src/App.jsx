import { useState } from 'react';
import FooterColumnLinks from "./components/FooterColumnLinks";
import Product from "./components/Product";
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';
import CartPreview from './components/CartPreview';
import CartItem from './components/CartItem';
import Spinner from './components/Spinner';

import { MdDelete } from 'react-icons/md';

import { initialProducts, footerLinks, initialCategories } from './fixtures';


function App() {
  const [products, setProducts] = useState(initialProducts);

  const [editing, setEditing] = useState(false);

  const [categories, setCategories] = useState(initialCategories);

  // JSX
  const footerColumns = footerLinks.map(column => <FooterColumnLinks key={column.title} data={column} />);
  const productList = products.map(product => <Product key={product.name} product={product} addToWishlist={addToWishlist} addToCart={addToCart} />);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function toggleEdit() {
    setEditing(!editing);
  }

  function addCategory(category) {
    setCategories([...categories, category]);
  }

  const [wishlist, setWishlist] = useState(new Set());

  function addToWishlist(product) {
    setWishlist(new Set(wishlist.add(product)));
  }

  const [cart, setCart] = useState(new Map());


  function addToCart(product) {
    cart.set(product, 1);
    setCart(new Map(cart)); // force state update
  }

  function deleteCartItem(product) {
    cart.delete(product);
    setCart(new Map(cart)); // force state update
  }

  function incrementCartItem(product) {
    const currentCount = cart.get(product);
    cart.set(product, currentCount + 1);
    setCart(new Map(cart));
  }

  function decrementCartItem(product) {
    if (cart.get(product) <= 1) {
      cart.delete(product);
      setCart(new Map(cart)); // force state update
    } else {
      const currentCount = cart.get(product);
      cart.set(product, currentCount - 1);
      setCart(new Map(cart)); // force state update
    }
  }

  function computeCartSize() {
    return [...cart.entries()].reduce((acc, [product, count]) => acc + count, 0);
  }

  function computeCartTotal() {
    return [...cart.entries()].reduce((acc, [product, count]) => acc + (product.price * count), 0);
  }

  // derived state -> will be recomputed everytime the cart state changes
  const cartSize = computeCartSize();

  const cartTotal = computeCartTotal();

  function showCart() {
    const cartModal = document.getElementById('cart-modal');
    document.body.style.overflow = 'hidden';
    cartModal.showModal();
  }

  function hideCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.close();
    document.body.style.overflow = 'visible';
  }

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                {wishlist.size > 0 && <span className="badge">{wishlist.size}</span>}
              </button>
              <button className="icon-btn" onClick={showCart}>
                <span>&#128722;</span>
                {cartSize > 0 && <span className="badge">{cartSize}</span>}
              </button>
            </div>
          </div>
          
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>

          <div>
            <button className="btn-primary" onClick={() => setEditing('product')}>New Product</button>
            <button className="btn-secondary" onClick={() => setEditing('category')}>New Category</button>
          </div>
          
        </header>

        {editing === 'product' && <ProductForm add={addProduct} toggleEdit={toggleEdit} categories={categories} />}
        {editing === 'category' && <CategoryForm add={addCategory} toggleEdit={toggleEdit} />}

        <main>
          <div className="products">{productList}</div>
        </main>
      </section>

      <CartPreview hideCart={hideCart}>
          <span>{cartSize} items</span>
          {cartSize > 0 ? (
            <>
            <div className="cart-items">
            {[...cart.entries()].map(([product, count]) => (
              <CartItem key={product.id} item={product}>
                <div>
                  <Spinner count={count} increment={() => incrementCartItem(product)} decrement={() => decrementCartItem(product)} />
                  <button onClick={() => deleteCartItem(product)}><MdDelete /></button>
                </div>
              </CartItem>
            ))}
            </div>

            <div className="cart-preview-summary">
              <div>
                <span>Total:</span>
                <span>${cartTotal}</span>
              </div>
              <p>Tax included and shipping calculated at checkout.</p>
              <button className="btn-primary">checkout</button>
              <button className="btn-secondary">view cart</button>
            </div>
            </>

          )
          : (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <button className="btn-secondary" onClick={hideCart}>continue shopping</button>
            </div>
          )}
      </CartPreview>

      <footer>
        <div>
          {footerColumns}
        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
