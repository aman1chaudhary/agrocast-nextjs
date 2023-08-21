import React from 'react'
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import bnr1 from '../public/images/banner/bnr1.jpg';
import pattern from '../public/images/pattern/pic1.jpg';
import Head from 'next/head';
const RefundAndCancellation = () => {
  return (
    <>
                <Head>
                <title>Refund & Cancellation Policy</title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

      <div className="page-content bg-white">
        <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1.src + ")" }}>
          <PageTitle motherMenu="Refund & Cancellation Policy" activeMenu="Refund & Cancellation Policy" />
        </div>

        <div className="content-block">

          <div className="section-full overlay-white-middle content-inner" style={{ backgroundImage: "url(" + pattern.src + ")" }}>
            <div className="container">
              <div className="section-head text-black">
                <h3>Refund & Cancellation Policy</h3>
                <div className="dlab-separator bg-primary"></div>
                <p>If at any time you are not satisfied with the quality of services of our application, Within 7 days of subscription purchase you may contact us with a reason for dissatisfaction. If your issue is found to be genuine, your subscription may be considered for a claim of credit, replacement or refund. Otherwise, your complaint will be noted and considered for the respective resolution. Furthermore, you hereby confirm and agree that you will not claim or allege anything against AgroCast concerning the digital content provided to you by the app.</p>
                

                  

                <h4>No Waiver</h4>
                <p>The rights and remedies available under this Policy may be exercised as often as necessary and are cumulative and not exclusive of rights or remedies provided by law. It may be waived only in writing. Delay in exercising or non-exercise of any such right or remedy does not constitute a waiver of that right or remedy, or any other right or remedy.</p>

                  
              </div>





            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default RefundAndCancellation