import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className='experience' id='Experience'>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">200+</div>
                <span>Completed</span>
                <span>Project's</span>
            </div>
            <div className="achievement">
                <div className="circle">50+</div>
                <span>Registered</span>
                <span>Clients</span>
            </div>
        </div>
    );
};

export default Experience;