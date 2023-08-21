import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'

//Images

import bnr from '../../public/images/banner/climate_bnr.jpg';
import bgmap from '../../public/images/background/bg-map.jpg';

import ClimateService1 from '../../public/images/our-services/ClimateService1.jpg';
import ClimateService2 from '../../public/images/our-services/ClimateService2.jpg';
import ClimateService3 from '../../public/images/our-services/ClimateService3.jpg';
import Image from 'next/image';
import Head from 'next/head';

const dlabBox = [
    { title: 'Extreme Weather Warning', image: ClimateService1, },
    { title: 'Climate Change Assessment', image: ClimateService2, },
    { title: 'Climate Resilience Strategy', image: ClimateService3, },
];

const ClimateRiskService = () => {
  return (
    <>
    <Head>
                <title>Service | Climate Risk </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

    <div className="page-content bg-white">
        <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
            <PageTitle motherMenu='Climate Risk' activeMenu='Services' />
        </div>
        <div className="content-block">

            <div className="section-full content-inner">
                <div className="section-full  content-inner">
                    <div className="sort-title-bx text-black" data-name="Climate Risk Services">Climate Risk Services <i className="fa fa-angle-double-right"></i></div>
                    <div className="container">
                        <div className="row">
                            {dlabBox.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index}>
                                    <div className="dlab-box-bg m-b30 box-hover">
                                        <Image src={item.image} alt='Service' />
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
                            <Image src={ClimateService1} data-tilt alt='Service' />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Extreme Weather Warning<span className="bg-primary"></span></h3>
                                <p className="font-18"><b>Receive bad weather alerts</b></p>
                                <p className="font-16">Alert before extreme weather events help to prepare during the event. We transmit alerts well in advance of extreme precipitation and heatwaves. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row dzseth column-reverse m-b30">
                        <div className="col-lg-6 col-md-12 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Climate Change Assessment<span className="bg-primary"></span></h3>
                                <p className="font-18">
                                    <b>Understand climate variability</b>
                                </p>
                                <p className="font-16">
                                Anthropogenic activities have increased earth temperature by 1.5 ºC over the last century, and the temperature is projected to increase by 1.5-2 ºC by the end of the 21st century. The temperature rise as a signal of climate change puts tremendous pressure on the agriculture and industry sectors. It is essential to know the past as well as the projected climate to build climate resilience society. We provide high-resolution climate change assessment report.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img ">
                            <Image src={ClimateService2} data-tilt alt='Service' />
                        </div>
                    </div>

                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <Image src={ClimateService3} data-tilt alt='Service' />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Climate Resilience Strategy<span className="bg-primary"></span></h3>
                                <p className="font-18"><b>Know climate risk</b></p>
                                <p className="font-16">We provide services to map risk associated due to the changing climate. It helps to identify vulnerable areas, adaptation, mitigation, and resilience strategies to cope up with climate change.</p>
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

export default ClimateRiskService