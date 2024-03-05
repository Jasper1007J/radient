
import React from 'react';
import { NavLink } from 'react-router-dom';

// Footer component for the website
const Footer = () => {
    return (
        <div className="footer">
            {/* Categories section */}
            <div className="categories">
                <a href='#' className='h2'>Categories</a>
                <a href='#' className='label'>Web Builder</a>
                <a href='#' className='label'>Hosting</a>
                <a href='#' className='label'>Data Center</a>
                <a href='#' className='label'>Robotic-Automation</a>
            </div>
            {/* Contact section */}
            <div className="contact">
                <a href='#' className='h2'>Contact</a>
                <a href='#' className='label'>Contact</a>
                <a href='#' className='label'>Privacy Policy</a>
                <a href='#' className='label'>Terms Of Service</a>
                <a href='#' className='label'>Categories</a>
                <a href='#' className='label'>About</a>
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