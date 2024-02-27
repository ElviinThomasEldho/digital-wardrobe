import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        season: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Item = mongoose.model('Item', itemSchema);