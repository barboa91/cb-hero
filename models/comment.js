const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        user:{ type: String, required: true },
        comment: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Comment