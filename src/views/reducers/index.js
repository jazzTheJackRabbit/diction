import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import definitionReducer from './definitionReducer'
import imagesReducer from './imagesReducer'
import {reducer as formsReducer} from 'redux-form'

const rootReducer = combineReducers({	
	search_state: searchReducer,
	definitions: definitionReducer,
	images: imagesReducer
});

export default rootReducer;
