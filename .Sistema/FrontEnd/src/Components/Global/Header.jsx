import { useState } from "react";
import LogoTipo from '../../../../../Marketing/TechStore/TechStore Reducido/1x/Mesa de Trabajo 1@1x.png'
import { Link } from 'react-router-dom';

function Header({ cartCount }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // ← carrito toggle

  return (
    <>
      <header className="header">
        <div className="container">

          <div className="header-content">

            <div className="logo">
              <img src={LogoTipo} alt="" title="Logo" className="logo-icon" />
            </div>

            <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
              <Link to="/Inicio">Home</Link>
              <Link to="/RegistrarUser">Register</Link>
            </nav>

            <div className="header-actions">

              {/* BOTÓN DEL CARRITO */}
              <button 
                className="cart-button"
                onClick={() => setIsCartOpen(!isCartOpen)} // ← toggle del carrito
              >
                <span className="cart-icon">🛒</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>

              {/* BOTÓN HAMBURGUESA */}
              <button 
                className="menu-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>

            </div>
          </div>

          {/* PANEL DEL CARRITO */}
          {isCartOpen && (
            <aside className="cart-sidebar">
              <h2>Tu Carrito</h2>
              <p>Aquí irían los productos agregados</p>

              <button 
                onClick={() => setIsCartOpen(false)}
                className="close-cart"
              >
                Cerrar
              </button>
            </aside>
          )}

        </div>
      </header>
    </>
  );
}

export default Header;