import React, { useEffect, useState } from 'react'
import contactBG from '../public/images/background/contact_background.png';
import axios from 'axios';

const HomeContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'Agrocast Website New Message', phone: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")


    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setMessage('');
        }, 2000);

        return () => {
            clearTimeout(messageTimer);
        };
    }, [message]);


    const handleChange = ({ target }) =>
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));

    const onSubmit = async () => {
        const hasNullValue = Object.values(formData).some(value => value === null || value === '');
        if (hasNullValue) {
            setMessage('Please fill in all fields before submitting.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/contact', formData, {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });

            if (response.status !== 200) {
                throw new Error('Failed to send message');
            }

            setIsLoading(false);
            setFormData({ name: '', email: '', subject: 'Portfolio Website Contact Form', phone: '', message: '' });
            setMessage('Message Sent Successfully');
        } catch (error) {
            setIsLoading(false);
            setMessage('Error sending message:', error);

        }
    };

    return (


        <div className="content-inner business-contact" style={{ backgroundImage: "url(" + contactBG.src + ")", backgroundPosition: "right center", backgroundRepeat: "no-repeat" }}>
            <div className="container">
                <div className="section-head title-bx text-center">
                    <h2>Have a question? Contact Us</h2>
                </div>
                <form className="row dezPlaceAni contact-form-bx">
                    <div className="dzFormMsg"></div>
                    <div className="col-lg-4 col-md-4">
                        <div className="form-group ">
                            <div className="input-group">
                                <label>Full name*</label>
                                <input
                                    name="name" required
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="form-group " >
                            <div className="input-group">
                                <label>Email Address*</label>
                                <input
                                    name="email"
                                    required type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="form-group " >
                            <div className="input-group">
                                <label>Phone Number*</label>
                                <input name="phone" r
                                    equired type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group" >
                            <div className="input-group">
                                <label>Your Questions*</label>
                                <textarea
                                    name="message" rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control" required
                                    placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center ">

                        <button
                            onClick={onSubmit}
                            className="site-button radius-xl"
                            disabled={isLoading}
                            style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                        >
                            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                        </button>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default HomeContactForm