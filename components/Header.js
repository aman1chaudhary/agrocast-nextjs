import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';

class Header extends Component {
    componentDidMount() {
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }


        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll("li").forEach(el =>
                (current.parentElement !== el) ? el.classList.remove('open') : ''
            );

            setTimeout(() => {
                current.parentElement.classList.toggle('open');

            }, 100);
        }
    }

    render() {
        return (
            <>
                <header className="site-header header mo-left header-ind" id="fix-header">
                    <div className="top-bar">
                        <div className="container">
                            <div className="row d-flex justify-content-between">
                                <div className="dlab-topbar-left">
                                    <ul>
                                        <li><i className="flaticon-phone-call m-r5"></i> +91 7600756598</li>
                                        <li><i className="ti-location-pin m-r5"></i> Research Park, IIT Gandhinagar, Gujarat, 382355</li>
                                    </ul>
                                </div>
                                <div className="dlab-topbar-right">
                                    <ul>
                                        {/* <li><i className="ti-skype m-r5"></i> Agency.software</li> */}
                                        <li><i className="ti-email m-r5"></i> support@agrocastanalytics.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar clearfix">
                            <div className="container clearfix">

                                <div className="logo-header mostion">
                                    <Link href="/" className="dez-page"><Image src={logo} alt="Logo" /></Link>
                                </div>

                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <a href="https://agrocastanalytics.com/gcc-dashboard/index.php" target='_blank' rel="noreferrer" className="dez-page site-button primary">Dashboard </a>
                                    </div>
                                </div>

                                <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                                    <div className="logo-header mostion d-md-block d-lg-none">
                                        <Link href="/" className="dez-page"><Image src={logo} alt="Logo" /></Link>
                                    </div>
                                    <ul className="nav navbar-nav">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About Us</Link></li>

                                        {/* <li><Link href="/team">Our Team</Link></li> */}
                                        <li><Link href={'#'}>Our Service <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link href={'/service/agriculture'} className="dez-page">Agriculture</Link></li>
                                                <li><Link href={'/service/water'} className="dez-page">Water Resources</Link></li>
                                                <li><Link href={'/service/climate-risk'} className="dez-page">Climate Risk</Link></li>
                                            </ul>
                                        </li>
                                        {/* <li><Link href="/projects">Projects</Link></li> */}

                                        {/* <li><Link href={'#'}>Projects <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link href={'/project-details'} className="dez-page">Project Details </Link></li>
                                                <li><Link href={'/our-projects'} className="dez-page">Our Projects</Link></li>
                                            </ul>
                                        </li> */}

                                        <li className=""><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Header;