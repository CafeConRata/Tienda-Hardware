import axios from "axios";
import { useState } from "react";
import "../style/RegistrarProducto.css"

export default function LoginForm() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                Email,
                Password,
            });

            const { token, mensaje } = response.data;
            localStorage.setItem("authToken", token);
            setSuccess(mensaje);
        } catch (err) {
            setError(err.response?.data?.error || "Error al iniciar sesión");
        }
    };

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="form-box">
                <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Entrar</button>
            </form>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}
        </div>
    );
}
