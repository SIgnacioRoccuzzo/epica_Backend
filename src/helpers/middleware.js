const express = require('express');
const router = express.Router();
const tarifasController = require('../../controllers/tarifas.controller');

// Función para convertir cadenas a formato URL-friendly
function toUrlFriendly(text) {
    const lowerCaseText = text.toLowerCase();
    const withHyphens = lowerCaseText.replace(/\s+/g, '-');
    const sanitized = withHyphens.replace(/[^a-z0-9-]/g, '');
    return sanitized;
}

// Middleware para convertir el parámetro "tarifasName" a formato URL-friendly
function urlFriendlyMiddleware(req, res, next) {
    if (req.params.tarifasName) {
        req.params.tarifasName = toUrlFriendly(req.params.tarifasName);
    }
    next();
}

// Aplica el middleware antes de las rutas que lo necesiten
router.use('/name/:tarifasName', urlFriendlyMiddleware);


module.exports = router;
