import React from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'
import bnr from '../../public/images/banner/bnr1.jpg';

import Link from 'next/link';
import { ProjectsData } from '../../utilities/Utility';
import Image from 'next/image';
import Head from 'next/head';

const OurProjects = () => {

  return (
    <>
      <Head>
        <title>Projects </title>
        <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-content bg-white">

        <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr.src + ")" }}>
          <PageTitle motherMenu="Our Projects" activeMenu="Our Projects" />
        </div>

        <div className="content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {ProjectsData.map((item, index) => (
                  <div className="blog-post blog-md clearfix" key={index}>
                    <div className="dlab-post-media dlab-img-effect zoom-slow">
                      <Link href="/projects"><Image src={item.Image} alt="" /></Link>
                    </div>
                    <div className="dlab-post-info">
                      <div className="dlab-post-title ">
                        <h4 className="post-title"><Link href="/projects">{item.ProjectTitle}</Link></h4>
                      </div>

                      <div className="dlab-post-text">
                        <p>{item.Description}</p>
                      </div>
                      <div className="dlab-post-readmore blog-share">
                        <Link href={`/projects/${item.ProjectTitle}`} title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
                          <i className="fa fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>


      </div>
      <Footer />
    </>
  )
}

export default OurProjects