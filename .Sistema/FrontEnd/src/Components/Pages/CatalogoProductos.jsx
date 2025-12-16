function CatalogoProductos({ productos }) {
    return (
        <div className="catalogo-container">
            <div className="catalogo-grid">
                {productos.map((producto, index) => (
                    <div key={index} className="catalogo-card">
                        <img src={producto.Imagen} alt={producto.Nombre} />
                        <div className="catalogo-card-body">
                            <h3 className="catalogo-card-title">{producto.Nombre}</h3>
                            <p className="catalogo-card-desc">{producto.Descripcion}</p>
                            <div className="catalogo-card-info">
                                <span className="catalogo-card-price">${producto.Precio}</span>
                                <span className="catalogo-card-stock">Stock: {producto.Stock}</span>
                            </div>
                            <button disabled={producto.Stock === 0}>
                                {producto.Stock === 0 ? "Sin stock" : "Agregar al carrito"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CatalogoProductos