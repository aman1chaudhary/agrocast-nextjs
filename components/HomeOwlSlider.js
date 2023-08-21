import React, {Component} from 'react';
import Slider from "react-slick";

import Slider1 from '../public/images/main-slider/slide1.jpg';
import Slider2 from '../public/images/main-slider/slide2.jpg';
import Slider3 from '../public/images/main-slider/slide3.jpg';
import Slider4 from '../public/images/main-slider/slide4.jpg';
import Link from 'next/link';
import Image from 'next/image';



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className="owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class HomeOwlSlider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: true,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img">
						<Image src={Slider1} className="w-100" alt=""/>
						</div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-600">A platform for Agricultural Outlook</h2>
								<p>AgroCast remotely monitors farms in near real-time, providing valuable data on crop growth, soil moisture, and crop health. Our weekly advisories in regional languages help farmers optimize resources and boost crop yields.</p>
								{/* <Link href ={"#"} className="site-button m-r10 white button-lg">Get Started</Link> */}
								<Link href ="/service/agriculture" className="site-button outline outline-2 button-lg">Discover More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><Image src={Slider2} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-600">From Water Measurement to Resource Management<br/></h2>
								<p>AgroCast offers comprehensive services, including topography surveys, hydrology assessments, drainage design, and groundwater investigations for effective water resource management.</p>
								{/* <Link href ={"#"} className="site-button m-r10 white button-lg">Get Started</Link> */}
								<Link href ="/service/water" className="site-button outline outline-2 button-lg">Discover More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><Image src={Slider3} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-600">Meet the challenges of a changing climate.</h2>
								<p>AgroCast evaluates climatic variables using advanced models, projecting scenarios at local and national levels to help you tackle climate challenges.</p>
								{/* <Link href ={"#"} className="site-button m-r10 white button-lg">Get Started</Link> */}
								<Link href ="/service/climate-risk" className="site-button outline outline-2 button-lg">Discover More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><Image src={Slider4} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-600">Solar-Powered Solutions: Energizing Agriculture</h2>
								<p>AgroCast harnesses the power of sunlight to empower agriculture, offering innovative solar solutions for enhanced productivity.</p>
								{/* <Link href ={"#"} className="site-button m-r10 white button-lg">Get Started</Link> */}
								<Link href ="/service/solar-power" className="site-button outline outline-2 button-lg">Discover More</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default HomeOwlSlider;