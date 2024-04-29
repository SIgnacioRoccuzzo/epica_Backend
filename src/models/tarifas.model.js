const { model, Schema } = require('mongoose');

const TarifasSchema = new Schema({
    type: String,
    name: String,
    data: String,
    price: Number,
}, { timestamps: true, versionKey: false });

module.exports = model('tarifas', TarifasSchema);