import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'

import bnr from '../../public/images/banner/agriculture_bnr.jpg';
import bgmap from '../../public/images/background/bg-map.jpg';
import about from '../../public/images/about/about-3.jpg';
import gifImg from '../../public/images/about/about_main_page.gif';
import video_thumbnail from "../../public/images/video_thumbnail2.jpg"
import AgriServices1 from '../../public/images/our-services/AgriServices1.jpg';
import AgriServices2 from '../../public/images/our-services/AgriServices2.jpg';
import AgriServices3 from '../../public/images/our-services/AgriServices3.jpg';
import AgriServices4 from '../../public/images/our-services/AgriServices4.jpg';
import Image from 'next/image';
import agrocast_app from "../../public/images/about/agrocast_app.jpg"
import Head from 'next/head';
import VideoPopup from '../../components/VideoPopup';
import Link from 'next/link';

const AgriServicesBox = [
    { title: 'Agriculture Aid', image: AgriServices1, },
    { title: 'Drought Monitor', image: AgriServices2, },
    { title: 'Crop Health Monitor', image: AgriServices3, },
    { title: 'Crop Acreage', image: AgriServices4, },
];

const AgricultureService = () => {
  return (
    <><Head>
    <title>Service | Agriculture </title>
    <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
    <link rel="icon" href="/favicon.ico" />
</Head>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
                        <PageTitle motherMenu='Agriculture' activeMenu='Services' />
                    </div>
                    <div className="content-block">

                        <div className="section-full content-inner">
                            <div className="section-full  content-inner">
                                <div className="sort-title-bx text-black" data-name="Agriculture Services">Agriculture Services <i className="fa fa-angle-double-right"></i></div>
                                <div className="container">
                                    <div className="row">
                                        {AgriServicesBox.map((item, index) => (
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                                <div className="dlab-box-bg m-b30 box-hover">
                                                    <Image src={item.image} alt='Service'/>
                                                    <div className="icon-bx-wraper center p-lr5 p-tb15">

                                                        <div className="icon-content">
                                                            <h5 className="dlab-tilte">{item.title}</h5>
                                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bgmap.src + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                {/* <div className="section-head text-center">
						<h2 className="box-title m-tb0">Mission And Vision<span className="bg-primary"></span></h2>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
					</div> */}
                                <div className=" row dzseth  m-b30">
                                    <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                        <Image src={AgriServices1} data-tilt alt='Service' />
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl">
                                        <div className="dis-tbl-cell">
                                            <h3 className="box-title">Agriculture Aid<span className="bg-primary"></span></h3>
                                            <p className="font-18"><b>Get agriculture advisory from sowing to harvesting</b></p>
                                            <p className="font-16">Agriculture aid helps to mitigate the worst impact on crop yield and health during unfavorable events. We analyze the weather, soil moisture, and crop health indices to generate agriculture advisory. Agriculture aid provides highly accurate and real time information on the right time of sowing/harvesting, application of pesticide, and irrigation. The agriculture aid is available local languages via our mobile application. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row dzseth column-reverse m-b30">
                                    <div className="col-lg-6 col-md-12 dis-tbl">
                                        <div className="dis-tbl-cell">
                                            <h3 className="box-title">Drought Monitor<span className="bg-primary"></span></h3>
                                            <p className="font-18">
                                                <b>Monitor drought propagation with time</b>
                                            </p>
                                            <p className="font-16">
                                                Drought is the costliest natural disaster. Monitoring drought ahead of time helps reduce the unpleasant impact on water and agriculture sectors. We monitor meteorological and hydrological drought at fine resolution. The drought monitoring system provides information on drought severity and area extent well in advance giving the partners time to mitigate and counter the impact of drought.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 about-img ">
                                        <Image src={AgriServices2} data-tilt alt='Service' />
                                    </div>
                                </div>

                                <div className=" row dzseth  m-b30">
                                    <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                        <Image src={AgriServices3} data-tilt alt='Service' />
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl">
                                        <div className="dis-tbl-cell">
                                            <h3 className="box-title">Crop Health Monitor<span className="bg-primary"></span></h3>
                                            <p className="font-18"><b>Monitor crop stress</b></p>
                                            <p className="font-16">The Normalized Difference Vegetation Index (NDVI) and Vegetation Health Index are used to monitor crop health. We provide weekly vegetation health indexes. Utilizing real time plant and soil data and past soil data, we provide advisory on crop health and preventive measures to minimize damage to crops and prevent crop failure.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row dzseth column-reverse m-b30">
                                    <div className="col-lg-6 col-md-12 dis-tbl">
                                        <div className="dis-tbl-cell">
                                            <h3 className="box-title">Crop Acreage<span className="bg-primary"></span></h3>
                                            <p className="font-18">
                                                <b>Estimate seasonal crop yield</b>
                                            </p>
                                            <p className="font-16">
                                                Using high resolution satellite images modeling along with Machine Learning, we classify crops and estimate crop yield for season.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 about-img ">
                                        <Image src={AgriServices4} data-tilt alt='Service' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="section-full ">
                        <div className="container-fluid">
                            <div className="row dzseth">
                                <div className="col-lg-6 col-md-6 col-xs-12 p-a0 img-fix">
                                    <Image src={agrocast_app} alt="" className="app-img" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-xs-12 bg-black-light p-lr0 dis-tbl">
                                    <div className="p-a20 dis-tbl-cell">
                                        <div className="m-auto p-tb10">
                                            <div className="row">
                                                <div className="col-lg-12 text-white">
                                                    <h2>Agrocast App Features</h2>

                                                    {/* <h5 className="m-b30">Consultancy Services In Agriculture, Water, And Climate Change Sector </h5> */}
                                                </div>
                                                <div className="col-lg-12 chosesus-content">
                                                    <ul className="list-checked primary text-white">
                                                        <li><span>Satellite Based Indices </span></li>
                                                        <li><span>Get local weather forecast on hourly to daily time step. </span></li>
                                                        <li><span>Information about rainfall, temperature, humidity and wind speed.  </span></li>
                                                        <li><span>Geography And Season Specific Crop Calendar </span></li>
                                                        <li><span>Information about the crop. </span></li>
                                                        <li><span>Get weekly farming activities starting from sowing to harvesting.</span></li>
                                                        <li><span>Information on Pests and Disease management. </span></li>

                                                    </ul>
                                                    {/* <Link to={"#"} className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></Link> */}
                                                </div>
                                            </div>
                                            {/* <div className="row">
                                                    <div className="col-lg-12 m-b30 text-gray">
                                                        <p>AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats. Our solutions have proved an extremely prudent investment since it adds social-economic value and contributes to the country's sustainable growth.</p>

                                                        <Link to ={"#"} className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="content-inner pro-client-review">
                        <div className="container">
                            <div className="section-head title-bx text-center">
                                <h2>How to add farm in <br /> Agrocast App</h2>
                            </div>
                            <div className="row">
                                <div className="m-b30">
                                    <div className="faq-video">
                                        <VideoPopup videoID="PWEY6vtELd8" />
                                        <Image src={video_thumbnail} alt="" className="img-cover radius-sm" />
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

export default AgricultureService