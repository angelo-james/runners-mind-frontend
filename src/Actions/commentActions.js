import {
  ADD_COMMENT,
  DELETE_COMMENT } from './types';

  export const createComment = credentials => {
    console.log(credentials, 'inside comment actions')
    return dispatch => {
      fetch('https://runners-mind-backend.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        }
      })
      .then( async result => {
        let user = await result.json()
        if (user.message) {
          dispatch({
            type: ADD_COMMENT,
            payload: user.message
          })
        }
      })
  }
}

export const deleteComment = (comment) => {
  fetch('https://runners-mind-backend.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
}