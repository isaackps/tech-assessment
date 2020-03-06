// import createSagaMiddleware from 'redux-saga';
// import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

/* 
function rootSaga() {
    yield all ([
      ...require('./sagas.js).default
    ]);
}
*/

export const history = createHistory();
const { composeWithDevTools } = require('redux-devtools-extension');
const rootMiddleware = composeWithDevTools(
  applyMiddleware(
    //sagaMiddleWare,
    routerMiddleware(history)
  )
);

/* --------------- Store --------------- */
const store = createStore(
  createRootReducer(history),
  rootMiddleware
);

// run rootSaga
// sagaMiddleware.run(rootSaga);

// export store
export default store;
