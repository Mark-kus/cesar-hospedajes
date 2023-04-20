import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
}, {
    versionKey: false,
});

// Si ya existe, que lo exporte, sino, que lo cree
export default models.User || model('User', userSchema)