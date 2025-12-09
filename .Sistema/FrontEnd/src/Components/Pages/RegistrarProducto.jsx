import { useState } from "react";
import axios from "axios";
import "../style/RegistrarProducto.css";

export default function RegistrarProducto() {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3001/cargar/CargarUnProducto",
                formData
            );

            alert("Producto agregado correctamente");
            console.log(response.data);

        } catch (error) {
            console.error("Error al guardar el producto:", error);
            alert("Hubo un error al cargar el producto");
        }
    };

    return (
        <div className="form-container">
            <h2>Registrar Producto</h2>

            <form onSubmit={handleSubmit} className="form-box">
                <input name="nombre" onChange={handleChange} placeholder="Nombre" />
                <input name="descripcion" onChange={handleChange} placeholder="Descripción" />
                <input name="precio" onChange={handleChange} placeholder="Precio" type="number" />
                <input name="stock" onChange={handleChange} placeholder="Stock" type="number" />
                <input name="imagen" onChange={handleChange} placeholder="URL de imagen" />

                <button type="submit">Registrar producto</button>
            </form>
        </div>
    );
}
