import { useState } from 'react';
import { nanoid } from 'nanoid';
import FooterColumnLinks from "./components/FooterColumnLinks";
import Product from "./components/Product";

import { initialProducts, footerLinks, initialCategories } from './fixtures';


function App() {
  const [products, setProducts] = useState(initialProducts);

  const [editing, setEditing] = useState(false);

  const [categories, setCategories] = useState(initialCategories);

  // state variable for the product form
  const [product, setProduct] = useState({
    name: 'new product',
    image_url: "https://placehold.co/600x400?text=New\nProduct",
    category: 0,
    price: 0.0,
    quantity: 1,
  });

  // JSX
  const footerColumns = footerLinks.map(column => <FooterColumnLinks key={column.title} data={column} />);
  const productList = products.map(product => <Product key={product.name} product={product} />);

  // const categoryOptions = categories.map(category => (
  //   <option key={category.id} value={category.id}>{category.name}</option>
  // ));

  function handleCancel(e) {
    e.preventDefault();
    setEditing(false);
  }

  function handleAddProduct(e) {
    e.preventDefault();

    // update list of products
    setProducts([...products, product]);

    // dismiss the form
    setEditing(false);

    // restore form state
    setProduct({
      name: 'new product',
      image_url: "https://placehold.co/600x400?text=New\nProduct",
      category: 0,
      price: 0.0,
      quantity: 1,
    });
  }

  // Product Form
  const productForm = (
    <form onSubmit={handleAddProduct}>
      <div className="control-group">
        <label htmlFor="product-name">Name: </label>
        <input 
          id="product-name"
          name="name"
          type="text"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
        />
      </div>

      <div className="control-group">
        <label htmlFor="product-image">Image: </label>
        <input 
          id="product-image"
          name="image_url"
          type="url"
          value={product.image_url}
          onChange={(e) => setProduct({...product, image_url: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="product-category">Category: </label>
        <select 
          id="product-category"
          name="category"
          value={product.category}
          onChange={(e) => setProduct({...product, category: e.target.value})}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="product-price">Price: </label>
        <input 
          id="product-price"
          name="price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={(e) => setProduct({...product, price: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="product-qty">Quantity: </label>
        <input 
          id="product-qty"
          name="quantity"
          type="number"
          value={product.quantity}
          onChange={(e) => setProduct({...product, quantity: e.target.value})}
        />
      </div>

      <div className="btn-group">
        <button className="btn-primary">Save</button>
        <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );

  // Category Form
  const categoryForm = (
    <form>
      <div className="control-group">
        <label htmlFor="category-name">Name: </label>
        <input 
          id="category-name"
          name="name"
          type="text"
        />
      </div>

      <div className="control-group">
        <label htmlFor="category-desc">Name: </label>
        <input 
          id="category-desc"
          name="description"
          type="text"
        />
      </div>

      <div className="btn-group">
        <button className="btn-primary">Save</button>
        <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
  
  return (
    <div class="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn"><span>&#129293;</span><span className="badge">2</span></button>
              <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
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

        <div className="add-form">
          {editing === 'product' && productForm}
          {editing === 'category' && categoryForm}
        </div>

        <main>
          {productList}
        </main>
      </section>
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
