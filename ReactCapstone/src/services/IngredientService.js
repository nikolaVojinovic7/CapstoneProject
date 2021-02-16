import axios from 'axios';

const INGREDIENT_API_BASE_URL = "http://localhost:8087/api/ingredient";

class IngredientService {

    getIngredients(){
        return axios.get(USER_API_BASE_URL + '/' + "allIngredients");
    }

    createIngredient(ingredient){
        return axios.post(USER_API_BASE_URL + '/' + "createIngredient", ingredient);
    }

    getIngredientsById(name){
        return axios.get(USER_API_BASE_URL + '/' + 'findIngredient' + '/', name);
    }

    updateIngredients(ingredient, name){
        return axios.put(USER_API_BASE_URL + '/' + 'updateIngredient' + '/' + name, ingredient);
    }

    deleteIngredients(name){
        return axios.delete(USER_API_BASE_URL + '/' + 'deleteIngredient' + '/' + name);
    }
}

export default new IngredientService()