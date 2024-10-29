import {useState} from 'react';
import './Contact.css'
import contact from '../../assets/contact.png'
import Button from '../../components/button/Button.jsx'
import axios from 'axios'

const Contact = () => {
    const [firstName, setFirstName] = useState('');;
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactData = {
            firstName,
            lastName,
            email,
            question,
        };

        try {
            const response = await axios.post('http://localhost:8080/users/contact', contactData);

            if (response.status === 200) {
                //Succesvolle reactie
                alert('Message sent succesfully!');
            } else {
                //Fout in de reactie
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.')
        }
    }

    return (
        <div className="contact">
            <h2 className>Let&apos;s Get in Touch!</h2>
            <p className="contact-text">
                We would love to hear from you. Whether you have a question, want to report any unwanted behavior on this platform, or just want to say
                hi, we are here for you.</p>

            <div className="contact-content">
                <img className="contact-image" src={contact} alt="Touch"/>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="first-name" className="form-label">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        className="form-input"
                        placeholder="Your First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                        />

                    <label htmlFor="last-name" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        className="form-input"
                        placeholder="Your Last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                        />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        />

                    <label htmlFor="question" className="form-label">Question or Message:</label>
                    <textarea
                        id="question"
                        className="form-input"
                        placeholder="Your Question or Message"
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                        required
                    />
                    <Button text="Submit" type="mint" size="medium" htmlType="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;
