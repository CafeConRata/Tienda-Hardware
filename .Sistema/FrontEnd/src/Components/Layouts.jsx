import Header from './Global/Header'
import './Layouts.css'
import Footer from './Global/Footer'
// import Cart from './Global/Cart'
import Hero from './Global/Hero'
// import ProductGrid from './Global/ProductGrid'
// import ProductCard from "./Global/ProductCard"
import axios from 'axios'
import { useState } from 'react'
// import { RegistrarUsuario } from '../backend/api'

function Layouts() {

    const [User,setUser]=useState("")
    const [Password, setPassword]=useState("")
    const [Name, setName]=useState("")
    const [Email, setEmail]=useState("")

    const [Mensaje, setMensaje]=useState("")

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
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Usuario</label>
                <input type="text" name="Usuario" id="Usuario" value={User} onChange={e=> setUser(e.target.value)}/>

                <label htmlFor="">Email</label>
                <input type="text" name="Email" id="Email" value={Email} onChange={e=> setEmail(e.target.value)}/>

                <label htmlFor="">Nombre</label>
                <input type="text" name="Nombre" id="Nombre" value={Name} onChange={e=> setName(e.target.value)}/>

                <label htmlFor="">Contraseña</label>
                <input type="password" name="Contraseña" id="Contraseña" value={Password} onChange={e=> setPassword(e.target.value)}/>

                <input type="submit" value="Registrar" />

            </form>

            {Mensaje && <h1 style={{color:'green'}}></h1>}
            <Header />
            <Hero />    
            <Footer />
            {/* <Cart /> */}
            {/* <ProductCard /> */}
            {/* <ProductGrid /> */}
        </>
    )
}

export default Layouts