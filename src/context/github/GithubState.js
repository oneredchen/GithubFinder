import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

//Depending on whether the app is deployed on local machine or server, the Client ID & Client Secret will be obtained
let githubClientID ;
let githubClientSecret ;

if (process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
};

const GithubState = props => {
    const initialState ={
        users:[],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    const [state, dispatch] = useReducer(GithubReducer,initialState)

    //Searching for Github Users
    const searchUsers = async (text) =>{
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`);

        dispatch({
            type: SEARCH_USERS, 
            payload: res.data.items
        });
    };

    //Clear users and set it back to default state
    const clearUsers = ()=>{
       dispatch({type:CLEAR_USERS})
    };

    //get a single user detail
    const getUser = async (username)=>{
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`);

        dispatch({
            type:GET_USER, 
            payload: res.data
        });
    };

    //Get the user's repors
    const getUserRepos = async (username) =>{
        setLoading()

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`);

        dispatch({
            type: GET_REPOS, 
            payload: res.data
        });
    }

    //Set Loading
    const setLoading = () =>{
        dispatch({type:SET_LOADING});
    }

    //The states & functions that will be available globally will be placed in value inside the Provider tag
    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading, 
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
};

export default GithubState