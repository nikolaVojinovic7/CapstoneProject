import axios from 'axios';

const PANTRY_API_BASE_URL = "http://10.0.2.2:8087/api/pantry/";

class PantryService {

    updateUser(email,id){
        return axios.put(PANTRY_API_BASE_URL + '/' + 'addIngredient' + '/' + email+ '&' + id);
    }

    getPantry(email){
        return axios.get(PANTRY_API_BASE_URL + 'allPantry' + '/' + email);
    }
}

export default new PantryService()