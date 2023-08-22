import React from 'react'
import CountUp from 'react-countup';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

import bnr1 from '../public/images/banner/bnr1.jpg';
import bnr2 from '../public/images/background/bg11.jpg';
import bnr3 from '../public/images/pattern/pic1.jpg';

import bnr4 from '../public/images/banner/bnr2.jpg';

import about2 from '../public/images/about/about-2.jpg';
import { AgrocastFeatures, TeamData, Testinomial, counterSection } from '../utilities/Utility';

import Image from 'next/image';
import Head from 'next/head';
const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-primary " style={{ backgroundImage: "url(" + bnr1.src + ")" }}>
                    <PageTitle motherMenu='About Us' activeMenu='About Us' />
                </div>

                <div className="content-block">
                    <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr2.src + ")" }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    {/* <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to={"#"} className="icon-cell text-black"><i className="flaticon-trophy"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Elegant / Unique design</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to={"#"} className="icon-cell text-black"><i className="flaticon-technology"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">Different Layout Type</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to={"#"} className="icon-cell text-black"><i className="flaticon-bar-chart"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Make it Simple</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper  m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to={"#"} className="icon-cell text-black"><i className="flaticon-devices"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">True Responsiveness</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    <div className="col-lg-9 col-md-9 col-sm-12 text-black">
                                        <p>
                                            The next step in the agrarian revolution is the digital and technical transformation. We at AgroCast firmly believe in leading this revolution by bringing technology and analytics to all partners in the agrarian value chain.<br />

                                            AgroCast is an agrarian forecasting and analytics firm; offers a wide range of consulting services in agriculture and water sectors. Backed by a team of experts specialising in agroclimatic analytics, machine learning, AI and policy design, we provide scientific solutions to business problems. We believe in bringing the most efficient, effective and affordable knowledge solutions to our partners and have built a practice of the most robust and state of the art analytics tools and applications.<br />

                                            With our structured approach and ability to provide bespoke, contextually relevant solutions in the fields of agriculture and water resources we have partnered with farmers, government agencies, agrarian industries, and crop insurance companies. AgroCast Analytics Pvt Ltd is an Indian registered startup incubated at Indian Institute Technology Gandhinagar incubation Centre. AgroCast analytics is a joint venture of members from the Indian Institute of Technology Gandhinagar and Indian Institute of Management Ahmedabad. Team AgroCast has extensive experience in the field of agriculture, water resources management, climate change analysis, and policymaking.<br />

                                            Our vision is to build a climate-resilient society by analyzing and eliminating the risk associated in agriculture and water sectors under climate change.
                                        </p>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 m-b30">
                                        <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                            <Image src={about2} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-full text-center bg-white content-inner-1">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2>Meet Our Team</h2>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
                            </div>
                            <div className="team_grid">
                                {TeamData.map((data, index) => (
                                    <div className="team_grid_item" key={index}>
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                                                <Image src={data.images} alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            {/* <li><a href={data.Twitter} target='blank' className="fa text-white fa-twitter"></a></li> */}
                                                            <li><a href={data.LinkedIn} target='blank' className="fa text-white fa-linkedin"></a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dlab-title-bx p-a10">
                                                <h5 className="text-black m-a0">{data.name}</h5>
                                                <span className="clearfix">{data.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* <div className="section-full content-inner" style={{ backgroundImage: "url(" + bnr3.src + ")" }}>
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="text-uppercase m-b10">AGROCAST FEATURES</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row text-center">
                                {AgrocastFeatures.map((item, index) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-effect rotate"> <Image src={item.image} alt="" /></div>
                                            <div className="dlab-info p-a20 border-1 bg-white" style={{ minHeight: "120px" }}>
                                                <h5 className="dlab-title m-t0">{item.title}</h5>
                                                <p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}

      




                    {/* <div className="content-inner pro-client-review">
                        <div className="container">
                            <div className="section-head title-bx text-center">
                                <h2>What our Customer Reviews <br /> About Us</h2>
                            </div>
                            <div className="row">
                                {Testinomial.map((data, index) => (
                                    <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                                        <div className="flip-bx testimonial-flip" >
                                            <div className="front">
                                                <div className="inner text-white">
                                                    <div className="testimonial-pic radius">
                                                        <Image src={data.image} alt="" width="100" height="100" />
                                                    </div>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner text-white">
                                                    <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                    <div className="testimonial-detail">
                                                        <strong className="testimonial-name">David Matin</strong>
                                                        <span className="testimonial-position">Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}

                    <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + bnr4.src + ")" }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    {counterSection.map((data, index) => (
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30" key={index}>
                                            <div className="counter-style-1">
                                                <div className="" sty>{data.icon}<span className="counter"><CountUp end={data.num} duration={4} />+</span></div>
                                                <span className="counter-text">{data.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="section-full p-tb80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center max-w600 m-auto ">
                                        <div className="m-b20"><i className="fa fa-quote-left font-45 text-primary"></i></div>
                                        <h4 className="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                        <Link to={"#"} className="site-button radius-xl outline outline-2"><span className="p-lr10">Start New Projects</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />

        </>
    )
}

export default AboutPage