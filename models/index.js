const mongoose = require('mongoose')

const ChefSchema = require('./chef')
const CommentSchema = require("./comment")
const IngredientSchema = require("./ingredient")
const PictureSchema = require("./picture")
const StepSchema = require("./step")
const RecipeSchema = require("./Recipe")

const Chef = mongoose.model('chef', ChefSchema)
const Comment = mongoose.model('comment', CommentSchema)
const Ingredient = mongoose.model('ingredient', IngredientSchema)
const Picture = mongoose.model('picture', PictureSchema)
const Step = mongoose.model('step', StepSchema)
const Recipe = mongoose.model('recipe', RecipeSchema)

module.exports = {
    Chef,
    Comment,
    Ingredient,
    Picture,
    Step,
    Recipe,
}


