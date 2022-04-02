const { Router } = require('express');
const controller = require("../controllers")

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/chef/all',controller.getChefs)
router.get('/chef/:id',controller.getChefById)
router.get('/recipe/all',controller.getRecipes)


router.post('/createChef',controller.createChef)
router.post('/createRecipe', controller.createRecipe)
router.post('/commentRecipe/:id', controller.comRecipe)
router.post('/addRecipe/:id', controller.addRecipe)

router.delete('/delRecipe/:id', controller.delRecipe)


module.exports = router;