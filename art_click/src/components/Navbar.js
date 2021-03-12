import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click); 
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // }; 
    // window.addEventListener('resize', showButton);


    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
               <Link to='/' className='navbar-logo'>
               Clicky Game <i className='fas fa-gamepad' />
                </Link>
                {/* <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul clasName={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Work
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Resume
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu} >
                            Contact
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact</Button>} */}
            </div>
        </nav>
            
        </>
    );
}

export default Navbar;