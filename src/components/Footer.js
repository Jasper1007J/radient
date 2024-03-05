
import React from 'react';
import { NavLink } from 'react-router-dom';

// Footer component for the website
const Footer = () => {
    return (
        <div className="footer">
            {/* Categories section */}
            <div className="categories">
                <NavLink to='/' className='h2'>Categories</NavLink>
                <NavLink to='/' className='label'>Web Builder</NavLink>
                <NavLink to='/' className='label'>Hosting</NavLink>
                <NavLink to='/' className='label'>Data Center</NavLink>
                <NavLink to='/' className='label'>Robotic-Automation</NavLink>
            </div>
            {/* Contact section */}
            <div className="contact">
                <NavLink to='/' className='h2'>Contact</NavLink>
                <NavLink to='/' className='label'>Contact</NavLink>
                <NavLink to='/' className='label'>Privacy Policy</NavLink>
                <NavLink to='/' className='label'>Terms Of Service</NavLink>
                <NavLink to='/' className='label'>Categories</NavLink>
                <NavLink to='/' className='label'>About</NavLink>
            </div>
            {/* United States section with NavLink */}
            <div className="US">
                <NavLink to='/' className='navlink'>United States
                    <img src={require('./footer-arrow.png')} alt='footer-arrow'/>
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;