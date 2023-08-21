import React, {Component} from 'react';
import Slider from "react-slick";

import logo1 from '../public/images/client-logo/logo1.png';
import logo2 from '../public/images/client-logo/logo2.png';
import logo3 from '../public/images/client-logo/logo3.png';
import logo4 from '../public/images/client-logo/logo4.png';
import logo5 from '../public/images/client-logo/logo5.png';
import logo6 from '../public/images/client-logo/logo6.png';
import logo7 from '../public/images/client-logo/logo7.png';
import Image from 'next/image';


const imgblog =[
	{image:logo1, }, {image:logo2, }, {image:logo3, },
	{image:logo4, }, {image:logo5, }, {image:logo6, },
	{image:logo7, },
]

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
} 

class ClientCarousel extends Component{	
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 6,	
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 6,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 5,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 591,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 360,
				  settings: {
					slidesToShow: 2,
				  }
				},
			]
        };
		return(
			<Slider className="client-logo-carousel owl-carousel owl-btn-center-lr owl-btn-3" {...settings}>
				{imgblog.map((item,index)=>(	
					<div className="item p-3" key={index}>
						<div className="br-col-b1 border-1">
							<Image src={item.image} alt="" />
						</div>
					</div>
				))}
			</Slider>			
		)
		
	}
	
}

export default ClientCarousel;