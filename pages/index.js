import Head from 'next/head'
import Image from 'next/image'
import FooterMain from '../components/FooterMain'
import SliderBanner from '../components/SliderBanner'
import dynamic from 'next/dynamic';
import ourMissionBackground from '../public/images/background/bg6.png';
import video_thumbnail from '../public/images/video_thumbnail.jpg';

import ourMissionImg from '../public/images/about/our-mission.jpg';
import aboutImg from '../public/images/about/about_main_page.jpg';
import gifImg from '../public/images/about/about_main_page.gif';
import service1 from '../public/images/features/pic1.png';
import service2 from '../public/images/features/pic2.png';
import service3 from '../public/images/features/pic3.png';
import Link from 'next/link'
import VideoPopup from '../components/VideoPopup'
import ClientCarousel from '../components/ClientCarousel'
import HomeContactForm from '../components/HomeContactForm';
import Footer from '../components/Footer';
import { useRef } from 'react';
import StaticBanner from '../components/StaticBanner';


const ProjectMap = dynamic(() => import('../components/ProjectMap'), {
  ssr: false,
});


export default function Home() {
  const pastProjectsRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Agrocast Analytics </title>
        <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
        <meta name="keywords" content="Agricultural, Water Resourse, Climate Risk, Agrocast" />
        <meta name="author" content="Agrocast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="page-content bg-white rubik-font">
          <SliderBanner />
          {/* <StaticBanner/> */}

          <div className="content-block">

            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box row" >
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">About Us<span className="bg-primary"></span></h2>
                        <h4 className="text-gray-dark">Harvesting Resilience: Empowering Agriculture with Climate-Smart Solutions.</h4>

                      </div>
                      <div className="col-lg-8">
                        <p>AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats. Our solutions have proved an extremely prudent investment since it adds social-economic value and contributes to the country&apos;s sustainable growth.</p>
                        {/* <Link href="/about" className="site-button button-long button-md radius-xl">Read More</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img" >
                    <Image src={aboutImg} data-tilt alt="" />
                  </div>
                </div>
              </div>
            </div>


            <div className="section-full business-pro-blog"
              style={{ backgroundImage: "url(" + ourMissionBackground.src + ")" }}
            >
              <div className="container">
                <div className="content-inner our-featured">
                  <div className="setResizeMargin">
                    <div className="row m-a0 d-flex align-items-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="section-head title-bx">
                          <h2>Our Mission</h2>
                          {/* <h3 className="text-primary font-weight-500">Pricing starts from 30$</h3> */}
                          <p className="m-b30">To build a climate-resilient society by analyzing and eliminating the current and projected risk associated in agriculture and water sector considering climate change threat. Our solutions have proved an extremely prudent investment since it adds the social-economic- environmental value and contributes in sustainable growth of country.</p>
                          {/* <Link href="/about" className="site-button button-long button-md radius-xl">Read More</Link> */}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6 text-right">
                        <div className="feature-img-bx" >
                          <Image src={ourMissionImg} alt="" className="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* <div className="content-inner business-blog">
              <div className="container">
                <div className="section-head title-bx text-center">
                  <h2>Our Services</h2>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="blog-post blog-bx blog-img-bottom ">
                      <div className="dlab-post-info">
                        <div className="blog-number">01</div>
                        <div className="dlab-post-title ">
                          <h3 className="post-title"><Link href="/service/agriculture">Agriculture</Link></h3>
                        </div>

                        <div className="dlab-post-text">
                          <p>AgroCast monitors farms remotely in near real-time and provide insights into crop growth, soil moisture, and crop health condition along with geography-season-crop specific weekly advisory in vernacular languages and it helps farmers to optimize the use of farm resources and increase crop yield.</p>
                        </div>
                        <div className="dlab-post-readmore blog-share">
                          <Link href="/service/agriculture" title="READ MORE" rel="bookmark" className="site-button-link">Read More <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                      <div className="dlab-post-media blog-curve-img">
                        <Link href="/service/agriculture">
                          <Image src={service1} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="blog-post blog-bx  ">
                      <div className="dlab-post-media blog-curve-img">
                        <Link href="/service/water"><Image src={service2} alt="" /></Link>
                      </div>
                      <div className="dlab-post-info">
                        <div className="blog-number">02</div>
                        <div className="dlab-post-title ">
                          <h3 className="post-title"><Link href="/service/water">Water Resources</Link></h3>
                        </div>

                        <div className="dlab-post-text">
                          <p>AgroCast offers topography survey, hydrology assessment, drainage design, groundwater investigation and modeling services.</p>
                        </div>
                        <div className="dlab-post-readmore blog-share">
                          <Link href="/service/water" title="READ MORE" rel="bookmark" className="site-button-link">Read More <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="blog-post blog-bx blog-img-bottom " >
                      <div className="dlab-post-info">
                        <div className="blog-number">03</div>
                        <div className="dlab-post-title ">
                          <h3 className="post-title"><Link href="/service/climate-risk">Climate Risk</Link></h3>
                        </div>

                        <div className="dlab-post-text">
                          <p>AgroCast assess climatic variables using climate models projection under different scenarios at local to national level.</p>
                        </div>
                        <div className="dlab-post-readmore blog-share">
                          <Link href="/service/climate-risk" title="READ MORE" rel="bookmark" className="site-button-link">Read More <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                      <div className="dlab-post-media blog-curve-img">
                        <Link href="/service/climate-risk"><Image src={service3} alt="" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="section-full bg-white content-inner-2 m-t50">
              <div className="container">
                <div className="row equal-wraper3">
                  <div className="col-lg-5 dis-tbl m-b30">
                    <div className="dis-tbl-cell  m-b30">
                      <div className="section-head title-bx">
                        <h2>Agrocast Dashboard</h2>
                        <ul className="list-angle-right">
                          <li><span>Crop growth (NDVI), Crop health (EVI) and Soil condition (NDMI).</span></li>
                          <li><span>Water body monitoring.</span></li>
                          <li><span>Land use and land cover change mapping.</span></li>
                          <li><span>Drought and flood analysis. Crop loss estimation.</span></li>
                          <li><span>Crop classification and crop yield estimation.</span></li>

                        </ul>
                      </div>


                      <a href='https://agrocastanalytics.com/gcc-dashboard/index.php' className="site-button  btn-icon" target='blank'>Explore Dashboard <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-7 m-b30" >
                  <div className="container">
                    <Image src={gifImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* <div className="section-full">
              <div className="container-fluid">
                <div className="row dzseth">
                  <div className="col-lg-6 col-md-12 p-a0">
                    <Image src={gifImg} alt="" className="img-cover" />
                  </div>
                  <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                    <div className="p-a10 dis-tbl-cell ">
                      <div className=" m-auto p-a20">
                        <div className="row">
                          <div className="col-lg-12 text-white">
                            <h3 className="box-title m-b10">Agrocast Dashboard<span className="bg-primary"></span></h3>
                            <h5 className="m-b30">AgroCast monitors farms remotely in near real-time and provide insights into crop growth, soil moisture, and crop health condition along with geography-season-crop specific weekly advisory in vernacular languages and it helps farmers to optimize the use of farm resources and increase crop yield.</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 m-b30 chosesus-content">
                            <ul className="list-checked primary text-white">
                              <li><span>Crop growth (NDVI), Crop health (EVI) and Soil condition (NDMI).</span></li>
                              <li><span>Water body monitoring.</span></li>
                              <li><span>Land use and land cover change mapping.</span></li>
                              <li><span>Drought and flood analysis. Crop loss estimation.</span></li>
                              <li><span>Crop classification and crop yield estimation.</span></li>
                            </ul>
                            <a href='https://agrocastanalytics.com/gcc-dashboard/index.php' target='blank' className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

<div className="container m-t80 m-b30">
              <div className="section-head title-bx text-center">
                <h2>Download Agrocast Mobile App</h2>
              </div>
              <div className="app-btn-bx text-center">
                {/* <Link href={"#"} className="site-button radius-xl m-lr5 "><i className="fa fa-apple"></i>IOS</Link> */}
                <Link href={"#"} className="site-button radius-xl m-lr5" ><i className="fa fa-android"></i>Android</Link>
              </div>
            </div>
            <div className="container">
              <div className="m-b30">
                <div className="faq-video">
                  <VideoPopup videoID="t_EuAkunsbM" />
                  <Image src={video_thumbnail} alt="" className="img-cover radius-sm" />
                </div>
              </div>
            </div>



            <div className="m-t80 m-b30">
              <div className='container'>

                <div className='row'>
                  <div className='col-lg-6 col-md-12 p-lr15'>
                    <ProjectMap />
                  </div>
                  <div className='col-lg-6 col-md-12 p-tb20 p-lr30'>
                    <div className="section-head title-bx text-left">
                      <h2>A Glance of Our Work</h2>
                      <p>
                    In our journey at AgroCast, we take immense pride in our past projects, each a testament to our unwavering commitment to agriculture, water, and climate change sectors. Our history is woven with successes in climate-resilient farming initiatives, the implementation of solar-powered agricultural solutions, optimizing water resource management, and providing crop-specific advisory programs. Through these projects, we&apos;ve not only enhanced agricultural practices but also empowered communities with knowledge and tools to thrive in an ever-changing environment. Explore our rich portfolio of past endeavors, a testament to our dedication to sustainable growth and resilience
                    </p>
                    </div>
                    
                    <Link
                      href="#"
                      className="site-button btn-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        pastProjectsRef.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }}
                    >
                      Know more <i className="fa fa-angle-double-right"></i>


                    </Link>

                  </div>
                </div>

              </div>


            </div>



            

            <div ref={pastProjectsRef}>
              <HomeContactForm />
            </div>









            <div className="container">
              <div className="section-head title-bx text-center">
                <h2>Our Clients</h2>
              </div>

              <ClientCarousel />
            </div>

          </div>
        </div>

        {/* <FooterMain /> */}
        <Footer />
      </main>


    </div>
  )
}
