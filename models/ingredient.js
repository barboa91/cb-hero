const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ingredient = new Schema(
    {
        name:{ type: String, required: true },
        amount: { type: String, required: false },
        picture: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = Ingredient