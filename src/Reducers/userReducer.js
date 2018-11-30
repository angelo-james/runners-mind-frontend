import { 
  GET_USER, 
  ADD_USER,
  ADD_USER_FAILED, 
  DELETE_USER, 
  VALIDATE_USER, 
  VALIDATE_USER_FAILED } from '../Actions/types'

const initalState = {
  user: {},
  loginSuccess: null
}

 export default function(state = initalState, action) {
  switch(action.type) {
    case VALIDATE_USER:
      return {
        ...state,
        user: action.payload,
        loginSuccess: true
      }
    case VALIDATE_USER_FAILED:
      return {
        ...state,
        user: action.payload,
        loginSuccess: false
      }
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      }
    case ADD_USER_FAILED:
      return {
        ...state,
        user: action.payload,
        loginSuccess: false
      }
    default:
      return state;
  }
 }