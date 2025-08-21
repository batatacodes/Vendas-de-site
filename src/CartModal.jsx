import React from "react";

function formatPrice(price) {
  return "R$ " + price.toFixed(2).replace(".", ",");
}

export default function CartModal({ cart, onClose, onRemove, subtotal, discount }) {
  return (
    <div className="cart-modal-bg" tabIndex={-1} onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} title="Fechar">×</button>
        <h3>Seu Carrinho</h3>
        <div className="cart-list">
          {cart.length === 0 && <div style={{color:'#fff8',textAlign:'center',padding:'43px 7px'}}>Seu carrinho está vazio.</div>}
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} className="cart-item-img" alt={item.title}/>
              <div className="cart-item-title">{item.title}</div>
              <span className="cart-item-price">{formatPrice(item.price)}</span>
              <button className="cart-item-remove" onClick={() => onRemove(item.id)} title="Remover do carrinho">×</button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-row">
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="cart-row" style={{color:'#fff700'}}>
            <span>Desconto aplicado:</span>
            <span>-{formatPrice(discount)}</span>
          </div>
          <div className="cart-row total">
            <span>Total:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}