const SQLite3 = require('sqlite3')
const Ruta = require('path')
const SQLite3_Ubicacion = Ruta.resolve(__dirname, './BaseDeDatos.db')

const db_crear = new SQLite3.Database(SQLite3_Ubicacion, (Error) => {
    if (Error) {
        console.error('No se pudo crear correctamente la base de datos')
    }
    else {
        console.log('Se creo correctamente la base de datos')
        // ----> Tabla para los datos de los usuarios que se registren
        db_crear.run(
            `
                CREATE TABLE IF NOt EXISTS Usuarios(

                     Id INTEGER PRIMARY KEY AUTOINCREMENT,
                     User TEXT UNIQUE,
                     Name TEXT,
                     Email TEXT,
                     Password TEXT,
                     Rol TEXT
            
                )`, (Error) => {
            if (Error) {
                console.error('Error al crear la tabla debido a:', Error)
            }
            else {
                console.log('Tabla creada correctamente')
            }

             }

        )

        // ----> Tabla para los datos de los productos

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Productos(
                 Id INTEGER PRIMARY KEY AUTOINCREMENT,
                 Nombre TEXT NOT NULL,
                 Descripcion TEXT,
                 Precio REAL NOT NULL,
                 Stock INTEGER NOT NULL
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Productos creada con Exito')
                }
               

            }
        )

        // ----> Tabla para diferencias los productos por categoria

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Categorias(
                 Id INTEGER PRIMARY KEY AUTOINCREMENT,
                 Nombre TEXT UNIQUE NOT NULL,
                 Descripcion TEXT
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Categorias creada con Exito')
                }
               

            }
        )

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Inventario(
                 Id_inventario INTEGER PRIMARY KEY AUTOINCREMENT,
                 Id_producto INTEGER
                 Cantidad_Disponible INTEGER NOT NULL,
                 Ubicacion TEXT,
                 Fecha_Actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP,
                 Stock_minimo INTEGER,
                 FOREIGN KEY (Id_producto) REFERENCES Productos(Id_producto)

            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Inventario creada con Exito')
                }
               

            }
        )

            db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Carrito(
                 Id_carrito INTEGER PRIMARY KEY AUTOINCREMENT,
                 Id_usuario INTEGER,
                 Fecha_Creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
                 FOREIGN KEY (Id_usuario) REFERENCES Productos(Id_usuario)

            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Carrito creada con Exito')
                }
               

            }
        )

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Detalles_del_Carrito(
                 Id_detalle INTEGER PRIMARY KEY AUTOINCREMENT,
                 Id_carrito INTEGER,
                 Id_producto INTEGER,
                 Cantidad INTEGER NOT NULL,
                 FOREIGN KEY (Id_carrito) REFERENCES Carrito(Id_carrito),
                 FOREIGN KEY (Id_producto) REFERENCES Productos(Id_producto)
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Detalles_del_Carrito creada con Exito')
                }
               

            }
        )

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Email(
                 Id_email INTEGER PRIMARY KEY AUTOINCREMENT,
                 Email TEXT,
                 Asunto TEXT,
                 Cuerpo TEXT
 
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla creada con Exito')
                }
               

            }
        )

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Roles(
                 Id_rol INTEGER PRIMARY KEY AUTOINCREMENT,
                 Rol TEXT NOT NULL UNIQUE
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crear la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Roles creada con Exito')
                }
               

            }
        )
        
        
    }
})

module.exports= db_crear;