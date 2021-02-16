import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8087/api/public";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL + '/' + "allUsers");
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/' + "createUser" + '/', user);
    }

    getUserByUsername(username){
        return axios.get(USER_API_BASE_URL + '/' + 'users' + '/', username);
    }

    verifyUser(username, password){
        return axios.get(USER_API_BASE_URL + '/' + 'login' + '/', username, password);
    }

    updateUser(user, username){
        return axios.put(USER_API_BASE_URL + '/' + 'updateUser' + '/' + username, user);
    }

    deleteUser(username){
        return axios.delete(USER_API_BASE_URL + '/' + 'deleteUser' + '/' + username);
    }
}

export default new UserService()