const db = require('../DataBase/db')

const RegistrarUsuario = (req,res) =>{
    try{
        const{User,Name,Password}=req.body;
        if(!User || !Name || !Password){
           return res.status(401).json({Error: 'Campos Vacios'})
        }

        const query = `INSERT INTO Usuarios(User,Name,Password)VALUES(?,?,?)`

        db.run(query,[User,Password,Name],(Error)=>{
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