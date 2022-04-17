import React, {Component, Fragment} from 'react';
// import {Route} from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/SharedComponents/HeaderComponents/Header";
import FooterComponent from "../components/SharedComponents/FooterComponent/FooterComponent";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import PaymentMethodComponent from "../pages/PaymentMethodComponent";
import Partnership from "../pages/Partnership";
import DevelopmentProcess from "../pages/DevelopmentProcess";
import CareerOpportunities from "../pages/CareerOpportunities";
import DomainRegistration from "../pages/DomainRegistration";
import BdDomainRegistration from "../pages/BdDomainRegistration";
import BusinessWebHosting from "../pages/BusinessWebHosting";
import CorporateWebHosting from "../pages/CorporateWebHosting";
import ManagedVPSHosting from "../pages/ManagedVPSHosting";
import DedicatedServer from "../pages/DedicatedServer";
import BusinessEmailServics from "../pages/BusinessEmailServics";
import SMTPEmailServicesComponent from "../components/WebHostingComponents/SMTPEmailServicesComponent";
import StaticWeb from "../pages/StaticWeb";
import DynamicWeb from "../pages/DynamicWeb";
import WebApp from "../pages/WebApp";
import NewsPortal from "../pages/NewsPortal";
import ECommereceComponent from "../components/WebDeveopmentNavBar/ECommereceComponent";
import JobPortal from "../pages/JobPortal";
import SoftwareDevelopment from "../pages/SoftwareDevelopment";
import DigitalMarketing from "../pages/DigitalMarketing";
import SMSMarketing from "../pages/SMSMarketing";
import SEOServices from "../pages/SEOServices";
import OutSourcing from "../pages/OutSourcing";
import PhotographyAndDocumentary from "../pages/PhotographyAndDocumentary";
import ProfileDesignComponent from "../components/ServicesNavbar/ProfileDesignComponent";
import AnimationVideo from "../pages/AnimationVideo";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>


                <Router>
                    <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route exact path="/about-us" element={<AboutUs />}/>
                    <Route exact path="/company-profile" element={<Profile />}/>
                    <Route exact path="/payment-method" element={<PaymentMethodComponent />}/>
                    <Route exact path="/partnership" element={<Partnership />}/>
                    <Route exact path="/development-process" element={<DevelopmentProcess />}/>
                    <Route exact path="/career-opportunities" element={<CareerOpportunities />}/>
                    <Route exact path="/domain-registration" element={<DomainRegistration />}/>
                    <Route exact path="/bddomain-registration" element={<BdDomainRegistration />}/>
                    <Route exact path="/business-web-hosting" element={<BusinessWebHosting />}/>
                    <Route exact path="/corporate-web-hosting" element={<CorporateWebHosting />}/>
                    <Route exact path="/managed-vps-hosting" element={<ManagedVPSHosting />}/>
                    <Route exact path="/dedicated-server" element={<DedicatedServer />}/>
                    <Route exact path="/business-email-services" element={<BusinessEmailServics />}/>
                    <Route exact path="/smtp-email-services" element={<SMTPEmailServicesComponent />}/>


                    <Route exact path="/static-website-design" element={<StaticWeb />}/>
                    <Route exact path="/dynamic-website-development" element={<DynamicWeb />}/>
                    <Route exact path="/web-application-development" element={<WebApp />}/>
                    <Route exact path="/online-news-portal-solution" element={<NewsPortal />}/>
                    <Route exact path="/e-commerce-development" element={<ECommereceComponent />}/>
                    <Route exact path="/online-job-portal-solution" element={<JobPortal />}/>

                    <Route exact path="/software-development" element={<SoftwareDevelopment />}/>
                    <Route exact path="/digital-marketing" element={<DigitalMarketing />}/>
                    <Route exact path="/sms-marketing" element={<SMSMarketing />}/>
                    <Route exact path="/seo-services" element={<SEOServices />}/>
                    <Route exact path="/outsourcing-services" element={<OutSourcing />}/>
                    <Route exact path="/photography-documentary" element={<PhotographyAndDocumentary />}/>
                    <Route exact path="/profile-design-services" element={<ProfileDesignComponent />}/>
                    <Route exact path="/animation-video" element={<AnimationVideo />}/>
                    <Route exact path="/client-lists" element={<Portfolio />}/>
                    <Route exact path="/contact-us" element={<Contact />}/>

                </Routes>
                    <FooterComponent/>
                </Router>




            </Fragment>
        );
    }
}

export default AppRoute;
