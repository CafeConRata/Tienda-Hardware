import { useState } from "react";
import axios from "axios";
import "../style/RegistrarProducto.css";

export default function RegistrarProducto() {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
    });
    const [imagen, setImagen] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setImagen(e.target.files[0]); // guardamos el archivo seleccionado
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("nombre", formData.nombre);
            data.append("descripcion", formData.descripcion);
            data.append("precio", formData.precio);
            data.append("stock", formData.stock);
            data.append("imagen", imagen);

            const response = await axios.post(
                "http://localhost:3001/cargar/CargarUnProducto",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
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
                <label className="custom-file-upload">
                    <input type="file" name="imagen" accept="image/*" onChange={handleFileChange} />
                    Seleccionar imagen
                </label>

                <button type="submit">Registrar producto</button>
            </form>
        </div>
    );
}
