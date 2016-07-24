import { combineReducers } from 'redux';
import todos from './todos';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  routing: routerReducer
});

export default rootReducer;
