const Tarifas = require('../models/tarifas.model');

const getTarifas = async (req, res) => {
    try {
        const tarifas = await Tarifas.find();

        res.json(tarifas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tarifas', error });
    }
};


const getById = async (req, res) => {
    try {
        const { tarifasId } = req.params;

        const tarifa = await Tarifas.findById(tarifasId);

        if (!tarifa) {
            return res.status(404).json({ message: 'Tarifa no encontrada' });
        }

        res.json(tarifa);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarifa', error });
    }
};


const createTarifa = async (req, res) => {
    const newTarifa = await Tarifas.create(req.body);
    res.json(newTarifa);
}



const updateTarifa = async (req, res) => {
    const { tarifasId } = req.params;
    const updatedTarifa = await Tarifas.findByIdAndUpdate(tarifasId, req.body, { new: true });
    res.json(updatedTarifa);
}


const getByName = async (req, res) => {
    try {
        const { tarifasName } = req.params;

        const tarifas = await Tarifas.find({ name: tarifasName });

        if (!tarifas || tarifas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tarifas con ese nombre' });
        }

        res.json(tarifas);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar tarifas por nombre', error });
    }
};

const getBytype = async (req, res) => {
    try {
        const { tarifastype } = req.params;

        const tarifas = await Tarifas.find({ type: tarifastype });

        if (!tarifas || tarifas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tarifas con ese tipo' });
        }

        res.json(tarifas);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar tarifas por tipo', error });
    }
};

const deleteTarifa = async (req, res) => {
    const { tarifaId } = req.params;
    const delTarifa = await Tarifas.findByIdAndDelete(tarifaId);
    res.json(delTarifa);
}


const getByData = async (req, res) => {
    try {
        const { tarifasData } = req.params;

        const tarifas = await Tarifas.find({ data: tarifasData });

        if (!tarifas || tarifas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tarifas con esa data' });
        }

        res.json(tarifas);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar tarifas por tipo', error });
    }
};

const getTarifasByTypeAndData = async (req, res) => {
    try {
        const { type, data } = req.params; // obtenemos type y data de los parámetros de la URL

        // Buscar en la base de datos tarifas donde el type y data coincidan con los valores proporcionados
        const tarifas = await Tarifas.find({ type, data });

        if (tarifas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tarifas con esos criterios' });
        }

        // Devuelve las tarifas encontradas
        res.json(tarifas);
    } catch (error) {
        console.error('Error al buscar tarifas:', error); // Mensaje para depuración
        res.status(500).json({ message: 'Error al buscar tarifas', error });
    }
};







module.exports = {
    getTarifas, getById, createTarifa, updateTarifa, getByName, getBytype, deleteTarifa, getByData, getTarifasByTypeAndData
}