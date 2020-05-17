import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Reason why <a> tag is not use is because the state of the web app cannot be maintained when we switch between different pages 

const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}/> {props.title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
};

//Defining defaultProps & propTypes for Function Based Component
Navbar.defaultProps= {
    title:'Github-Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes= { 
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
