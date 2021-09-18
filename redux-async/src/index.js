import React from 'react';
import RouterDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import postsReducer from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)))

RouterDOM.render(
  <Provider store={store}>

    <App />
  </Provider>

  ,
  document.getElementById('root')
)