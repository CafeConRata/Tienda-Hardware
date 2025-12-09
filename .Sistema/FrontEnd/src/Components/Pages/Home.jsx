import "../style/Home.css";

function Hero() {
    return (
        <section className="hero">
            <h1>TechStore — Tu tienda de hardware de confianza</h1>
            <p>
                Descubre los mejores componentes de hardware al mejor precio.
                Calidad garantizada y envío rápido.
            </p>
            <button>Ver Productos</button>
        </section>
    );
}

function Categories() {
    const categories = [
        { id: 1, title: "Placas de Video", image: "https://placeholder.svg?height=200&width=300&query=graphics%20card" },
        { id: 2, title: "Procesadores", image: "https://placeholder.svg?height=200&width=300&query=CPU%20processor" },
        { id: 3, title: "Motherboards", image: "https://placeholder.svg?height=200&width=300&query=motherboard" },
        { id: 4, title: "Periféricos", image: "https://placeholder.svg?height=200&width=300&query=peripherals%20keyboard%20mouse" },
    ];

    return (
        <section className="categories-section">
            <h2>Categorías Principales</h2>
            <div className="categories-grid">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <img src={category.image} alt={category.title} />
                        <h3>{category.title}</h3>
                        <button>Explorar</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FeaturedProducts() {
    const products = [
        { id: 1, title: "RTX 4070 Super", price: "$799.99", image: "https://placeholder.svg?height=250&width=250&query=RTX%204070%20graphics%20card" },
        { id: 2, title: "Intel Core i9-14900K", price: "$589.99", image: "https://placeholder.svg?height=250&width=250&query=Intel%20Core%20i9%20processor" },
        { id: 3, title: "ASUS ROG Maximus Z890", price: "$489.99", image: "https://placeholder.svg?height=250&width=250&query=ASUS%20motherboard%20Z890" },
        { id: 4, title: "Corsair K95 Platinum", price: "$199.99", image: "https://placeholder.svg?height=250&width=250&query=Corsair%20mechanical%20keyboard" },
    ];

    return (
        <section className="featured-section">
            <h2>Productos Destacados</h2>
            <div className="featured-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <button>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

function PromoBanner() {
    return (
        <section className="promo-banner">
            <h2>Ofertas de Verano</h2>
            <p>¡Hasta 30% OFF en componentes seleccionados!</p>
            <button>Comprar Ahora</button>
        </section>
    );
}

function TrustSection() {
    const trustItems = [
        { id: 1, title: "Envíos a todo el país", icon: "🚚" },
        { id: 2, title: "Garantía oficial", icon: "✅" },
        { id: 3, title: "Atención 24/7", icon: "💬" },
    ];

    return (
        <section className="trust-section">
            {trustItems.map((item) => (
                <div key={item.id} className="trust-item">
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>Nos comprometemos a brindarte la mejor experiencia de compra.</p>
                </div>
            ))}
        </section>
    );
}

export default function Home() {
    return (
        <div className="home-container">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <PromoBanner />
            <TrustSection />
        </div>
    );
}