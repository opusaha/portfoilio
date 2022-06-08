import React from 'react';
import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>Sahaapo@gmail.com</span>
                <div className="f-icons">
                    <Github/>
                    <Facebook/>
                    <LinkedIn/>
                </div>
            </div>
        </div>
    );
};

export default Footer;