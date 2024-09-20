import FooterColumnLinks from "./components/FooterColumnLinks";
import Product from "./components/Product";

const footerLinks = [
  {
    title: "Our store",
    links: ["About us", "Contact us", "Become a partner"],
  },
  {
    title: "Our policies",
    links: ["Return policies", "Shipping policy", "Terms of service"],
  },
  {
    title: "Our products",
    links: ["Home page", "Search", "Catalog"],
  }
];

const PRODUCTS = [
  {
    name: "Shoes",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: 50,
  },
  {
    name: "Men's shirt",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg",
    price: 36,
  },
  {
    name: "Men's jeans",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
    price: 45,
  },
  {
    name: "Samsung galaxy",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/%D0%92%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%96%D0%B9_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD_Samsung_Galaxy_Fold_2.png",
    price: 1200,
  },
  {
    name: "Chair",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Rey_Chair.png",
    price: 25,
  },
  {
    name: "Fridge",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Custom_Door_Fridge_2.jpg",
    price: 600,
  }
];

function App() {
  
  const footerColumns = footerLinks.map(column => <FooterColumnLinks key={column.title} data={column} />);

  const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />);
  
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
          
        </header>
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
