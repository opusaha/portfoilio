import React from 'react';
import './Navbar.css'
import Logo from '../../img/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' activeClass ="activeClass" smooth={true}><li className='n-li'>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}><li className='n-li'>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}><li className='n-li'>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}><li className='n-li'>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}><li className='n-li'>Testimonial</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true}><li className='n-li'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <button className='button n-button'>Register</button>
                <button className='button login n-button'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;