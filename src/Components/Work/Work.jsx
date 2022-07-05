import React from 'react';
import './Work.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Facebook from '../../img/Facebook.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png'
import { motion } from 'framer-motion'

const Work = () => {
    const transition = { duration: 2, type: 'spring' };
    return (
        <div className='work row'>
            <div className="w-s-left col-lg-6">
                <span>Work for All these</span>
                <span>Brands and Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium suscipit mollitia,
                    <br />
                    est optio commodi asperiores.
                    <br />
                    consectetur adipisicing elit. Corrupti accusantium suscipit mollitia
                    <br />
                    ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium
                </span>
                <button className='button cv'>Hire me</button>
                <div className="blur" style={{ background: '#abf1ff94' }}></div>
            </div>

            <div className="w-right col-lg-6">
                <motion.div
                    initial={{ rotate: 60 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={transition}
                    className="main-circle">
                    <div className="sec-circle">
                        <div className="w-circle">
                            <a href="https://www.upwork.com"><img src={Upwork} alt="" /></a>
                        </div>
                        <div className="w-circle">
                            <a href="https://www.Facebook.com"><img src={Facebook} alt="" /></a>
                        </div>
                        <div className="w-circle">
                            <a href="https://www.upwork.com"><img src={Amazon} alt="" /></a>
                        </div>
                        <div className="w-circle">
                            <a href="https://www.upwork.com"><img src={Fiverr} alt="" /></a>
                        </div>
                        <div className="w-circle">
                            <a href="https://www.upwork.com"><img src={Shopify} alt="" /></a>
                        </div>
                    </div>
                </motion.div>
                <div className="w-back-circle blue-circle"></div>
                <div className="w-back-circle yellow-circle"></div>
                <div className="blur" style={{ background: '#abf1ff94' }}></div>
            </div>
        </div>
    );
};

export default Work;