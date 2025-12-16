import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./Cart";

export default function CarritoPage() {
    const [items, setItems] = useState([]);
    const [showCart, setShowCart] = useState(true);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchCarrito = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/carrito/carrito", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const adaptados = res.data.map((item) => ({
                    id: item.Id_carrito,
                    name: item.Nombre,
                    price: item.Precio,
                    quantity: item.Cantidad,
                    image: <img src={item.Imagen || "/default.jpg"} alt={item.Nombre} />,
                }));

                setItems(adaptados);
            } catch (err) {
                console.error("Error al obtener carrito:", err);
            }
        };

        fetchCarrito();
    }, []);

    const handleRemove = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/carrito/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setItems(items.filter((item) => item.id !== id));
        } catch (err) {
            console.error("Error al eliminar producto:", err);
        }
    };

    const handleUpdateQuantity = async (id, newQuantity) => {
        try {
            await axios.put(
                `http://localhost:3000/api/carrito/${id}`,
                { cantidad: newQuantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setItems(
                items.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (err) {
            console.error("Error al actualizar cantidad:", err);
        }
    };

    return (
        <>
            {showCart && (
                <Cart
                    items={items}
                    onRemove={handleRemove}
                    onUpdateQuantity={handleUpdateQuantity}
                    onClose={() => setShowCart(false)}
                />
            )}
        </>
    );
}
