import { useState } from "react"
import LogoTipo from '../../../../../Marketing/TechStore/TechStore Reducido/1x/Mesa de Trabajo 1@1x.png'
import { Link } from 'react-router-dom';

function Header({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                  <img src={LogoTipo} alt="" title="Logo" className="logo-icon" />
                    {/* <span className="logo-icon">⚙️</span> */} 
                </div>

                <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/">Home</Link>
                    <Link to="/Register">Register</Link>
                </nav>

                <div className="header-actions">
                    <button className="cart-button" onClick={onCartClick}>
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>
                </div>
            </div>
        </div>
      </header> 
    </>
  )
}

export default Header
