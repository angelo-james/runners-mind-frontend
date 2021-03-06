import { 
  GET_USER, 
  ADD_USER,
  ADD_USER_FAILED, 
  DELETE_USER, 
  VALIDATE_USER, 
  VALIDATE_USER_FAILED,
  ENTER_EMAIL,
  ENTER_PASSWORD,
  ENTER_USERNAME,
  ADD_FOLLOW } from '../Actions/types'

const initalState = {
  email: '',
  password: '',
  loginSuccess: ''
}

 export default (state = initalState, action) => {
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
        user: action.payload,
        loginSuccess: true
      }
    case ADD_USER_FAILED:
      return {
        ...state,
        user: action.payload,
        loginSuccess: false
      }
    case GET_USER:
      return {
        ...state,
        users: action.payload
      }
    case ENTER_EMAIL:
      return {
        ...state,
        email: action.event
      }
    case ENTER_PASSWORD:
      return {
        ...state,
        password: action.event
      }
    case ENTER_USERNAME:
      return {
        ...state,
        username: action.event
      }
    case ADD_FOLLOW: 
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
 }