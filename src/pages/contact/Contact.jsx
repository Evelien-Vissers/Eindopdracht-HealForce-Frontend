import React from 'react';
import './Contact.css'
import contact from '../../assets/contact.png'
import Button from '../../components/button/Button.jsx'

const Contact = () => {
    return (
        <div className="contact">
            <h2 className>Let's Get in Touch!</h2>
            <p className="contact-text">We would love to hear from you. Whether you have a question, want to report any unwanted behavior on this platform, or just want to say
                hi, we are here for you.</p>

            <div className="contact-content">
                <img className="contact-image" src={contact} alt="Touch"/>

                <form className="contact-form">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" className="form-input" placeholder="Your Name" required/>

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" className="form-input" placeholder="Your Email" required/>

                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea id="message" className="form-input" placeholder="Your Message" required/>

                    <Button text="Submit" type="mint" size="medium"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;
