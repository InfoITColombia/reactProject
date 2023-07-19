import React from 'react';
import logo from '../img/logotouch.png';

export function Header () {

    return(

        <div>
            <h1>header</h1>
           <img className='logo-ventas' src={logo} alt="Logo" />
        </div>

    );
}

export default Header;