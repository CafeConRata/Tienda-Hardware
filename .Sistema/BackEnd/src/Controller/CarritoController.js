const db = require('../DataBase/db');

const AgregarAlCarrito = (req, res) => {
    const { Id_producto, Nombre, Cantidad, Precio } = req.body;

    if (!Id_producto || !Nombre || !Cantidad || !Precio) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const Total = Precio * Cantidad;

    // Ver si el producto ya está en el carrito
    db.get(
        "SELECT * FROM Carrito WHERE Id_producto = ?",
        [Id_producto],
        (error, producto) => {
            if (error) {
                return res.status(500).json({ error: "Error servidor" });
            }

            if (producto) {
                // Actualizar cantidad y total
                const nuevaCantidad = producto.Cantidad + Cantidad;
                const nuevoTotal = nuevaCantidad * Precio;

                db.run(
                    `UPDATE Carrito 
                     SET Cantidad = ?, Total = ? 
                     WHERE Id_producto = ?`,
                    [nuevaCantidad, nuevoTotal, Id_producto],
                    () => res.json({ mensaje: "Producto actualizado en el carrito" })
                );
            } else {
                // Insertar producto nuevo
                db.run(
                    `INSERT INTO Carrito 
                     (Id_producto, Nombre, Cantidad, Total, Fecha_Creacion)
                     VALUES (?, ?, ?, ?, datetime('now'))`,
                    [Id_producto, Nombre, Cantidad, Total],
                    () => res.json({ mensaje: "Producto agregado al carrito" })
                );
            }
        }
    );
};

const verCarrito = (req, res) => {
    db.all(
        "SELECT * FROM Carrito",
        [],
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error: "Error al obtener carrito" });
            }
            res.json({ carrito: rows });
        }
    );
};

module.exports = { AgregarAlCarrito, verCarrito };