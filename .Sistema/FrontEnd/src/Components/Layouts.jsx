import Footer from './Global/Footer';
// import Hero from './Global/Hero';
import Header from './Global/Header';
import Register from './Pages/Register.jsx';
import Cart from './Pages/Cart.jsx';
import './Layouts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home.jsx';

function Layouts() {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/Inicio" element={<Home />} />
                    <Route path="/RegistrarUser" element={<Register />} />
                    <Route path="/Carrito" element={<Cart />} />
                </Routes>
            <Footer />
        </Router>
);
}

export default Layouts;