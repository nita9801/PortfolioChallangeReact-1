import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
            <button onClick={() => navigate('/')} className="btn btn-primary">
                Return to Home
            </button>
        </div>
    );
};

export default Contact;