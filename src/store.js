import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

//initial state that gets passsed down as props to all the other components
const initialState = {}

//storing thunk under this variable middleware
 const middleware = [thunk];

 //creating the stroe and passing the root reducer and the initial state also applying thunk as middleware
 const store = createStore(
   rootReducer,
   initialState,
   compose(
     applyMiddleware(...middleware),
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
 )

 export default store;