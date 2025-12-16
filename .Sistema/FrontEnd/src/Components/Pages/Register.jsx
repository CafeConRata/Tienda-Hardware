import { useState } from "react";
import axios from "axios";
import "../style/RegistrarProducto.css";
import { Link } from "react-router-dom";

export default function Register() {
    const [User, setUser] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje("");
        try {
            const Router = await axios.post("http://localhost:3000/api/RegistrarUser", {
                User,
                Name,
                Password,
                Email,
            });
            setMensaje(Router.data.message || "Datos registrados correctamente");
            setPassword("");
            setUser("");
            setName("");
            setEmail("");
        } catch (error) {
            setMensaje("No se puede registrar el usuario ✖️");
        }
    };

    return (
        <div className="form-container">
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSubmit} className="form-box">
                <input
                    type="text"
                    value={User}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Usuario"
                    required
                />
                <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre completo"
                    required
                />
                <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Registrar</button>
            </form>

            {Mensaje && (
                <p style={{ textAlign: "center", marginTop: "10px" }}>{Mensaje}</p>
            )}

            <div className="registration-footer">
                <p className="footer-text">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/LoginForm" className="footer-link">
                        Inicia sesión
                    </Link>
                </p>
            </div>

        </div>
    );
}
