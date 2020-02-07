import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';


class LeftNav extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'nav_container'>
            <div>
            <h1 className = 'nav_header'>Test</h1>
            </div>
            <div className = 'nav_buttons_container'>
                <Link to='/'>
                    <div className='nav_button'>root</div>
                </Link>
                <Link to='/create'>
                    <div className='nav_button'>parse</div>
                </Link>
            </div>
        </div> );
    }
}

export default LeftNav;