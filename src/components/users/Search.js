import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

//Functional Component + Hooks: useState to give a functional component the ability to use States.
const Search = ()=>{
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const {searchUsers,clearUsers, users} =githubContext;

    const {setAlert} = alertContext;

    const onChange = e =>{
        //reference the state to be edited by the name given in the tags
        setText( e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        if (text===''){
            setAlert('Please enter something','light');
        }else{
             //can pass back a value by using function as props
            searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                type="text" 
                name="text" 
                placeholder="Search Users..." 
                value ={text} 
                onChange={onChange}
                />
                <input 
                type="submit" 
                value="Search" 
                className ="btn btn-dark btn-block" 
                />
            </form>
            {users.length >0 &&  (
            <button 
                className="btn btn-light btn-block" 
                onClick={clearUsers}
            >
                Clear
            </button>
            )}
        </div>
    )
}

export default Search
