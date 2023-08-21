import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import bgimg from '../public/images/background/bg15.jpg';
import bnr from '../public/images/banner/bnr1.jpg';
import Head from 'next/head';
import axios from 'axios';

const ContactPage = () => {
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
        <>
            <Head>
                <title>Contact Us </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
                    <PageTitle motherMenu='Contact Us' activeMenu='Contact Us' />
                </div>

                <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                    <div className="container m-b20">
                        <div className="row">
                            <div className="col-lg-12 col-xs-12">
                                <form className="inquiry-form dzForm" >
                                    <div className="dzFormMsg"></div>
                                    <h3 className="box-title m-t0 m-b10">Let&apos;s Connect <span className="bg-primary"></span></h3>
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p> */}
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                    <input
                                                        name="name"
                                                        type="text" required
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        value={formData.name}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                    <input
                                                        name="phone"
                                                        type="text" required
                                                        className="form-control"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                    <input
                                                        name="email"
                                                        type="email" className="form-control"
                                                        required
                                                        placeholder="Your Email Id"
                                                        value={formData.email}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                    <textarea
                                                        name="message" rows="8"
                                                        className="form-control" required
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">


                                            <button
                                                onClick={onSubmit}
                                                className="site-button button-lg"
                                                disabled={isLoading}
                                                style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                                            >
                                                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                                            </button>
                                            <p>{message}</p>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="dlab-bnr-inr contact-page">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="row text-black">
                                    <div className="col-lg-12 col-md-12 m-b30" >
                                        <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">
                                                    <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                    Address
                                                </h5>
                                                <p>Research Park, IIT Gandhinagar, Gujarat, 382355 </p>
                                                <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Office Hours</h6>
                                                <p className="m-b0">Mon To Sat - 09.00-18.00</p>
                                                <p>Sunday - Close</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 m-b30 ">
                                        <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">
                                                    <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                    E-mail
                                                </h5>
                                                <p className="m-b0">support@agrocastanalytics.com</p>
                                                {/* <p>support@example.com</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">
                                                    <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                    Phone Numbers
                                                </h5>
                                                <p>+91 7600756598</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm" style={{ height: "100%" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.716008600612!2d72.6903549!3d23.2183661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bdd10281fa1%3A0xc3f3a36276b39c77!2sIIT%20Gandhinagar%20Research%20Park!5e0!3m2!1sen!2sin!4v1691746161029!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
                                        referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
                                    </iframe>
                                </div>
                            </div>



                            {/* <div className="col-lg-8 col-xs-8">
                                <form className="inquiry-form dzForm" action="script/contact.php">
                                    <div className="dzFormMsg"></div>
                                    <h3 className="box-title m-t0 m-b10">Let's Connect <span className="bg-primary"></span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                    <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                    <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                    <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                    <textarea name="dzMessage" rows="8" className="form-control" required placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Send</span> </button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}


                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactPage