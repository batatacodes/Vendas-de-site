import React, { useState } from "react";
import PRODUCTS from "./products";
import CartModal from "./CartModal";

function formatPrice(price) {
  return "R$ " + price.toFixed(2).replace(".", ",");
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product) {
    setCart(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  }
  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }
  function subtotal() {
    return cart.reduce((sum, p) => sum + p.price, 0);
  }
  function discount() {
    return cart.reduce((sum, p) => sum + (p.oldPrice - p.price), 0);
  }

  return (
    <div className="app-main">
      <header className="header">
        <h1>Template Store</h1>
        <p>Os melhores templates prontos para o seu site! Todos com <span style={{color:'#fff700',fontWeight:700}}>10% de desconto</span> só hoje.<br/>
        Escolha, personalize e publique seu novo site agora mesmo.</p>
      </header>

      <button className={`cart-btn${cartOpen ? " active" : ""}`} onClick={() => setCartOpen(true)}>
        <span role="img" aria-label="carrinho">🛒</span>
        Carrinho
        <span className="cart-count">{cart.length}</span>
      </button>

      <section className="banner">
        <h2>
          <strong>Templates Profissionais</strong> <span>com desconto exclusivo</span>
        </h2>
        <span>Modernize seu negócio online hoje mesmo. Aproveite <strong>10% OFF</strong> em qualquer template!</span>
      </section>

      <main>
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <div className="product-card" key={product.id} tabIndex={0}>
              <img src={product.img} className="product-img" loading="lazy" alt={product.title}/>
              <div className="product-title">{product.title}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="price-row">
                <span className="product-price-old">{formatPrice(product.oldPrice)}</span>
                <span className="product-price">{formatPrice(product.price)}</span>
                <span className="discount-badge">-10%</span>
              </div>
              <button onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>

      {cartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          subtotal={subtotal()}
          discount={discount()}
        />
      )}
    </div>
  );
}