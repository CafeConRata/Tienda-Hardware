const SQLite3 = require('sqlite3')

const Ruta = require('path')

const SQLite3_Ubicacion = Ruta.resolve(__dirname, './BaseDeDatos.db')

const db_crear = new SQLite3.Database(SQLite3_Ubicacion, (Error) => {
    if (Error) {
        console.error('No se pudo crear correctamente la base de datos')
    }
    else {
        console.log('Se creo correctamente la base de datos')
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
                    console.error('Error al crea la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Productos creada con Exito')
                }
               

            }
        )

        db_crear.run(
            `
            CREATE TABLE IF NOT EXISTS Categorias(
                 Id INTEGER PRIMARY KEY AUTOINCREMENT,
                 Nombre TEXT UNIQUE NOT NULL,
                 Descripcion TEXT
            )`, (Error) => {
                if (Error) {
                    console.error('Error al crea la tabla debido a:', Error)
                }
                else {
                    console.log('Tabla Categorias creada con Exito')
                }
               

            }
        )

        
    }
})