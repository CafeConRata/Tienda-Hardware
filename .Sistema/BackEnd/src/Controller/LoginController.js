const db = require('../DataBase/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Login (req, res) {
    const { Email, Password } = req.body;

    try {
        // 1. Buscar usuario
        const sql = "SELECT * FROM usuarios WHERE Email = ?";
        db.query(sql, [Email], async (err, result) => {
            if (err) return res.status(500).json({ error: "Error en el servidor" });

            if (result.length === 0) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            const usuario = result[0];

            // 2. Validar contraseña
            const passwordValida = await bcrypt.compare(Password, usuario.password);

            if (!passwordValida) {
                return res.status(401).json({ error: "Contraseña incorrecta" });
            }

            // 3. Revisar si el email está verificado
            if (usuario.verificado === 0) {
                return res.status(401).json({ error: "Debes verificar tu email antes de iniciar sesión" });
            }

            // 4. Crear token JWT
            const token = jwt.sign(
                { id: Id.usuario, EmaiL: usuario.email },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );

            return res.status(200).json({
                mensaje: "Login exitoso",
                token: token
            });
        });

    } catch (error) {
        return res.status(500).json({ error: "Error al iniciar sesión" });
    }
}

module.exports = { Login };