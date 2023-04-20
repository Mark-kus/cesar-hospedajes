import Hospedaje from "models/Hospedaje";
import dbConnect from "utils/mongoose";
dbConnect();

export default async function handler(req, res) {

    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const hospedajes = Hospedaje.find();
                return res.status(200).json(hospedajes);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case "POST":
            try {
                const newHospedaje = new Hospedaje(body);
                const savedHospedaje = await newHospedaje.save();
                return res.status(201).json(savedHospedaje);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(400).json({ msg: "No hay soporte para este metodo" });
    }
}