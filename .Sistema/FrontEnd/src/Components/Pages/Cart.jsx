import "../style/Cart.css"

function Cart({ items, onRemove, onUpdateQuantity, onClose }) {

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal slide-in" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Tu carrito está vacío</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  
                  <div className="item-image">{item.image}</div>

                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="item-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button className="remove-btn" onClick={() => onRemove(item.id)}>🗑️</button>

                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="btn btn-outline" onClick={onClose}>
                Seguir comprando
              </button>
              <button className="btn btn-secondary">Proceder al pago</button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart