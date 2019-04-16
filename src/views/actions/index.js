import axios from 'axios'

export const FETCH_POST = "FETCH_POST"
export const FETCH_POSTS = "FETCH_POSTS"
export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM"
export const FETCH_DEFINITION = "FETCH_DEFINITION"


const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = "?key=lorem"

export function getImages(){
	return({
		type: "GET_IMAGES",
		payload: null
	})
}

export function fetchDefinition(term){
	const API_PATH = "/define/"
	var requestPromise = axios.get(`http://localhost:5000${API_PATH}${term}`)

	return({
		type: FETCH_DEFINITION,
		payload: requestPromise
	})
}

export function updateSearchState(term){
	return({
		type: UPDATE_SEARCH_TERM,
		payload: term
	})
}
