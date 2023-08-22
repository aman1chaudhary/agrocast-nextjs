import React, {Component} from 'react';
import Slider from "react-slick";


const contentBlog =[
    {icons: <i className="fa fa-analytics" aria-hidden="true"/>, title: 'Climate Resilience', para: 'Analyzing and Mitigating Climate Change Risks',},
    {icons: <i className="flaticon-investment" />, title: 'Proven Solutions', para: 'Adding Socio-Economic Value and Sustainable Growth',},
    {icons: <i class="fa fa-solid fa-satellite"/>, title: 'Satellite Insights', para: 'Utilizing Satellite Data for Informed Decisions',},
    {icons: <i className="fa fa-cloud" aria-hidden="true" />, title: 'Accurate Forecasts', para: 'Reliable Weather Predictions for Agriculture',},
    {icons: <i className="fa fa-calendar" aria-hidden="true" />, title: 'Crop Planning', para: 'Tailored Crop Calendars for Optimal Farming',},
	// {icons: <i className="flaticon-water-drop" />, title: 'Water Resource Management', para: 'Efficient Management of Water Resources for Agriculture',},
]


class ImgCarouselContent extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
				{contentBlog.map((item, index)=>(
					<div className="item p-3" key={index}>
						<div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
							<div className="icon-content">
								<h5 className="dlab-tilte">
									{/* <span className="icon-sm">{item.icons}</span>  */}
									{item.title}
								</h5>
								<p>{item.para}</p>
							</div>
						</div>
					</div>
				))}	
				</Slider>
			</>
		)
	}
	
}

export default ImgCarouselContent;