import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';


class LeftNav extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'nav_container'>
            <div>
            <h1 className = 'nav_header'>Lambda Notes</h1>
            </div>
            <div className = 'nav_buttons_container'>
                <Link to='/'>
                    <div className='nav_button'>VIEW YOUR NOTES</div>
                </Link>
                <Link to='/create'>
                    <div className='nav_button'>+CREATE NEW NOTE</div>
                </Link>
            </div>
        </div> );
    }
}

export default LeftNav;