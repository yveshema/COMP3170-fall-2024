import { useState } from 'react';
import { nanoid } from 'nanoid';

const productTemplate = {
    id: nanoid(),
    name: 'new product',
    image_url: "https://placehold.co/600x400?text=New\nProduct",
    category: 0,
    price: 0.0,
    quantity: 1,
};

export default function ProductForm({ add, toggleEdit, categories }) {

    // state variable for the product form
    const [product, setProduct] = useState(productTemplate);

    function handleSubmit(e) {
        e.preventDefault();
    
        // update list of products
        add(product);
    
        // dismiss the form
        toggleEdit();
    
        // restore form state
        setProduct(productTemplate);
    }

    function handleInputChange(e) {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <div className="control-group">
                    <label htmlFor="product-name">Name: </label>
                    <input 
                        id="product-name"
                        name="name"
                        type="text"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="control-group">
                    <label htmlFor="product-image">Image: </label>
                    <input 
                        id="product-image"
                        name="image_url"
                        type="url"
                        value={product.image_url}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="product-category">Category: </label>
                    <select 
                        id="product-category"
                        name="category"
                        value={product.category}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="product-qty">Quantity: </label>
                    <input 
                        id="product-qty"
                        name="quantity"
                        type="number"
                        value={product.quantity}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="btn-group">
                    <button className="btn-primary">Save</button>
                    <button className="btn-cancel" onClick={() => toggleEdit()}>Cancel</button>
                </div>
            </form>
        </div>
    );
}