const db = require('../db')
const { Chef, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seed = async () =>{
    const chef = new Chef ({
        username: "admin",
        firstName: "Alex",
        lastName: "Barbosa",
        private: true,
        recipesCreated: [],
        recipesSaved: [],
        password: "password",
        family: [],
        profPic: "https://imgur.com/6y9FJE3.png",
    })
    await chef.save();
    
    const recipe = new Recipe({
        chef : chef.username,
        name : "Banana Bread 33 1/3",
        difficulty : "easy",
        private : false,
        pictures:["https://www.simplyrecipes.com/thmb/Sy5LXtSfHcXfTkkS36kmSvubqj8=/3299x3299/smart/filters:no_upscale()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"],
        ingredients : [{
            name : "white sugar",
            amount : "1/8th of a cup"
        },{
            name : "ground cinnamon",
            amount : "1/2 tsp"
        },{
            name : "butter",
            amount : "6 tsp"
        },{
            name : "white sugar",
            amount  : "1 1/2 cup"
        },{
            name : "eggs",
            amount : "2"
        },{
            name : "very ripe bananas",
            amount : "2"
        },{
            name : "sour cream",
            amount : "1 cup"
        },{
            name : "vanila extract",
            amount : "1 tsp"
        },{
            name : "salt",
            amount : "1/4 tsp"
        },{
            name : "baking soda",
            amount : "2 tsp"
        },{
            name : "all-purpose flour",
            amount : "2 1/4 cups"
        },{
            name : "chopped walnuts",
            amount : "1/2 cup or none"
        },{
            name : "chocolate chips",
            amount : "1/2 cup or none"
        }],
        steps : [{
            "description": "Preheat oven to 325 degrees. Grease two 7x3 inch loaf pans, or 1 loaf and 6 muffins"
         },
         { "description": "In a small bowl, stir together 1/4 cup white sugar and 1 tsp cinnamon. Dust pans lightly with cinnamon and sugar mixture."
         },{
            "description": "In large bowl, cream butter and 1 1/2 cups sugar. Mix in eggs, mashed bananas, sour cream and vanilla. Mix in salt, baking soda and flour. Stir in nuts. Divide into prepared pans."
         },{
            "description": "Bake for 1 hour, until a toothpick/knife inserted into center comes out clean"
         }],
         date: "03/27/2022"
    })
    await recipe.save()
}
const run = async () => {
    await seed()
    db.close()
}

run()

