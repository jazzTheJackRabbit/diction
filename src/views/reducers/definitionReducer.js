import {FETCH_DEFINITION} from '../actions/index'

export default function(state = [], action){		
	if(action.payload){
		switch(action.type){
			case FETCH_DEFINITION:	
				if(action.payload.data['definition_sets'].length){
					state.unshift(action.payload);
				}				
		}	
	}
	return state
}