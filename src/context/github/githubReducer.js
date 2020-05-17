//Reducers is where the States are depending on the types being passed in
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

//note: state is immutable.
export default (state, action) =>{
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users:[],
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading:false
            }
        case GET_REPOS:
            return{
                ...state,
                repos: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state, //copies what is in the current state
                loading: true //sets loading value to true
            }
        default:
            return state
    }
}