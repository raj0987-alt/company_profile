import React, {Component} from 'react';
import Demo from "../../../../images/demo.png";
import {Col, Row,Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";

class Header extends Component {
    componentDidMount () {
        'use strict';
        document.addEventListener('DOMContentLoaded', function() {
            var $burgers = getAll('.burger');
            if ($burgers.length > 0) {
                $burgers.forEach(function($el) {
                    $el.addEventListener('click', function() {
                        var target = $el.dataset.target;
                        var $target = document.getElementById(target);
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active')
                    })
                })
            }

            function getAll(selector) {
                return Array.prototype.slice.call(document.querySelectorAll(selector), 0)
            }
            var navbarEl = document.getElementById('navbar');
            var navbarBurger = document.getElementById('navbarBurger');
            var specialShadow = document.getElementById('specialShadow');
            var NAVBAR_HEIGHT = 60;
            var THRESHOLD = 160;
            var navbarOpen = false;
            var horizon = NAVBAR_HEIGHT;
            var whereYouStoppedScrolling = 0;
            var scrollFactor = 0;
            var currentTranslate = 0;
            navbarBurger.addEventListener('click', function(el) {
                navbarOpen = !navbarOpen;
                if (navbarOpen) {
                    rootEl.classList.add('bd-is-clipped-touch')
                } else {
                    rootEl.classList.remove('bd-is-clipped-touch')
                }
            });

            function upOrDown(lastY, currentY) {
                if (currentY >= lastY) {
                    return goingDown(currentY)
                }
                return goingUp(currentY)
            }

            function goingDown(currentY) {
                var trigger = NAVBAR_HEIGHT;
                whereYouStoppedScrolling = currentY;
                if (currentY > horizon) {
                    horizon = currentY
                }
                translateHeader(currentY, false)
            }

            function goingUp(currentY) {
                var trigger = 0;
                if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
                    horizon = currentY + NAVBAR_HEIGHT
                }
                translateHeader(currentY, true)
            }

            function constrainDelta(delta) {
                return Math.max(0, Math.min(delta, NAVBAR_HEIGHT))
            }

            function translateHeader(currentY, upwards) {
                var translateValue = void 0;
                if (upwards && currentTranslate == 0) {
                    translateValue = 0
                } else if (currentY <= NAVBAR_HEIGHT) {
                    translateValue = currentY * -1
                } else {
                    var delta = constrainDelta(Math.abs(currentY - horizon));
                    translateValue = delta - NAVBAR_HEIGHT
                }
                if (translateValue != currentTranslate) {
                    var navbarStyle = '\n        transform: translateY(' + translateValue + 'px);\n      ';
                    currentTranslate = translateValue;
                    navbarEl.setAttribute('style', navbarStyle)
                }
                if (currentY > THRESHOLD * 2) {
                    scrollFactor = 1
                } else if (currentY > THRESHOLD) {
                    scrollFactor = (currentY - THRESHOLD) / THRESHOLD
                } else {
                    scrollFactor = 0
                }
                var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
                specialShadow.style.opacity = scrollFactor;
                specialShadow.style.transform = 'scaleY(' + translateFactor + ')'
            }
            translateHeader(window.scrollY, false);
            var ticking = false;
            var lastY = 0;
            window.addEventListener('scroll', function() {
                var currentY = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        upOrDown(lastY, currentY);
                        ticking = false;
                        lastY = currentY
                    })
                }
                ticking = true
            })
        });
    }
    render() {

        return (

            <>




                <section id="header-top">
                    <div className="main">

                        <div className="header_top">

                            <div className="header_top">
                                <div className="header_top_left">
                                    <ul>
                                        <li><i className="fa fa-cog fa-fw"></i><a
                                            href="https://unitechbdsoft.com/terms-and-conditions.php">Terms &amp; Conditions</a>
                                        </li>
                                        <li><i className="fa fa-cog fa-fw"></i><a
                                            href="https://unitechbdsoft.com/privacy-policy.php">Privacy Policy</a></li>
                                        <li><i className="fa fa-pie-chart"></i><a
                                            href="https://unitechbdsoft.com/partnership-with-unitech-bd-soft.php">Be a
                                            Partner With Us</a></li>
                                        <li><i className="fa fa-life-ring"></i><a
                                            href="https://unitechbdsoft.com/support-center.php">Support Center</a></li>
                                        <li><i className="fa fa-book"></i><a href="https://www.techblogbangladesh.com/"
                                                                             target="_blank">Blog</a></li>
                                    </ul>
                                </div>

                                <div className="header_top_right"><a href="tel:+8801977773283"
                                                                     title="Best Website Design company uttara dhaka Bangladesh">Let's
                                    Start a Project</a></div>
                            </div>
                        </div>

                        <div>
                            &nbsp;
                        </div>

                        <Row className="">
                            <Col sm={6} xs={6}>
                                <img
                                    src={Demo}
                                    title="demo" alt="demo" width={200} height ={100}
                                    // style={{maxWidth: "3000px", height: "48px"}}
                                    />
                            </Col>
                            <Col sm={3}>

                            </Col>
                            <Col sm={3}>
                                <i className="fa fa-phone-square fa-lg"></i>
                                Sales Hotline: <a href="tel:+8801782656388">+88 01782 656 388</a>
                                <br/>
                                <i className="fa fa-phone-square fa-lg"></i>
                                Support Dept: <a href="tel:+8801977773283">+88 01977 773 283</a>
                            </Col>
                        </Row>




                    </div>
                    <div style={{clear: "both"}}></div>
                </section>


                <nav id="navbar" className="navbar is-transparent"
      //                style="
      //   transform: translateY(0px);
      // "
                >
                    {/*<div id="specialShadow" className="bd-special-shadow"*/}
                    {/*     style="opacity: 0; transform: scaleY(1);"></div>*/}
                    <div className="container">
                        <div  className="navbar-brand">
                            <a  className="navbar-item " >
                                <Link to={"/"}><i className="fa fa-home fa-2x"></i></Link>

                            </a>


                            <div id="navbarBurger" className="navbar-burger burger" data-target="navMenuIndex">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navMenuIndex" className="navbar-menu">
                            <div className="navbar-start">
                                <div  className="navbar-item has-dropdown is-hoverable">
                                    <a style={{color:"#f5f5f5"}} className="navbar-link  navbar-font" >
                                        COMPANY
                                    </a>
                                    <div className="navbar-dropdown is-boxed ">

                                        <a className="navbar-item custom-navbar"
                                           >
                                            <Link className="custom-navbar" to={"/about-us"}>About Us & What we do</Link>

                                        </a>
                                        <a className="navbar-item "
                                           >
                                            <Link className="custom-navbar" to={"/company-profile"}>Company Profile</Link>
                                        </a>
                                        <a className="navbar-item "
                                           >
                                            <Link className="custom-navbar" to="/payment-method">Payment Method</Link>
                                        </a>
                                        <a className="navbar-item "
                                           >
                                            <Link className="custom-navbar" to="/partnership">Be A Partner With Us</Link>
                                        </a>
                                        <a className="navbar-item "
                                           >
                                            <Link className="custom-navbar" to="/development-process">Development Process</Link>
                                        </a>
                                        <a className="navbar-item "
                                           >
                                            <Link className="custom-navbar" to="/career-opportunities">Career Opportunities</Link>
                                        </a>


                                    </div>
                                </div>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a style={{color:"#f5f5f5"}} className="navbar-link  navbar-font" >
                                        DOMAIN
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/domain-registration">Domain Registration</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/bddomain-registration">BD Domain Registration</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/domain-registration">Customer Sign Up</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/domain-registration">Customer Sign In</Link>
                                        </a>
                                    </div>
                                </div>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                       WEB HOSTING
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item navbar-font">
                                            <Link className="custom-navbar" to="/business-web-hosting">Business Web Hosting</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/corporate-web-hosting">Corporate Web Hosting</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/managed-vps-hosting">Managed VPS Hosting</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/dedicated-server">Dedicated Server Hosting</Link>
                                        </a>
                                        <a className="navbar-item navbar-font">
                                            <Link className="custom-navbar" to="/business-email-services">Business Email Service</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/smtp-email-services">SMTP Email Relay Service</Link>
                                        </a>



                                    </div>
                                </div>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        WEB DEVELOPMENT
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item navbar-font">
                                            <Link className="custom-navbar" to="/static-website-design">Static Website Design</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/dynamic-website-development">Dynamic Website Development</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/web-application-development">Web Application Development</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/online-news-portal-solution">Online News Portal Solution</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/e-commerce-development">E-Commerce Development</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/online-job-portal-solution">Online Job Portal Solution</Link>
                                        </a>

                                    </div>
                                </div>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        SOFTWARE DEVELOPMENT
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item navbar-font">
                                            <Link className="custom-navbar" to="/software-development">Software Development</Link>
                                        </a>
                                    </div>
                                </div>

                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        E-MARKETING
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item navbar-font">
                                            <Link className="custom-navbar" to="/digital-marketing">Digital Marketing</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/sms-marketing">SMS Marketing</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/seo-services">SEO Services</Link>
                                        </a>
                                    </div>
                                </div>



                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        SERVICES
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/outsourcing-services">Outsourcing Services</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/photography-documentary">Photography & Documentary</Link>
                                        </a>
                                        <a className="navbar-item ">
                                            <Link className="custom-navbar" to="/profile-design-services">Profile Design Services</Link>
                                        </a>
                                        <a className="navbar-item">
                                            <Link className="custom-navbar" to="/animation-video">2D Animation Video</Link>
                                        </a>

                                    </div>
                                </div>

                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        PORTFOLIO
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item">
                                            <Link className="custom-navbar" to="/client-lists">Portfolio</Link>
                                        </a>
                                    </div>

                                </div>

                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link  navbar-font" style={{color:"#f5f5f5"}}>
                                        CONTACT US
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item">
                                            <Link className="custom-navbar" to="/contact-us">Contact Us</Link>
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </nav>


            </>
        );
    }
}

export default Header;
