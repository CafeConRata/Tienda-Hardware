import { useState } from "react";
import axios from 'axios'
import "../style/Register.css"


export default function Register() {

    const [User, setUser] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Mensaje, setMensaje] = useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // Limpiar los mensajes del back
        setMensaje('')
        try{
            const Router=await axios.post('http://localhost:3000/api/RegistrarUser',{
                User, 
                Name, 
                Password, 
                Email
            })
            setMensaje(Router.data.message || 'Datos registrados correctamente')
            setPassword('');
            setUser('');
            setName('');
            setEmail('');
        }
        catch(error){
            setMensaje('No se puede registrar el usuario ✖️')
        }
};

return (
    <>
    <main className="registration-container">
        <div className="registration-wrapper">
            <div className="registration-card">
                <div className="registration-header">
                    <h1 className="registration-title">Crear Cuenta</h1>
                    <p className="registration-subtitle">Completa el formulario para registrarte</p>
                </div>

                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label htmlFor="user" className="form-label">
                        Usuario
                        </label>
                        <input
                        id="user"
                        type="text"
                        value={User}
                        onChange={(e) => setUser(e.target.value)}
                        className="form-input"
                        placeholder="Ingresa tu usuario"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        placeholder="tu@email.com"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                        Nombre
                        </label>
                        <input
                        id="name"
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        placeholder="Tu nombre completo"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                        Contraseña
                        </label>
                        <input
                        id="password"
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        placeholder="••••••••"
                        required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                    Registrar
                    </button>
                </form>

                <div className="registration-footer">
                    <p className="footer-text">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="#" className="footer-link">
                    Inicia sesión
                    </a>
                    </p>
                </div>
            </div>
        </div>
    </main>
    </>
    );
}

