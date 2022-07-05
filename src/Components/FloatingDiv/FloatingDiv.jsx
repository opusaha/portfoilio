import React from 'react';
import './FloatingDiv.css'

const FloatingDiv = ({ image, text1, text2 }) => {
    return (
        <div className='floating-div row py-3'>
            <div className='col-md-4 col-sm-5 col-5'>
                <img src={image} alt="" className='img-fluid' />
            </div>
            <span className='col-md-8 col-sm-7 col-7'>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default FloatingDiv;