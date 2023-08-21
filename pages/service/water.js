import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'

//Images

import bnr from '../../public/images/banner/water_bnr.jpg';
import bgmap from '../../public/images/background/bg-map.jpg';

import WaterService1 from '../../public/images/our-services/WaterService1.jpg';
import WaterService2 from '../../public/images/our-services/WaterService2.jpg';
import WaterService3 from '../../public/images/our-services/WaterService3.jpg';
import WaterService4 from '../../public/images/our-services/WaterService4.jpg';
import Image from 'next/image';
import Head from 'next/head';

const servicesBox = [
    { title: 'Hydrological Assessment', image: WaterService1, },
    { title: 'Dam Breach Analysis and Emergency Action Plan (EAP)', image: WaterService2, },
    { title: 'Scouring and Sedimentation analysis for Hydraulic Infrastructure Resilience', image: WaterService3, },
    { title: 'Comprehensive Ground Water Assessment', image: WaterService4, },
];

const WaterService = () => {
    return (
        <>
            <Head>
                <title>Service | Water </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
                    <PageTitle motherMenu='Water Resources' activeMenu='Services' />
                </div>
                <div className="content-block">

                    <div className="section-full content-inner">
                        <div className="section-full  content-inner">
                            <div className="sort-title-bx text-black" data-name="Water Resources Services">Water Resources Services<i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    {servicesBox.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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
                                    <Image src={WaterService1} data-tilt alt='Service' />
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30 dis-tbl">
                                    <div className="dis-tbl-cell">
                                        <h3 className="box-title">Hydrological Assessment<span className="bg-primary"></span></h3>
                                        {/* <p className="font-18"><b>Know catchment properties</b></p> */}
                                        <p className="font-16">A comprehensive report on watershed management is offered by incorporating current data on aspects such as land use, land cover, soil, elevation, and climatic variables. Physics-based hydrological modeling has been used to simulate the water budget and stream flow. Leveraging our expertise, stakeholders, including solar park owners, insurance companies, state water departments, and dam authorities, can make well-informed decisions regarding resource allocation and development within the study area.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row dzseth column-reverse m-b30">
                                <div className="col-lg-6 col-md-12 dis-tbl">
                                    <div className="dis-tbl-cell">
                                        <h3 className="box-title">Dam Breach Analysis and Emergency Action Plan (EAP)<span className="bg-primary"></span></h3>
                                        {/* <p className="font-18"><b>Monitor river flow conditions</b></p> */}
                                        <p className="font-16">
                                            We specialized in comprehensive dam breach modeling and analysis, leveraging our expertise in feasibility-level planning and advanced forecasting techniques. Our suite of services encompasses:<br />
                                            <ul>
                                                <li>
                                                    Dam Breach Modeling & Inundation Mapping: Delivering insights through various Annual Return Interval (ARI) maps.
                                                </li>
                                                <li>
                                                    Probable Maximum Flood (PMF) Studies: Analyzing the worst-case scenarios to provide robust flood estimates.
                                                </li>
                                                <li>
                                                    Hazard Classification Studies: Evaluating the potential risks associated with dam infrastructure and operations.
                                                </li>
                                                <li>
                                                    Emergency Action Plan (EAP) Development: Formulating actionable plans to ensure prompt responses during emergency scenarios, safeguarding communities and resources.
                                                </li>
                                            </ul>

                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 about-img ">
                                    <Image src={WaterService2} data-tilt alt='Service' />
                                </div>
                            </div>

                            <div className=" row dzseth  m-b30">
                                <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                    <Image src={WaterService3} data-tilt alt='Service' />
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30 dis-tbl ">
                                    <div className="dis-tbl-cell">
                                        <h3 className="box-title">Scouring and Sedimentation analysis for Hydraulic Infrastructure Resilience<span className="bg-primary"></span></h3>
                                        {/* <p className="font-18"><b>Monitor the groundwater level</b></p> */}
                                        <p className="font-16">We provide detailed insights into the erosion (scouring) and deposition (sedimentation) dynamics surrounding hydraulic structures by utilizing advanced software simulations for various scenarios. Our efforts are geared towards ensuring the durability, safety, and efficient operation of hydraulic structures, addressing the challenges posed by scouring and sedimentation comprehensively.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row dzseth column-reverse m-b30">
                                <div className="col-lg-6 col-md-12 dis-tbl">
                                    <div className="dis-tbl-cell">
                                        <h3 className="box-title">Comprehensive Ground Water Assessment<span className="bg-primary"></span></h3>
                                        {/* <p className="font-18"> <b>Monitor reservoir storage</b> </p> */}
                                        <p className="font-16">
                                        We provide expert groundwater study and assessment using state-of-the-art tool and model. Our services encompassed detailed groundwater mapping, reliable estimations of aquifer recharge rates, identification of ground water zones and devising sustainable groundwater management plans by designing artificial recharge structures to safeguard community water resources.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 about-img ">
                                    <Image src={WaterService4} data-tilt alt='Service' />
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

export default WaterService