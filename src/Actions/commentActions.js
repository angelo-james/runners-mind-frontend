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
            payload: user
          })
        }
      })
  }
}

export const deleteComment = (comment) => {
  return dispatch => {
    fetch('https://runners-mind-backend.herokuapp.com/api/comments', {
          method: 'DELETE',
          body: JSON.stringify(comment),
          headers: { 
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        .then( async result => {
          let user = await result.json()
          
            dispatch({
              type: DELETE_COMMENT,
              payload: user
            })
          
        })

  }
}