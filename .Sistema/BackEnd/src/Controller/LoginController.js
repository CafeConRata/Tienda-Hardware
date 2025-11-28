const db = require('../DataBase/db')
const {EncriptarPassword} = require('../Utils/HashPassword')

const RegistrarUsuario = (req,res) =>{
    try{
        const{User,Name,Password}=req.body;
        if(!User || !Name || !Password){
           return res.status(401).json({Error: 'Campos Vacios'})
        }
        
        const query2 = `SELECT * FROM Usuarios WHERE User=?`
        db.get(query2,[User],async (Error,Usuario)=>{
            if(Error){
                console.error('Error al buscar al usuario debido a :',Error)
                return res.status(500).json({Errror: 'Error Interno: Server'})
            }
            if(Usuario){
                return res.status(401).json({Error: 'El Usuario ya existe'})
            }
        })
        


        const hash = EncriptarPassword(Password)
        const query = `INSERT INTO Usuarios(User,Name,Password)VALUES(?,?,?)`

        db.run(query,[User,hash,Name],(Error)=>{
            if(Error){
                console.error('No se pudo insertar un Nuevo usuario debido a :',Error)
                return res.status(401).json({Error: 'Error al crear ususario,Verifique los datos'})
            }
            else{
                return res.status(201).json({
                    mensaje:'Usuario Registrado Correctamente',
                    ID: this.lastID,
                    Usuario
                })
            }
        })
    }
    catch(error){
        return res.status(500).json({Error: 'Error Interno: Server'})

    }

}

module.exports={RegistrarUsuario}