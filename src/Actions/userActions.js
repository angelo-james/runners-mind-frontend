import { 
  GET_USER, 
  ADD_USER,
  ADD_USER_FAILED, 
  DELETE_USER, 
  VALIDATE_USER, 
  VALIDATE_USER_FAILED } from './types';

export const validateUser = credentials => {
  return dispatch => {
    fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( async result => {
      let token = result.headers.get('authorization')
      let user = await result.json()
      localStorage.setItem('jwt', token)
      dispatch({
        type: VALIDATE_USER,
        payload: {
          token,
          user
        }
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
    fetch('api/users', {
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

export const getUser = () => {
  return dispatch => {
    fetch('/users')
    .then(result => {
      dispatch({
        type: GET_USER,
        payload: result.json()
      })
    })
  }
}