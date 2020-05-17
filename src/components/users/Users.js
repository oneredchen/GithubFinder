import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

//function based component
const Users =()=>{
    const githubContext = useContext(GithubContext);
    
    const {users, loading} = githubContext;

    //Use if-else statement to control what is shown
    if (loading){
        return(<Spinner/>)
    }else{
        return (
            <div style={userStyle}>
                {users.map(user =>(
                   <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

//styling via a variable
const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
