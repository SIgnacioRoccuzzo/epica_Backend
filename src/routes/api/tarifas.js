const router = require('express').Router();
const tarifasController = require('../../controllers/tarifas.controller');

// Obtener todas las tarifas
router.get('/', tarifasController.getTarifas);

//obtener por id
router.get('/:tarifasId', tarifasController.getById);

// Obtener por tipo
router.get('/type/:tarifastype', tarifasController.getBytype);

// Obtener por nombre
router.get('/name/:tarifasName', tarifasController.getByName);

// Obtener por datos
router.get('/data/:tarifasData', tarifasController.getByData);

// Obtener por tipo y datos
router.get('/type/:type/data/:data', tarifasController.getTarifasByTypeAndData);

//Crear tarifa
router.post('/', tarifasController.createTarifa);
//Actualizar Tarifas
router.put('/:tarifasId', tarifasController.updateTarifa);
//Borrar tarifas
router.delete('/:tarifaId', tarifasController.deleteTarifa);

module.exports = router;
