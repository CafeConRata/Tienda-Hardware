import Header from './Global/Header'
import './Layouts.css'
import Footer from './Global/Footer'
import Cart from './Global/Cart'
import Hero from './Global/Hero'
import ProductGrid from './Global/ProductGrid'
import ProductCard from "./Global/ProductCard"

function Layouts() {
    return (
        <>
            <Header />
            <Footer />
            <Cart />
            <Hero />
            <ProductCard />
            <ProductGrid />
        </>
    )
}

export default Layouts