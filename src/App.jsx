function App() {
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
          <div class="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="" />
            <p>
              <span class="pr-name">Product 1</span>
              <span class="pr-price">$20</span>
            </p>
          </div>
          <div class="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="" />
            <p>
              <span class="pr-name">Product 1</span>
              <span class="pr-price">$20</span>
            </p>
          </div>
          <div class="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="" />
            <p>
              <span class="pr-name">Product 1</span>
              <span class="pr-price">$20</span>
            </p>
          </div>
          <div class="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg" alt="" />
            <p>
              <span class="pr-name">Product 1</span>
              <span class="pr-price">$20</span>
            </p>
          </div>
          <div class="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="" />
            <p>
              <span class="pr-name">Product 1</span>
              <span class="pr-price">$20</span>
            </p>
          </div>
        </main>
      </section>
      <footer>
        <div>
          <div>
            <h3>Our store</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Become a partner</a></li>
  
            </ul>
          </div>
  
          <div>
            <h3>Our policies</h3>
            <ul>
              <li><a href="">Refund policy</a></li>
              <li><a href="">Shipping policy</a></li>
              <li><a href="">Terms of service</a></li>
  
            </ul>
          </div>
  
          <div>
            <h3>Our products</h3>
            <ul>
              <li><a href="">Home page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
  
            </ul>
          </div>
        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
