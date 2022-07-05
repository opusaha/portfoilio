import React from 'react';
import './Card.css'

const Card = ({ emoji, headings, detail }) => {
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <div className='card-details'>
                <span>{headings}</span>
                <span>{detail}</span>
                <button className='card-button'>Learn more</button>
            </div>
        </div>
    );
};

export default Card;