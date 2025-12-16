const verificarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario || !rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({ error: "No tenés permisos" });
        }
        next();
    };
};

module.exports = { verificarRol };