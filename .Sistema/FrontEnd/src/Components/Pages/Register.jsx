import { useState } from "react";
import axios from 'axios'


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
        <form onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="text" value={User} onChange={(e) => setUser(e.target.value)} />

            <label>Email</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />

            <label>Nombre</label>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />

            <label   label>Contraseña</label>
            <input type="password" value={Password} onChange={(e)=> setPassword(e.target.value)} />

            <input type="submit" value="Registrar"/>
        </form>

        {Mensaje && <h1 style={{color:'green'}}>{Mensaje}</h1>}
        </>
    );
}

