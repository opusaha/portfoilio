import React from 'react';
import './Home.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Victor1 from '../../img/Vector2.png';
import Victor2 from '../../img/Vector1.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Home = () => {
    const transition ={duration :4, type : 'spring'}
    return (
        <div className='home'>
            <div className="h-left">
                <div className="h-name">
                    <span>HI! I Am</span>
                    <span>Opu Saha</span>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis praesentium, ut ipsam expedita..</span>
                </div>
                <button className='button h-button'>Hire me</button>
                <div className="h-icons">
                    <a href="https://github.com/opusaha"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com"><img src={Linkedin} alt="" /></a>
                    <a href="https"><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="h-right">
                <img src={Victor1} alt="" />
                <img src={Victor2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                initial={{left:'36%'}}
                whileInView={{left:'-34%'}}
                transition={transition}
                src={Glassemoji} 
                alt="" />

                <motion.div 
                initial={{left:'58%',top:'20%'}}
                whileInView={{ top:'-9%' , left:'58%'}}
                transition={transition}
                >
                    <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                </motion.div>
                <motion.div
                initial={{left:'3%', top:'10'}}
                whileInView={{ top:'61%' , left:'18%'}}
                transition={transition}
                >
                    <FloatingDiv image={Thumbup} text1='Best Developer' text2='Award' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    );
};

export default Home;