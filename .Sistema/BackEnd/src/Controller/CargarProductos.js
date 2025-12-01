const db = require('../DataBase/db');

const CargarProducto = async (req, res) => {
    try {
        const { Nombre, Descripcion, Precio, Stock } = req.body;

        // 1. Validar campos obligatorios
        if (!Nombre || !Descripcion || !Precio || !Stock) {
            return res.status(400).json({
                Error: 'Todos los campos son obligatorios'
            });
        }

        // 2. Validar tipos de datos
        if (isNaN(Precio) || Precio <= 0) {
            return res.status(400).json({
                Error: 'El precio debe ser un número mayor a 0'
            });
        }

        if (isNaN(Stock) || Stock < 0) {
            return res.status(400).json({
                Error: 'El stock debe ser un número mayor o igual a 0'
            });
        }

        // 3. Verificar si ya existe un producto con el mismo nombre
        const queryBuscar = 'SELECT * FROM Productos WHERE Nombre = ?';
        db.get(queryBuscar, [Nombre], (Error, productoExistente) => {

            if (Error) {
                console.error('Error al buscar el producto:', Error);
                return res.status(500).json({
                    message: 'Error Interno: Server'
                });
            }

            if (productoExistente) {
                return res.status(409).json({
                    message: 'El producto ya existe'
                });
            }

            // 4. Insertar producto si no existe
            const query ='INSERT INTO Productos (Nombre, Descripcion, Precio, Stock) VALUES (?,?,?,?)';

            db.run(query,
                [Nombre, Descripcion, Precio, Stock],
                function (Error) {

                    if (Error) {
                        console.error('Error al insertar el producto:', Error);
                        return res.status(500).json({
                            message: 'Error interno del servidor'
                        });
                    }

                    return res.status(201).json({
                        message: 'Producto cargado exitosamente',
                        ID: this.lastID,
                        Nombre,
                        Descripcion,
                        Precio,
                        Stock
                    });
                }
            );
        });

    } catch (error) {
        console.error('Error en la carga del producto:', error);
        return res.status(500).json({
            Error: 'Error Interno: Server'
        });
    }
};

const ActualizarProducto = (req, res) => {
    const { Id_producto } = req.params
    const { Nombre, Descripcion, Precio, Stock } = req.body

    const query = `
        UPDATE Productos 
        SET Nombre = ?, Descripcion = ?, Precio = ?, Stock = ?
        WHERE Id_producto = ?
    `

    db.run(query,
        [Nombre, Descripcion, Precio, Stock],
        function (error) {
            if (error) {
                return res.status(500).json({ error: "Error al actualizar producto" })
            }

            if (this.changes === 0) {
                return res.status(404).json({ error: "Producto no encontrado" })
            }

            return res.status(200).json({ message: "Producto actualizado correctamente" })
        }
    )
}

module.exports = { CargarProducto, ActualizarProducto };