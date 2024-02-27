import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            required: false,
            default: 0,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Player = mongoose.model('Player', playerSchema);