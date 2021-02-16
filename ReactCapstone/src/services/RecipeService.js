import axios from 'axios';

const RECIPE_API_BASE_URL = "http://localhost:8087/api/recipe";

class RecipeService {

    getRecipes(){
        return axios.get(USER_API_BASE_URL + '/' + "allRecipes");
    }

    createRecipe(user){
        return axios.post(USER_API_BASE_URL + '/' + "createRecipe" + '/', recipe);
    }

    getRecipeById(recipeId){
        return axios.get(USER_API_BASE_URL + '/' + 'getRecipe' + '/', recipeId);
    }

    updateRecipe(recipe, recipeId){
        return axios.put(USER_API_BASE_URL + '/' + 'updateRecipe' + '/' + recipeId, recipe);
    }

    deleteRecipe(recipeId){
        return axios.delete(USER_API_BASE_URL + '/' + 'deleteRecipe' + '/' + recipeId);
    }
}

export default new RecipeService()