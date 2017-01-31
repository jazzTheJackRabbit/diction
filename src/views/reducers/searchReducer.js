import {UPDATE_SEARCH_TERM} from '../actions/index'

export default function(state = "", action){		
	if(action.payload){
		switch(action.type){
			case UPDATE_SEARCH_TERM:
				return action.payload
		}	
	}
	return ""
}