import { combineReducers } from 'redux';
import PostsReducer from './PostReducer'

export default combineReducers ({
   posts: PostsReducer
});
