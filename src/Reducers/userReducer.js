import { GET_USER, ADD_USER, DELETE_USER, VALIDATE_USER } from '../Actions/types'

const initalState = {
  user: []
}

 export default function(state = initalState, action) {
  switch(action.type) {
    case VALIDATE_USER:
      this.setState({ user: action })
      return {
        ...state
      }
    default:
      return state;
  }
 }