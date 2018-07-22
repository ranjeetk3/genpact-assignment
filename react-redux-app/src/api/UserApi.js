import { API_URL } from '../constants'

class UserApi {
  static getUserDetails(id = 1) {
    return fetch(API_URL+ '/' +id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default UserApi;
