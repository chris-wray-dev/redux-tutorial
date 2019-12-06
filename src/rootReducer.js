import { combineReducers } from 'redux';
import articles from './reducers/articleReducer';
import count from './reducers/countReducer';

export default combineReducers({
  count,
  articles
})