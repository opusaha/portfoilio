import React from 'react';
import './Footer.css'
import { UilGithub, UilFacebook,UilLinkedin } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className='footer'>
            <span>sahaapo@gmail.com</span>
            <div className="f-icon">
                <UilFacebook />
                <UilGithub />
                <UilLinkedin/>
            </div>
        </div>
    );
};

export default Footer;