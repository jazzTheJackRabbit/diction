import {FETCH_DEFINITION} from '../actions/index'

export default function(state = [], action){		
	if(action.payload){
		switch(action.type){
			case FETCH_DEFINITION:				
				state.unshift(action.payload);
		}	
	}
	return state
}