import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion'

const Experience = () => {
    const transition = { duration: 2, type: 'spring' };
    return (
        <div className='experience' id='Experience'>
            <div className="achievement">
                <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: '-40px' }}
                transition={transition}
                className="circle">5+</motion.div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: '-40px' }}
                transition={transition}
                className="circle">200+</motion.div>
                <span>Completed</span>
                <span>Project's</span>
            </div>
            <div className="achievement">
                <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: '-40px' }}
                transition={transition}
                className="circle">50+</motion.div>
                <span>Registered</span>
                <span>Clients</span>
            </div>
        </div>
    );
};

export default Experience;