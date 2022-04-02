
const { Chef, Comment, Ingredient, Picture, Step, Recipe } = require('../models')


const getChefById = async (req, res) => {
    try {
        const { id } = req.params;
        const chef = await Chef.findById(id)
        if (chef) {
            return res.status(200).json({ chef });
        }
        return res.status(404).send('chef with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.status(200).json({ recipe });
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const delRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id)
        if (recipe) {
            return res.status(200).json({ recipe });
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const comRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id,req.body)
        if (recipe) {
            return res.status(200).json({ recipe });
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const addRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Chef.findByIdAndUpdate(id,req.body)
        if (recipe) {
            return res.status(200).json({ recipe });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const createChef = async (req, res) => {
    try {
        const chef = await new Chef(req.body)
        await chef.save()
        return res.status(201).json({
            chef,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createComment = async (req, res) =>{
    try{
        const comment  = await new Comment(req.body)
        await comment.save
        return res.status(201).json({
            comment
        });
    } catch(error){
        return res.status(500).json({error:error.message})
    }
}
const createRecipe = async (req,res) =>{
    try{
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe
        });
    } catch (error){
        return res.status(500).json({error:error.message})
    }

}
const getChefs = async (req,res) =>{
    try{
        const chefs = await Chef.find()
        return res.status(201).json({
            chefs
        });
    } catch (error){
        return res.status(500).json({error:error.message})
    }

}
const getRecipes = async (req,res) =>{
    try{
        const recipes = await Recipe.find()
        return res.status(201).json({
            recipes
        });
    } catch (error){
        return res.status(500).json({error:error.message})
    }

}




module.exports = {
    getChefById,
    createChef,
    createComment,
    getRecipeById,
    createRecipe,
    getChefs,
    getRecipes,
    delRecipe,
    comRecipe,
    addRecipe
    // addIngredient,
    // addPicture,
    // addStep,
    // newRecipe,
    // getRecipe,
    // getAllComments,
    // getAllRecipes,

}