import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [ done, setDone ] = useState(false);
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
        <div className='contact' id='Contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get me in touch </span>
                    <span>Contact me</span>
                </div>
                <div className="blur c-blur1"></div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting me!"}</span>
                </form>
                <div className="blur c-blur2"></div>
            </div>
        </div>
    );
};

export default Contact;