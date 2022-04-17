import React, {Component} from 'react';
import Smg from "../../../../images/smug-sweater.png";
import {Card, CardGroup, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CgWebsite} from "react-icons/cg";
import {FcAndroidOs} from "react-icons/fc";
import {MdOutlineDomain} from "react-icons/md";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';




class HomePageContainer extends Component {
    render() {
        return (
            <>
                <section id="container">
                    <div className="main">

                        <div className="row">
                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                    <div className="container-service-box">
                                        <a
                                           title="Web Designing & Developing"><Link to={"static-website-design"}><i className="fa fa-picture-o"></i></Link></a>
                                        <h3 title="">
                                            <a><Link to="static-website-design">Website
                                                Development</Link> </a></h3>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                    <div className="container-service-box">
                                                        <a title="Web Application Development company uttara dhaka Bangladesh">
                                                            <Link to="web-application-development">
                                                                <i className="fa fa-code"></i>
                                                            </Link>

                                                        </a>
                                                        <h3 title="Web Application Development company uttara dhaka Bangladesh"><a>
                                                            <Link to="web-application-development">Application
                                                                Development</Link></a>
                                                        </h3>
                                                    </div>

                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a href="https://unitechbdsoft.com/domain-registration-dhaka-bangladesh.php"
                                                       title="Domain Registration company uttara dhaka Bangladesh">
                                                        <Link to="domain-registration"><i
                                                            className="fa fa-buysellads"></i></Link>
                                                    </a>
                                                    <h3 title="Domain Registration company uttara dhaka Bangladesh"><a>
                                                        <Link to="domain-registration">Domain
                                                            Registration</Link>
                                                        </a></h3>
                                                </div>

                                </div>
                            </div>


                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a
                                                       title="Best Web Hosting company uttara dhaka Bangladesh">
                                                        <Link to="business-web-hosting"><i
                                                            className="fa fa-server"></i></Link>
                                                        </a>
                                                    <h3 title="Best Web Hosting company uttara dhaka Bangladesh"><a>
                                                        <Link to="business-web-hosting">Business
                                                        Web Hosting</Link></a></h3>
                                                </div>


                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a
                                                       title="Corporate Email Services Uttara Dhaka Bangladesh">
                                                        <Link to="/business-email-services"><i
                                                            className="fa fa-envelope-o"></i></Link>
                                                    </a>
                                                    <h3 title="Corporate Email Services Uttara Dhaka Bangladesh"><a
                                                        ><Link to="business-email-services">Corporate
                                                        Email Services</Link></a></h3>
                                                </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a
                                                       title="Software Development company uttara dhaka Bangladesh"><Link to={"/software-development"}><i
                                                        className="fa fa-windows"></i></Link></a>
                                                    <h3 title="Software Development company uttara dhaka Bangladesh"><a
                                                        ><Link to={"/software-development"}>Software
                                                        Development</Link></a></h3>
                                                </div>





                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a
                                                        title="Google / G-Suite Email Service Dhaka Bangladesh"><Link to={"/business-email-services"}><i
                                                        className="fa fa-envelope"></i></Link></a>
                                                    <h3 title="Google / G-Suite Email Service Dhaka Bangladesh"><a
                                                     ><Link to={"/business-email-services"}>Services Automation</Link></a></h3>
                                                </div>

                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                    <div className="container-service-box">
                                        <a
                                           title="SMS Marketing company uttara dhaka Bangladesh">

                                            <Link to={"/sms-marketing"}><i
                                                className="fa fa-mobile"></i></Link>
                                        </a>
                                        <h3 title="SMS Marketing company uttara dhaka Bangladesh"><a
                                            ><Link to={"/sms-marketing"}>SMS
                                            Marketing</Link></a></h3>
                                    </div>

                                </div>
                            </div>


                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a
                                                       title="Facebook Advertising company uttara dhaka Bangladesh"><Link to={"/digital-marketing"}><i
                                                        className="fa fa-line-chart"></i></Link></a>
                                                    <h3 title="Facebook Advertising company uttara dhaka Bangladesh"><a
                                                        ><Link to={"/digital-marketing"}>Digital
                                                        Marketing</Link></a></h3>
                                                </div>


                                </div>
                            </div>

                            <div className="col-md-15 col-sm-3 col-6">
                                <div className="container-service">
                                                <div className="container-service-box">
                                                    <a 
                                                       title="News Portal Development company uttara dhaka Bangladesh"><Link to={"/online-news-portal-solution"}>
                                                        <i
                                                            className="fa fa-newspaper-o"></i></Link></a>
                                                    <h3 title="News Portal Development company uttara dhaka Bangladesh"><a
                                                    ><Link to={"/online-news-portal-solution"}>E-Portal
                                                        Development</Link></a></h3>
                                                </div>

                                </div>
                            </div>
                        </div>

                        <div className="container-content-about mt-5">
                            <h2 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh"><i
                                className="fa fa-bars"></i> We Are UNITECH :: Website Design &amp; Web Hosting Company
                                in Dhaka Bangladesh</h2>
                            <p>We have started our journey from 2009 as a Website Design &amp; Web Hosting Company
                                specialized digital interactive organization. Our dedicated team of professionals is
                                always ready with new and unique ideas of promoting your business.</p>
                            <p>Holding the experience, we have more than 300++ satisfied customers &amp; counting.</p>
                            <p>If you are planning to build your company identity, then we are here to assist you. We
                                provide complete IT services for your business like website development, web hosting,
                                software, corporate email services, domain registration &amp; digital marketing. </p>
                            <p><a href="https://unitechbdsoft.com/about-unitech-dhaka-bangladesh.php"
                                  title="Website Design &amp; Web Hosting Company Dhaka Bangladesh">Continue Reading
                                →</a></p><br/>
                        </div>

                        <div className="container-content-sidebar mt-5">
                            <h2 title="Best Website Design company uttara dhaka Bangladesh"><i
                                className="fa fa-html5"></i> Fix an Appointment !! Call us</h2>
                            <ul className="sidebar-icon">
                                <li><i className="fa fa-phone-square"></i><span> +88 02 48956492</span></li>
                                <li><i
                                    className="fa fa-phone-square"></i><span> +88 01782 656 388, +88 01977 77 3283</span>
                                </li>
                                <li><i className="fa fa-envelope"></i><span> info[at]unitechbdsoft.com</span></li>
                            </ul>
                        </div>


                                    <div className="container-portfolio">
                                        <h3 title="Best Website Design company in uttara Dhaka Bangladesh">
                                            <i className="fa fa-heartbeat"></i> Some Major Clients :: We love our country, we
                                            love our peoples, we love our customers...</h3>
                                        <div className="container-portfolio-content">


                                            <Row>
                                                <Col lg={3} md={3} sm={6} xs={6}>
                                                    <Card className="text-center">

                                                        <div className="portfolio_box">
                                                            <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} xs={6}>
                                                    <Card className="text-center">
                                                        <div className="portfolio_box">
                                                            <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>
                                                        </div>

                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} xs={6}>
                                                    <Card className="text-center">
                                                        <div className="portfolio_box">
                                                            <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>
                                                        </div>

                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} xs={6}>
                                                    <Card className="text-center">
                                                        <div className="portfolio_box">
                                                            <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>
                                                        </div>

                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>


                        <div className="container-counter">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="single-counter">
                                        <h3 className="counter">5000+</h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="single-counter">
                                        <h3 className="counter">100+</h3>
                                        <p>Application Developed</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="single-counter">
                                        <h3 className="counter">1000+</h3>
                                        <p>Domain Hosted</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="single-counter">
                                        <h3 className="counter">300+</h3>
                                        <p>Satisfied Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{clear: "both"}}></div>

                    </div>

                </section>






                {/*<section id="container">*/}
                {/*    <div className="main">*/}

                {/*        <div className="container-service">*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/website-design-dhaka-bangladesh.php"*/}
                {/*                   title="Website Design Company in Uttara Banani DOHS Gulshan 1 2 Mohakhali DOHS Dhanmondi Dhaka Gazipur Bangladesh"><i*/}
                {/*                    className="fa fa-picture-o"></i></a>*/}
                {/*                <h3 title="Website Design Company in Uttara Banani DOHS Gulshan 1 2 Mohakhali DOHS Dhanmondi Dhaka Gazipur Bangladesh">*/}
                {/*                    <a href="https://unitechbdsoft.com/website-design-dhaka-bangladesh.php">Website*/}
                {/*                        Development</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/dynamic-website-development-dhaka-bangladesh.php"*/}
                {/*                   title="Web Application Development company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-code"></i></a>*/}
                {/*                <h3 title="Web Application Development company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/web-application-development-dhaka-bangladesh.php">Application*/}
                {/*                    Development</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/domain-registration-dhaka-bangladesh.php"*/}
                {/*                   title="Domain Registration company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-buysellads"></i></a>*/}
                {/*                <h3 title="Domain Registration company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/domain-registration-dhaka-bangladesh.php">Domain*/}
                {/*                    Registration</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/business-web-hosting-dhaka-bangladesh.php"*/}
                {/*                   title="Best Web Hosting company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-server"></i></a>*/}
                {/*                <h3 title="Best Web Hosting company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/business-web-hosting-dhaka-bangladesh.php">Business*/}
                {/*                    Web Hosting</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/corporate-email-services-uttara-dhaka-bangladesh.php"*/}
                {/*                   title="Corporate Email Services Uttara Dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-envelope-o"></i></a>*/}
                {/*                <h3 title="Corporate Email Services Uttara Dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/corporate-email-services-uttara-dhaka-bangladesh.php">Corporate*/}
                {/*                    Email Services</a></h3>*/}
                {/*            </div>*/}

                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/online-software-development-dhaka-bangladesh.php"*/}
                {/*                   title="Software Development company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-windows"></i></a>*/}
                {/*                <h3 title="Software Development company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/desktop-software-development-dhaka-bangladesh.php">Software*/}
                {/*                    Development</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/google-email-services-dhaka-bangladesh.php"*/}
                {/*                   title="Google / G-Suite Email Service Dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-envelope"></i></a>*/}
                {/*                <h3 title="Google / G-Suite Email Service Dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/google-email-services-dhaka-bangladesh.php">G-Suite*/}
                {/*                    Email Service</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/facbook-advertising-dhaka-bangladesh.php"*/}
                {/*                   title="Facebook Advertising company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-line-chart"></i></a>*/}
                {/*                <h3 title="Facebook Advertising company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/facbook-advertising-dhaka-bangladesh.php">Facebook*/}
                {/*                    Marketing</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/online-news-portal-development-dhaka-bangladesh.php"*/}
                {/*                   title="News Portal Development company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-newspaper-o"></i></a>*/}
                {/*                <h3 title="News Portal Development company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/online-news-portal-development-dhaka-bangladesh.php">E-Portal*/}
                {/*                    Development</a></h3>*/}
                {/*            </div>*/}
                {/*            <div className="container-service-box">*/}
                {/*                <a href="https://unitechbdsoft.com/sms-marketing-outsource-dhaka-bangladesh.php"*/}
                {/*                   title="SMS Marketing company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-mobile"></i></a>*/}
                {/*                <h3 title="SMS Marketing company uttara dhaka Bangladesh"><a*/}
                {/*                    href="https://unitechbdsoft.com/sms-marketing-outsource-dhaka-bangladesh.php">SMS*/}
                {/*                    Marketing</a></h3>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="container-promotion">*/}

                {/*            <div className="container-promotion-left">*/}
                {/*                <i className="fa fa-bullhorn"></i>*/}
                {/*                <h2 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh">Let’s make*/}
                {/*                    something great together!!</h2>*/}
                {/*            </div>*/}

                {/*            <div className="container-promotion-right"><a href="tel:+8801977773283"*/}
                {/*                                                          title="Website Design &amp; Web Hosting Company Dhaka Bangladesh">Let's*/}
                {/*                Start</a></div>*/}

                {/*        </div>*/}

                {/*        <div className="container-content">*/}


                {/*            <div className="container-content-about">*/}
                {/*                <h2 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-bars"></i> We Are UNITECH :: Website Design &amp; Web Hosting*/}
                {/*                    Company in Dhaka Bangladesh</h2>*/}
                {/*                <p>We have started our journey from 2009 as a Website Design &amp; Web Hosting Company*/}
                {/*                    specialized digital interactive organization. Our dedicated team of professionals is*/}
                {/*                    always ready with new and unique ideas of promoting your business.</p>*/}
                {/*                <p>Holding the experience, we have more than 300++ satisfied*/}
                {/*                    customers &amp; counting.</p>*/}
                {/*                <p>If you are planning to build your company identity, then we are here to assist you.*/}
                {/*                    We provide complete IT services for your business like website development, web*/}
                {/*                    hosting, software, corporate email services, domain registration &amp; digital*/}
                {/*                    marketing. </p>*/}
                {/*                <p><a href="https://unitechbdsoft.com/about-unitech-dhaka-bangladesh.php"*/}
                {/*                      title="Website Design &amp; Web Hosting Company Dhaka Bangladesh">Continue Reading*/}
                {/*                    →</a></p><br/>*/}
                {/*            </div>*/}

                {/*            <div className="container-content-sidebar">*/}
                {/*                <h2 title="Best Website Design company uttara dhaka Bangladesh"><i*/}
                {/*                    className="fa fa-html5"></i> Fix an Appointment !! Call us</h2>*/}
                {/*                <ul className="sidebar-icon">*/}
                {/*                    <li><i className="fa fa-phone-square"></i><span> +88 02 48956492</span></li>*/}
                {/*                    <li><i className="fa fa-phone-square"></i><span> +88 01782 656 388, +88 01977 77 3283</span>*/}
                {/*                    </li>*/}
                {/*                    <li><i className="fa fa-envelope"></i><span> info[at]unitechbdsoft.com</span></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}

                {/*            <div className="container-portfolio">*/}
                {/*                <h3 title="Best Website Design company in uttara Dhaka Bangladesh">*/}
                {/*                    <i className="fa fa-heartbeat"></i> Some Major Clients :: We love our country, we*/}
                {/*                    love our peoples, we love our customers...</h3>*/}
                {/*                <div className="container-portfolio-content">*/}
                {/*                    <div className="row">*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img*/}
                {/*                                    src="./Website Design &amp; Web Hosting Company Dhaka Bangladesh_files/sheltech.png"/></a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3">*/}
                {/*                            <div className="portfolio_box">*/}
                {/*                                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a></div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="container-course-banner">*/}
                {/*                <a href="https://unitechbdsoft.com/clients-list.php"><img src={Smg}/> </a>*/}
                {/*            </div>*/}

                {/*            <div className="container-facebook">*/}
                {/*                <div className="fb-like-box fb_iframe_widget"*/}
                {/*                     data-href="https://www.facebook.com/unitechbdsoft" data-width="300"*/}
                {/*                     data-height="300" data-show-faces="true" data-stream="false"*/}
                {/*                     data-show-border="true" data-header="false" fb-xfbml-state="rendered"*/}
                {/*                     fb-iframe-plugin-query="app_id=&amp;container_width=300&amp;header=false&amp;height=300&amp;href=https%3A%2F%2Fwww.facebook.com%2Funitechbdsoft&amp;locale=en_US&amp;sdk=joey&amp;show_border=true&amp;show_faces=true&amp;stream=false&amp;width=300">*/}
                {/*                    /!*<span style="vertical-align: bottom; width: 300px; height: 130px;">*!/*/}
                {/*                    /!*    /!*<iframe*!/*!/*/}
                {/*                    /!*    /!*name="f44d26855a76f4" width="300px" height="300px"*!/*!/*/}
                {/*                    /!*    /!*data-testid="fb:like_box Facebook Social Plugin"*!/*!/*/}
                {/*                    /!*    /!*title="fb:like_box Facebook Social Plugin" frameBorder="0"*!/*!/*/}
                {/*                    /!*    /!*allowTransparency="true" allowFullScreen="true" scrolling="no"*!/*!/*/}
                {/*                    /!*    /!*allow="encrypted-media"*!/*!/*/}
                {/*                    /!*    /!*src="./Website Design &amp; Web Hosting Company Dhaka Bangladesh_files/like_box.html"*!/*!/*/}
                {/*                    /!*    /!*style="border: none; visibility: visible; width: 300px; height: 130px;"*!/*!/*/}
                {/*                    /!*    /!*className=""></iframe>*!/*!/*/}
                {/*                    /!*</span>*!/*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="container-counter">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-md-3 col-sm-6">*/}
                {/*                        <div className="single-counter">*/}
                {/*                            <h3 className="counter">5000+</h3>*/}
                {/*                            <p>Project Completed</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-md-3 col-sm-6">*/}
                {/*                        <div className="single-counter">*/}
                {/*                            <h3 className="counter">100+</h3>*/}
                {/*                            <p>Application Developed</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-md-3 col-sm-6">*/}
                {/*                        <div className="single-counter">*/}
                {/*                            <h3 className="counter">1000+</h3>*/}
                {/*                            <p>Domain Hosted</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-md-3 col-sm-6">*/}
                {/*                        <div className="single-counter">*/}
                {/*                            <h3 className="counter">300+</h3>*/}
                {/*                            <p>Satisfied Customers</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}


                {/*            <div style={{clear: "both"}}></div>*/}

                {/*        </div>*/}

                {/*    </div>*/}
                {/*</section>*/}

            </>
        );
    }
}

export default HomePageContainer;
