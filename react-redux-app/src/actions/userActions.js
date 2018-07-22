import * as types from './actionTypes';
import UserApi from '../api/UserApi';

export function getUserDetailsSuccess(id) {
  return {type: types.GET_USER_DETAILS_SUCCESS, id};
}

export function userDetails(id) {
  return function(dispatch) {
    return UserApi.getUserDetails(id).then(id => {
      dispatch(getUserDetailsSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
}
