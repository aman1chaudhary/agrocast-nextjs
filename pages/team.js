import React from 'react'

import bnr from '../public/images/banner/bnr1.jpg';
import pic1 from '../public/images/our-team/pic1.jpg';
import bg2 from '../public/images/background/bg-map.jpg';
import mission from '../public/images/about/mission.jpg';

import bg9 from '../public/images/background/bg9.png';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import { TeamData } from '../utilities/Utility';
import Image from 'next/image';
import Head from 'next/head';
const OurTeam = () => {
    return (
        <>
                    <Head>
                <title>Team </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page-content bg-white">
                {/* <!-- inner page banner --> */}
                <div className="dlab-bnr-inr overlay-primary " style={{ backgroundImage: "url(" + bnr.src + ")" }}>
                    <PageTitle motherMenu='Our Team' activeMenu='Our Team' />
                </div>

                <div className="content-block">
                    <div className="content-inner newsletter-bx" style={{ backgroundImage: "url(" + bg9.src + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="dlab-box team-curve-bx m-t10" style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)" }} >

                                        <div className="dlab-media">
                                            <Image src={pic1} alt="" />

                                        </div>
                                        <div className="dlab-title-bx p-a10 text-center">
                                            <h5 className="title"><a href="https://www.linkedin.com/in/harsh-shah-77595179/" target='blank'>Harsh Shah</a></h5>
                                            <p>CEO and CTO</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-6">
                                    <div className="section-head title-bx text-left">
                                        <h2>Meet The Founder</h2>
                                    </div>
                                    <h5>
                                        Meet Dr. Harsh Shah, our visionary CEO, a PhD holder from IIT Gandhinagar and a Gold Medalist in BE Civil from LD College of Engineering. With 15 published articles and experience at PIK, Germany, and PNNL, USA, he leads us in building a climate-resilient society, revolutionizing agriculture and water sectors with sustainable solutions.
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Team Section --> */}
                    <div className="section-full text-center bg-white content-inner-1">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2>Meet Our Team</h2>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
                            </div>
                            <div className="row">
                                {TeamData.map((data, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b5" key={index}>
                                        <div className="dlab-box">
                                            <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                                                <Image src={data.images} alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <ul className="dlab-social-icon">
                                                            <li><a href={data.Twitter} target='blank' className="fa text-white fa-twitter"></a></li>
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



                    {/* <!-- Team Section END --> */}
                    {/* <!-- Mission And Vision --> */}
                    <div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2.src + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                        <div className="container">
                            {/* <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Mission And Vision<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div> */}
                            <div className=" row dzseth  m-b30">
                                <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                    <Image src={mission} data-tilt alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                                    <div className="dis-tbl-cell">
                                        <h3 className="box-title">Our Mision<span className="bg-primary"></span></h3>
                                        <p className="font-16">To build a climate-resilient society by analyzing and eliminating the current and projected risk associated in agriculture and water sector considering climate change threat. Our solutions have proved an extremely prudent investment since it adds the social-economic- environmental value and contributes in sustainable growth of country. </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default OurTeam