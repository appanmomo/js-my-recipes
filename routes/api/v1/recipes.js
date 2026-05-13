const express = require('express');
const router = express.Router();

const recipes = require('../../../data/recipes.json');

router.get('/', (req, res) => {

    const recipeList = recipes.map(recipe => {
        return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            prepTime: recipe.prepTime,
            difficulty: recipe.difficulty
        };
    });

    res.json(recipeList);

});

router.post('/recipe/add', (req, res) => {
    const newRecipe = req.body;
    newRecipe.id = recipes.length + 1;
    recipes.push(newRecipe);
    res.json(newRecipe);

});

router.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipe.id === id);
    res.json(recipe);

});

module.exports = router;