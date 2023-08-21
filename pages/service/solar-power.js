import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'

//Images

import bnr from '../../public/images/banner/climate_bnr.jpg';
import bgmap from '../../public/images/background/bg-map.jpg';

import SolarService1 from '../../public/images/our-services/SolarService1.jpg';
import SolarService2 from '../../public/images/our-services/SolarService2.jpg';
import SolarService3 from '../../public/images/our-services/SolarService3.jpg';
import Image from 'next/image';


const dlabBox = [
    { title: 'Solar Power Solutions for Sustainable Energy', image: SolarService1, },
    { title: ' Illuminating Farms with Solar Brilliance', image: SolarService2, },
    { title: 'Cultivating Energy Independence through Solar Innovation', image: SolarService3, },
];

const SolarService = () => {
  return (
    <>
    <div className="page-content bg-white">
        <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
            <PageTitle motherMenu='Solar Power' activeMenu='Services' />
        </div>
        <div className="content-block">

            <div className="section-full content-inner">
                <div className="section-full  content-inner">
                    <div className="sort-title-bx text-black" data-name="Solar Power Service">Solar Power Service <i className="fa fa-angle-double-right"></i></div>
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


            <div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="container">
                    {/* <div className="section-head text-center">
            <h2 className="box-title m-tb0">Mission And Vision<span className="bg-primary"></span></h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        </div> */}
                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <Image src={SolarService1} data-tilt alt='Service' />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Solar Power Solutions for Sustainable Energy<span className="bg-primary"></span></h3>
                                {/* <p className="font-18"><b>Receive bad weather alerts</b></p> */}
                                <p className="font-16">At Agrocast, we're committed to powering the future of agriculture through innovative and sustainable solutions. Our Solar Power service offers a transformative approach to energy generation, bringing together the immense potential of solar technology and the agricultural landscape. With a keen understanding of the unique energy demands of farming operations, we design, implement, and manage solar power systems tailored to your specific needs. Harness the sun's abundant energy to reduce your carbon footprint, lower energy costs, and contribute to a greener tomorrow. Whether you're a small-scale farm or a large agricultural enterprise, our Solar Power service is your gateway to cleaner, more efficient energy that fuels growth while preserving the environment. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row dzseth column-reverse m-b30">
                        <div className="col-lg-6 col-md-12 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Illuminating Farms with Solar Brilliance<span className="bg-primary"></span></h3>
                                <p className="font-18">
                                    {/* <b>Understand climate variability</b> */}
                                </p>
                                <p className="font-16">
                                Introducing Agrocast's Solar Power service – your gateway to a brighter and more sustainable future. Imagine fields bathed in sunlight, not only nurturing crops but also generating power to fuel your operations. Our expert team specializes in crafting solar solutions that seamlessly integrate with your farm's layout and energy requirements. By harnessing the power of solar panels, you'll not only enjoy reduced energy costs but also contribute to a more resilient and environmentally conscious agricultural industry. From initial assessment to system installation and ongoing maintenance, Agrocast is your partner in cultivating clean energy for a thriving tomorrow.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img ">
                            <Image src={SolarService2} data-tilt alt='Service' />
                        </div>
                    </div>

                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <Image src={SolarService3} data-tilt alt='Service' />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Cultivating Energy Independence through Solar Innovation<span className="bg-primary"></span></h3>
                                <p className="font-18"><b>Know climate risk</b></p>
                                <p className="font-16">Discover the potential of solar energy with Agrocast's cutting-edge Solar Power service. We understand that modern agriculture relies on dependable energy sources, and our solar solutions provide a sustainable answer. Our team of experts works closely with you to design solar systems that align with your farm's energy needs and goals. By embracing solar power, you're not just investing in a renewable energy source – you're investing in the future resilience of your agricultural enterprise. With Agrocast's Solar Power service, cultivate energy independence, reduce operating costs, and pave the way for a greener, more prosperous farming journey.</p>
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

export default SolarService