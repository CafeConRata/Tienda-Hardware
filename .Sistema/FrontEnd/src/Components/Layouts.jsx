import Footer from './Global/Footer';
import Hero from './Global/Hero';
import Header from './Global/Header';
import Register from './Pages/Register.jsx';
import './Layouts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Layouts() {
    return (
        <Router>
            <Header />
            <Hero />
                <Routes>
                    <Route path="/RegistrarUser" element={<Register />} />
                </Routes>
            <Footer />
        </Router>
);
}

export default Layouts;