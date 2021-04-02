import React from 'react';
import {Link} from "react-router-dom"
import './style.css'

const SideNav = () => {
    return(
        <div class='sidebar'> 
            <ul>
                <li><Link style={{textDecoration:'none'}} to="/">Home</Link></li>
                <li><Link style={{textDecoration:'none'}} to="/treanding">Trending</Link></li>
            </ul>
        </div>
    )
}

export default SideNav;