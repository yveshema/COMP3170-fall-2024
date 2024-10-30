import { useState } from 'react';

export default function CatalogDropDown({ categories, filter }) {
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(prev => !prev);
    }

    function handleSelect(categoryID) {
        filter(categoryID);
        toggleShow();
    }

    return (
        <div className="catalog-menu">
            <button onClick={toggleShow}>Catalog</button>

            {show && 
            <div className="catalog-dropdown">
                {categories.map(category => (
                    <button key={category.id} onClick={() => handleSelect(category.id)}>
                        {category.name}
                    </button>
                ))}
            </div>
            }
        </div>
    );
}