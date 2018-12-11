import {
  ADD_COMMENT,
  DELETE_COMMENT } from '../Actions/types';

  const initalState = {
    comment: '',
    username: '',

  }

  export default (state = initalState, action) => {
    switch(action.type) {
      case ADD_COMMENT:
      return {
        ...state
      }
      case DELETE_COMMENT:
      return {
        ...state,
        user: action.user
      }
      default:
      return state;
    }
  }