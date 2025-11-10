// ---> Sirve para encriptar las contraseñas de los usuarios
const Encriptar= require('bcrypt')
// ---> Numero de saltos para encriptar la contraseña
const Salto=10;

// ----> Funcion para encriptar la contraseña
const EncriptarPassword= async (Password)=>{
    // ---> Generar el salto y encriptar la contraseña
    const Seguridad= await Encriptar.genSalt(Salto)
    // ---> Retornar la contraseña encriptada
    return Encriptar.hash(Password,Seguridad)
}
//  ----> Funcion para desencriptar la contraseña
const DesincriptarPassword= async (Password,hash)=>{
    // ---> Retornar si la contraseña coincide con el hash
    return Encriptar.compare(Password,hash)
}

module.exports={EncriptarPassword,DesincriptarPassword}