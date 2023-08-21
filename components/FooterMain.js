import React from 'react'
import Logo from "../public/images/logo.png"
import Link from 'next/link'
import Image from 'next/image'

const FooterMain = () => {

    return (
        <>
            <footer className="site-footer text-uppercase footer-white business-footer">
                <div className="footer-top">
                    <div className="container" >
                        <div className="row">
                            <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Company</h5>
                                    <ul>
                                        <li><Link href="/">Home </Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        {/* <li><Link href="/team">Our Team</Link></li> */}
                                        <li><Link href="/service">Our Services</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Useful Link</h5>
                                    <ul>
                                        {/* <li><Link href="/faqs">Faq's</Link></li> */}
                                        <li><Link href="/terms-and-condition">Terms and Conditions </Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policies</Link></li>
                                        <li><Link href="/refund-and-cancellation-policy">Refund & Cancellation Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h5 className="m-b30 text-white ">Contact us</h5>
                                    <ul>
                                        <li><i className="ti-location-pin"></i><strong>Address</strong>Research Park, IIT Gandhinagar, Gujarat, 382355</li>
                                        <li><i className="ti-mobile"></i><strong>Phone</strong>+91 7600756598</li>
                                        <li><i className="ti-email"></i><strong>Email</strong>support@agrocastanalytics.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                <div className="widget">
                                    <Image src={Logo} alt='Logo' />
                                    {/* <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div> */}
                                    <ul className="list-inline m-a0">
                                        <li><Link href={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                        {/* <li><Link href={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li> */}
                                        <li><Link href={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-youtube"></i></Link></li>
                                        <li><Link href={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                        {/* <li><Link href={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li> */}
                                        <li><Link href={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center"> <span>Copyright © 2023 Agrocast - All Rights Reserved</span> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterMain