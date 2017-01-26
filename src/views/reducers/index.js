import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import activePostReducer from './activePostReducer'
import searchReducer from './searchReducer'
import definitionReducer from './definitionReducer'
import {reducer as formsReducer} from 'redux-form'

const rootReducer = combineReducers({	
	posts: postsReducer,
	form: formsReducer,
	activePost: activePostReducer,
	search_state: searchReducer,
	definitions: definitionReducer
});

export default rootReducer;
