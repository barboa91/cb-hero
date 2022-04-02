const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
    {
        chef: { type: String, required: true }, // id of creator
        name: { type: String, required: true },
        difficulty: { type: String, required: true },
        private: { type: Boolean, required: true},
        totalTime: { type: String, required: false },
        ingredients: [{ type: Object, required: true }],
        steps: [{ type: Object, required: true }],
        pictures: [{ type: Object, required: false }],
        comments: [{ type: Object, required: false }],
        date: { type: String, required: false } // date created
    },
    { timestamps: true },
)

module.exports = Recipe