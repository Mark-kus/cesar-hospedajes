import { connection, connect } from "mongoose";
// connect es para conectar la db, connection para accionar en eventos

const conn = {
    isConnected: false,
}

export default async function dbConnect() {
    // Si ya existe la conexión, no la crea
    if (conn.isConnected) return;

    // Hace la conexion y devuelve un objeto
    const db = await connect(process.env.MONGODB_URL);

    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
    console.log('MongoDB connected');
})
connection.on("error", (e) => {
    console.log(e);
})