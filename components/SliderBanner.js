import React from 'react'
import Header from './Header'
import HomeOwlSlider from './HomeOwlSlider'
import ImgCarouselContent from './ImgCarouselContent'

const SliderBanner = () => {
    return (

        <div className="page-content bg-white">
            <div className="owl-slider-banner main-slider">
                <HomeOwlSlider />
                <div className="service-box-slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ImgCarouselContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SliderBanner