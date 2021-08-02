import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AllReducer from 'reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default createStoreWithMiddleware(AllReducer);
