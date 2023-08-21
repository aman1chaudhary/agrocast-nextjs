import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'
import bnr1 from '../../public/images/banner/bnr2.jpg';


import thum1 from '../../public/images/our-services/AgriServices4.jpg';
import thum2 from '../../public/images/our-services/WaterService1.jpg';
import thum3 from '../../public/images/our-services/ClimateService2.jpg';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Services = () => {
    return (
        <>
        <Head>
                <title>Services </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1.src + ")" }}>
                    <PageTitle motherMenu='Services' activeMenu='Services' />
                </div>

                <div className="content-area">
                    <div className="container max-w900">


                        <div className="blog-post blog-lg">
                            <div className="dlab-post-media dlab-img-effect zoom-slow">
                                <Link href="/service/agriculture"><Image src={thum1} alt="" /></Link>
                            </div>
                            <div className="dlab-post-info">
                                <div className="dlab-post-title ">
                                    <h4 className="post-title"><Link href="/service/agriculture">Agriculture</Link></h4>
                                </div>

                                <div className="dlab-post-text">
                                    <p>
                                        AgroCast monitors farms remotely in near real-time and provide insights into crop growth, soil moisture, and crop health condition along with geography-season-crop specific weekly advisory in vernacular languages and it helps farmers to optimize the use of farm resources and increase crop yield.
                                    </p>
                                </div>
                                <div className="dlab-post-readmore blog-share">
                                    <Link href="/service/agriculture" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
                                        <i className="fa fa-long-arrow-right m-l5"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="blog-post blog-lg">
                            <div className="dlab-post-media dlab-img-effect zoom-slow">
                                <Link href="/service/water"><Image src={thum2} alt="" /></Link>
                            </div>
                            <div className="dlab-post-info">
                                <div className="dlab-post-title ">
                                    <h4 className="post-title"><Link href="/service/water">Water Resources</Link></h4>
                                </div>

                                <div className="dlab-post-text">
                                    <p>
                                        AgroCast offers topography survey, hydrology assessment, drainage design, groundwater investigation and modeling services.
                                    </p>
                                </div>
                                <div className="dlab-post-readmore blog-share">
                                    <Link href="/service/water" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
                                        <i className="fa fa-long-arrow-right m-l5"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="blog-post blog-lg">
                            <div className="dlab-post-media dlab-img-effect zoom-slow">
                                <Link href="/service/climate-risk"><Image src={thum3} alt="" /></Link>
                            </div>
                            <div className="dlab-post-info">
                                <div className="dlab-post-title ">
                                    <h4 className="post-title"><Link href="/service/climate-risk">Climate Risk</Link></h4>
                                </div>

                                <div className="dlab-post-text">
                                    <p>
                                        AgroCast assess climatic variables using climate models projection under different scenarios at local to national level.
                                    </p>
                                </div>
                                <div className="dlab-post-readmore blog-share">
                                    <Link href="/service/climate-risk" title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
                                        <i className="fa fa-long-arrow-right m-l5"></i>
                                    </Link>

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

export default Services