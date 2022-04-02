const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chef = new Schema(
    {
        username:{ type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        private: { type: Boolean, required: true},
        recipesCreated: [{ type: Object, required: false }],
        recipesSaved: [{ type: Object, required: false }],
        password: { type: String, required: true },
        family: [{ type: Object, required: false }],
        profPic: { type: String, required: false },
    },
    { timestamps: true }
)

module.exports = Chef