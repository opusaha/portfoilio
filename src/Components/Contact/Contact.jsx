import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
    const transition = { duration: 2, type: 'spring' }
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5y21f6p', 'template_6wwv02m', form.current, 'SFHtfQOnFG8C3n1tA')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='c-section' id='contact'>
            <div className="row c-row">
                <div className="c-left col-md-6">
                    <div className="awesome">
                        <span>Get me in touch </span>
                        <motion.span initial={{ right:'0' }} whileInView={{ right:'7%' }} transition={transition} className='position-relative' >Contact me</motion.span>
                    </div>
                    <div className="blur c-blur1"></div>
                </div>
                <div className="c-right col-md-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' className='user' placeholder='Name' id='first_name' />
                        <input type="email" name='user_email' className='user' placeholder='Email' id='first_name' />
                        <textarea name="message" className='user' placeholder='Message' />
                        <input type="submit" value="Send" className='button' />

                        <span>{done && "Thanks for contacting me!"}</span>
                    </form>
                    <div className="blur c-blur2"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;