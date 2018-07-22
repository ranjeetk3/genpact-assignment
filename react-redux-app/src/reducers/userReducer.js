import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.GET_USER_DETAILS_SUCCESS:
      return Object.assign([], state, action.id)
    default: 
      return state;
  }
}
