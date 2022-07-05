import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import GlassEmoji from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import { motion } from 'framer-motion'
import { Container } from 'react-bootstrap';


const Services = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className='services' id='services'>
            <Container fluid>
                <div className="row">
                    <div className="col-lg-6 col-12 s-text">
                        <motion.span initial={{ x: '80%' }} whileInView={{ x: '0%' }} transition={transition}>My Every</motion.span>
                        <motion.span initial={{ x: '50%' }} whileInView={{ x: '0%' }} transition={transition}>Services</motion.span>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ad facere enim praesentium corporis eligendi vero dolor, mollitia illum quas expedita molestiae maiores quis repellendus at, ullam error ipsam culpa neque minus harum aperiam fugiat? Officia, tempora molestiae illo aspernatur similique inventore hic.</span>
                        <button className='button w-btn h-btn'>Download CV</button>
                    </div>
                    <div className="col-lg-6 col-12 s-card">
                        <motion.div initial={{ top: '0%' }} whileInView={{ top: '100%' }} transition={transition}>
                            <Card emoji={HeartEmoji} headings={'UX/UI Designer'} detail={'XD, Figma, PSD'} />
                        </motion.div>
                        <motion.div initial={{ top: '100%' }} whileInView={{ top: '50%' }} transition={transition}>
                            <Card emoji={GlassEmoji} headings={'Font End Developer'} detail={'HTML, CSS, Bootstrap, Javascript, React'} />
                        </motion.div>
                        <motion.div initial={{ top: '100%' }} whileInView={{ top: '0%' }} transition={transition}>
                            <Card emoji={Humble} headings={'Back End Developer'} detail={'PHP, Laravel, MySql'} />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;