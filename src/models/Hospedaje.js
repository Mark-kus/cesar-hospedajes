import { Schema, model, models } from "mongoose";

const hospedajeSchema = new Schema({
    ubicacion: String,
    precio: Number,
    descripcion: String,
}, {
    timestamps: true,
    versionKey: false,
});

// Si ya existe, que lo exporte, sino, que lo cree
export default models.Hospedaje || model('Hospedaje', hospedajeSchema);