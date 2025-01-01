import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { Button } from './button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                LOGO <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'hamburger-menu-icon' : 'x-menu-icon'} />
                </div>
                <ul className={click ? 'nav-meny active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/extras' className='nav-links' onClick={closeMobileMenu}>
                        Extras
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--primary' buttonSize='btn--medium'>
                    Medium Primary Button
                </Button>}
                {button && <Button buttonStyle='btn--outline' buttonSize='btn--large'>
                    Medium Primary Button
                </Button>}
            </div>
        </nav>
        </>
    );
};

export default Navbar;