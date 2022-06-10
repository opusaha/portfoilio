import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import GlassEmoji from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import{motion} from 'framer-motion'

const Services = () => {
    const transition = {duration :3, type : 'spring'}
    return (
        <div className='services' id='Services'>
            <div className="s-left">
                <span>My Every</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium suscipit mollitia.
                <br />
                Est optio commodi asperiores.
                <br />
                Consectetur adipisicing elit. Corrupti accusantium suscipit mollitia
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, laudantium!
                </span>
                <button className='button cv'>Download CV</button>
            </div>
            <div className="s-right">
                <motion.div className="card1"
                initial={{top:'0vh'}}
                whileInView={{top:'30vh'}}
                transition={transition}
                >
                <Card emoji ={HeartEmoji} headings ={'Design'} detail={'figma, PSD, phptoshop, XD'}/>
                </motion.div>
                <motion.div className="card2" 
                initial={{top:'40vh'}}
                whileInView={{ top:'18vh'}}
                transition={transition}
                >
                <Card emoji ={GlassEmoji} headings ={'FontEnd'} detail={'HTML, CSS, Javascript, React'}/>
                </motion.div>
                <motion.div className="card3"
                 initial={{top:"40vh"}}
                 whileInView={{top:'-3vh'}}
                 transition={transition}
                >
                <Card emoji ={Humble} headings ={'BackEnd'} detail={'PHP, laravel'}/>
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
                <div className="blur s-blur1" style={{background:'#c1f5ff'}}></div>
            </div>
        </div>
    );
};

export default Services;