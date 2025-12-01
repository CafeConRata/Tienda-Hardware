import Header from './Global/Header'
import './Layouts.css'
import Footer from './Global/Footer'
// import Cart from './Global/Cart'
import Hero from './Global/Hero'
// import ProductGrid from './Global/ProductGrid'
// import ProductCard from "./Global/ProductCard"
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react'
// import { RegistrarUsuario } from '../backend/api'

function Layouts() {
    return (
        <>
        <Router>
            <Header />
            {/* Sobre el Encabezado Indicamos las rutas */}
            <Routes>
                {/* Indicamos la Ruta de Navegacion */}
                <Route path="/VerTabla" element={<VerTabla />} />
                <Route path="/RegistrarAlumnos" element={<RegistrarAlumnos />} />
            </Routes>
        </Router>
            <Header />
            <Hero />    
            <Footer />
            {/* <Cart /> */}
            {/* <ProductCard /> */}
            {/* <ProductGrid /> */}
        </>
    )
}

export default Layouts