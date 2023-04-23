import Hospedaje from "models/Hospedaje";
import dbConnect from "utils/mongoose";
dbConnect();

export default async function handler(req, res) {

    // Desestructuro method, body y query (solo 'id') de req
    const { method, body, query: { id } } = req;

    switch (method) {
        case "GET":
            try {
                const hospedaje = await Hospedaje.findById(id);
                if (!hospedaje) return res.status(404).json({ message: "Hospedaje no encontrado" });
                return res.status(200).json(hospedaje);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }

        case "PUT":
            try {
                const options = { returnDocument: 'after' };
                const updatedHospedaje = await Hospedaje.findByIdAndUpdate(id, body, options);
                if (!updatedHospedaje) return res.status(404).json({ message: "Hospedaje no encontrado" })
                return res.status(200).json(updatedHospedaje);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }

        case "DELETE":
            try {
                const deletedHospedaje = await Hospedaje.findByIdAndDelete(id);
                if (!deletedHospedaje) return res.status(404).json({ messsage: "Hospedaje no encontrado" });
                return res.status(204).json({ message: 'Hospedaje eliminado' });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }

        default:
            return res.status(400).json({ msg: "No hay soporte para este metodo" });
    }
}