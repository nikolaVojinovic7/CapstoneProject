import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://localhost:8087/api/category";

class CategoryService {

    getCategories(){
        return axios.get(USER_API_BASE_URL + '/' + "allCategories");
    }

    createCategory(category){
        return axios.post(USER_API_BASE_URL + '/' + "createCategory", category);
    }

    getCategoryByName(name){
        return axios.get(USER_API_BASE_URL + '/' + 'findCategories' + '/' + name);
    }

    updateCategory(category, name){
        return axios.put(USER_API_BASE_URL + '/' + 'updateCategory' + '/' + name, category);
    }

    deleteCategory(name){
        return axios.delete(USER_API_BASE_URL + '/' + 'deleteCategory' + '/' + name);
    }
}

export default new CategoryService()