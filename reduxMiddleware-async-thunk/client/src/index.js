import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import { counterReducer } from './reducer'
import { Provider } from 'react-redux'

const myLogger = (store) => (next) => (action) => {
  console.log("Middleware ran");
  return next(action);
}

const mySecondLogger = (store) => (next) => (action) => {
  console.log("Second middleware ran");
  return next(action);
}

const capAtTen = (store) => (next) => (action) => {
  if(store.getState() >= 10) {
    return next({ type: 'DECREMENT' })
  }
  return next(action);
}

// const myLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("middleware ran");
//       return next(action);
//     }
//   }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counterReducer, composeEnhancers(applyMiddleware(myLogger, mySecondLogger, capAtTen)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>

  ,
  document.getElementById('root')
)