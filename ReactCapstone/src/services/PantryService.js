import axios from 'axios';

const PANTRY_API_BASE_URL = "http://10.0.2.2:8087/api/pantry/";

class PantryService {

    updateUser(ingredient, email){
        return axios.put(PANTRY_API_BASE_URL + '/' + 'addIngredient' + '/' + email, ingredient);
    }

    getPantry(email){
        return axios.get(PANTRY_API_BASE_URL + 'allPantry' + '/' + email);
    }
}

export default new PantryService()