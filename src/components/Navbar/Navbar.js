import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=>{
        if(window.scrollY > 50){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    })
    return (
        <>
        {/* transparent navbar on scroll */}
        <nav className="navbar" style={{background: scrollNav ? '#343434' : 'transparent'}}> 
              <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    L/O
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li> */}
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar
