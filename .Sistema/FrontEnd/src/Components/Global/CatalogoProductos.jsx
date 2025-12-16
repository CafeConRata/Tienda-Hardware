import axios from "axios";

export default function CatalogoProductos({ productos }) {
    const agregarAlCarrito = async (producto) => {
        try {
            const token = localStorage.getItem("authToken");
            await axios.post(
                "http://localhost:3000/api/carrito/agregar",
                {
                    productoId: producto.Id,
                    cantidad: 1,
                    nombre: producto.Nombre
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert("Producto agregado al carrito ✅");
        } catch (error) {
            console.error("Error al agregar al carrito:", error);
            alert("No se pudo agregar al carrito ❌");
        }
    };
    return (
        <div className="catalogo-container">
            <div className="catalogo-grid">
                {productos.map((producto, index) => (
                    <div key={index} className="catalogo-card">
                        <img src={producto.Imagen} alt={producto.Nombre} className="catalogo-card-img" />
                        <div className="catalogo-card-body">
                            <h3 className="catalogo-card-title">{producto.Nombre}</h3>
                            <p className="catalogo-card-desc">{producto.Descripcion}</p>
                            <div className="catalogo-card-info">
                                <span className="catalogo-card-price">${producto.Precio}</span>
                                <span className="catalogo-card-stock">Stock: {producto.Stock}</span>
                            </div>
                            <button
                                disabled={producto.Stock === 0}
                                onClick={() => agregarAlCarrito(producto)}
                            >
                                {producto.Stock === 0 ? "Sin stock" : "Agregar al carrito"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

