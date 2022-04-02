const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Picture = new Schema(
    {
        url:{ type: String, required: true },
        description: { type: String, required: true },
        comments: [{ type: Object, required: false }],
    },
    { timestamps: true },
)

module.exports = Picture