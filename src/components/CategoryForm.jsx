import { useState } from 'react';
import { nanoid } from 'nanoid';

const categoryTemplate = {
    id: nanoid(),
    name: 'new category',
    description: '',
};

export default function CategoryForm({ add, toggleEdit }) {
    const [category, setCategory] = useState(categoryTemplate);
    
    function handleSubmit(e) {
        e.preventDefault();
        
        // update the list of categories
        add(category);
        
        // restore the form to its initial state
        setCategory(categoryTemplate);

        // hide the form
        toggleEdit();
    }

    function handleInputChange(e) {
        setCategory({...category, [e.target.name]: e.target.value})
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <div className="control-group">
                    <label htmlFor="category-name">Name: </label>
                    <input 
                        id="category-name"
                        name="name"
                        type="text"
                        value={category.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="control-group">
                    <label htmlFor="category-desc">Name: </label>
                    <input 
                        id="category-desc"
                        name="description"
                        type="text"
                        value={category.description}
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