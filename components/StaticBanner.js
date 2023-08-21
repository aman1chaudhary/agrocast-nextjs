import React from 'react'
import { Link } from 'react-router-dom'
import slider from './../images/main-slider/slide.png';
import bgslider from './../images/main-slider/slide.jpg';
import Image from 'next/image';

const StaticBanner = () => {
    return (
        <div className="home-banner-2" style={{ backgroundImage: "url(" + bgslider.src + ")" }}>
            <div className="container">
                <div className="home-bnr-inner-2 row align-items-center">
                    <div className="home-bnr-content-2 col-md-6">
                        <h4 className="sub-title">Transforming Agriculture With Satellite Based Farm Monitoring</h4>
                        <h2 className="dz-title text-primary"><span>A platform for </span><br /><strong>Agricultural Outlook</strong></h2>
                        {/* <p>Advisory start from sowing to harvesting</p> */}
                        {/* <a href='https://agrocastanalytics.com/gcc-dashboard/index.php' target='_blank' rel="noreferrer" className="site-button button-md radius-xl">Explore Dashboard</a> */}
                        <Link to="/about" className="site-button button-md radius-xl">Know More</Link>
                    </div>
                    <div className="col-md-6">
                        <div className="curve-img">
                            <Image src={slider} alt="Slider" className="slide-img-curve" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticBanner