const db = require('../DataBase/db');

const AgregarAlCarrito = (req, res) => {
    const { Id_producto, Cantidad } = req.body;
    const Id_usuario = req.usuario.id; // desde JWT
    console.log(req.body)

    if (!Id_producto || !Cantidad) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    // // // 1. Buscar carrito
    db.get(
        "SELECT * FROM Carrito WHERE Id_usuario = ?",
        [Id_usuario],
        (error, carrito) => {
            if (error) return res.status(500).json({ error: "Error servidor" });

            if (!carrito) {
                // 2. Crear carrito
                db.run(
                    "INSERT INTO Carrito (Id_usuario, Fecha_Creacion) VALUES (?, datetime('now'))",
                    [Id_usuario],
                    function (error) {
                        if (error) return res.status(500).json({ error: "Error creando carrito" });

                        agregarDetalle(this.lastID);
                    }
                );
            } else {
                agregarDetalle(carrito.Id_carrito);
            }
        }
    );

    function agregarDetalle(Id_carrito) {
        db.get(
            "SELECT * FROM detalles_de_Carrito WHERE Id_carrito = ? AND Id_producto = ?",
            [Id_carrito, Id_producto],
            (error, detalle) => {
                if (error) return res.status(500).json({ error: "Error servidor" });

                if (detalle) {
                    db.run(
                        "UPDATE detalles_de_Carrito SET Cantidad = Cantidad + ? WHERE Id_carrito = ? AND Id_producto = ?",
                        [Cantidad, Id_carrito, Id_producto],
                        () => res.json({ mensaje: "Cantidad actualizada" })
                    );
                } else {
                    db.run(
                        "INSERT INTO detalles_de_Carrito (Id_carrito, Id_productos, Cantidad) VALUES (?, ?, ?)",
                        [Id_carrito, Id_producto, Cantidad],
                        () => res.json({ mensaje: "Producto agregado al carrito" })
                    );
                }
            }
        );
    }
};

const verCarrito = (req, res) => {
    const idUsuario = req.usuario.id;

    const sql = `
        SELECT 
            Productos.Id_producto,
            Productos.Nombre,
            Productos.Precio,
            Detalles_del_Carrito.Cantidad
        FROM Carrito c
        JOIN Detalles_del_Carrito ON Carrito.Id_carrito = Detalles_del_Carrito.Id_carrito
        JOIN Productos ON Detalles_del_Carrito.Id_producto = Productos.Id_producto
        WHERE Carrito.Id_usuario = ?
    `;

    db.all(sql, [idUsuario], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener carrito' });
        }

        return res.json({ carrito: rows });
    });
};

module.exports = { AgregarAlCarrito, verCarrito };