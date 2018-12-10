import { 
  GET_USER, 
  ADD_USER,
  ADD_USER_FAILED, 
  DELETE_USER, 
  VALIDATE_USER, 
  VALIDATE_USER_FAILED,
  ENTER_EMAIL,
  ENTER_PASSWORD,
  ENTER_USERNAME } from './types';

export const validateUser = credentials => {
  return dispatch => {
    fetch('https://runners-mind-backend.herokuapp.com/api/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then( async result => {
      let token = result.headers.get('authorization')
      let user = await result.json()
      localStorage.setItem('jwt', token)
      if (user.message) {
        dispatch({
          type: VALIDATE_USER_FAILED,
          payload: user.message
        })
      } else {
          dispatch({
            type: VALIDATE_USER,
            payload: {
              token,
              user
            }
          })
        }
    })
  }  
}

export const createUser = payload => {
  return dispatch => {
    fetch('https://runners-mind-backend.herokuapp.com/api/users', {
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

export const enterEmail = (e) => {
  return dispatch => {
    dispatch({
      type: ENTER_EMAIL,
      event: e.target.value
    })
  }
}

export const enterPassword = (e) => {
  return dispatch => {
    dispatch({
      type: ENTER_PASSWORD,
      event: e.target.value
    })
  }
}

export const enterUsername = (e) => {
  return dispatch => {
    dispatch({
      type: ENTER_USERNAME,
      event: e.target.value
    })
  }
}