import CatalogDropDown from "./CatalogDropDown";

export default function Navigation({ children }) {
    return (
        <nav>
            <button>Home</button>
            {/* <CatalogDropDown categories={categories} /> */}
            {children}
            <button>all products</button>
            <button>wishlist</button>
        </nav>
    );
}