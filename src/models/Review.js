import { Schema, model, models } from "mongoose";

const reviewSchema = new Schema({
    body: String,
    rating: Number,
}, {
    timestamps: true,
    versionKey: false,
});

// Si ya existe, que lo exporte, sino, que lo cree
export default models.Review || model('Review', reviewSchema);