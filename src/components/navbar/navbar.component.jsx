import React from 'react';

import './navbar.styles.scss'

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
               	<ul className="nav">
					<li className="nav-item"><a href="#">Home</a></li>
					<li className="nav-item"><a href="#">About</a></li>
					<li className="nav-item"><a className="contact" href="#">Contact</a></li>
				</ul>
            </div>
        )
    }
}

export default NavBar;