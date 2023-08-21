import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'
import ImgCarousel from '../../components/ImgCarousel'
import bnr1 from '../../public/images/banner/bnr1.jpg';
import { ProjectsData } from '../../utilities/Utility'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'


const ProjectDetails = () => {
    const Router = useRouter()
    const ProjectTitle = Router.query.ProjectTitle;
    const [Project, setProject] = useState(null);
    useEffect(() => {
        let Project = ProjectsData.find((project) => project.ProjectTitle === (ProjectTitle));
        if (Project) {
            setProject(Project);
        }
    }, [ProjectTitle])

    return (
        <>
            {Project && (
                <>
                    <Head>
                        <title>Projects | {Project.ProjectTitle}</title>
                        <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <div className="page-content bg-white">
                        <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1.src + ")" }}>
                            <PageTitle motherMenu='Project Details' activeMenu='Project Details' />
                        </div>


                        <div className="content-block">
                            <div className="section-full content-inner-2">
                                <div className="container">
                                    <div className="row m-b40">
                                        <div className="col-lg-6 col-md-6 m-b20">
                                            <h2 className="m-b10 m-t0">{Project.ProjectTitle}</h2>
                                            <h5 className="m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            <Link href={"#"} className="site-button radius-xl outline">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <ImgCarousel />
                                        </div>
                                    </div>
                                    <div className="row m-b50">
                                        <div className="col-md-6 m-b20">
                                            <div className="p-a30 bg-gray">
                                                <h6>Project Name: <span className="m-l10 font-weight-300 text-gray-dark"> Project Name</span></h6>
                                                <h6>Client: <span className="m-l10 font-weight-300 text-gray-dark"> Company Name</span></h6>
                                                <h6>Project Commencement Date: <span className="m-l10 font-weight-300 text-gray-dark"> August 4, 2023</span></h6>
                                                <h6>Project Completion Date: <span className="m-l10 font-weight-300 text-gray-dark"> August 4, 2023</span></h6>
                                                <h6>Project url: <span className="m-l10 font-weight-300 text-gray-dark">www.example.com</span></h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <h5 className="text-black fw5 m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h5>
                                            <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>




                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default ProjectDetails