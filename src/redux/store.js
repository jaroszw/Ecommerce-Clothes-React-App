import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middlewares = [logger];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
