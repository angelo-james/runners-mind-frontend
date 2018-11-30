import { 
  GET_USER, 
  ADD_USER,
  ADD_USER_FAILED, 
  DELETE_USER, 
  VALIDATE_USER, 
  VALIDATE_USER_FAILED } from './types';

export const validateUser = credentials => {
  return dispatch => {
    fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( async result => {
      dispatch({
        type: VALIDATE_USER,
        payload: await result.json()
      })
    })
    .catch(error => {
      return({
        type: VALIDATE_USER_FAILED,
        payload: error
      })
    })
  }  
}

export const createUser = payload => {
  return dispatch => {
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(async result => {
      dispatch({
        type: ADD_USER,
        payload: await result.json()
      })
    })
    .catch(error => {
      return({
        type: ADD_USER_FAILED,
        payload: error
      })
    })
  }
}