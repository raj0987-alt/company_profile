import React, {Component} from 'react';

import DevelopmentChart from "../../../images/website-design-process.png"

class DevelopmentProcessComponent extends Component {
    render() {
        return (
            <>
                <section id="container-heading">
                    <div className="page-title">
                        <h1 title="Website Development Process Uttara Dhaka Bangladesh"><i
                            className="fa fa-cogs"></i> Development Process :: We don't design website, We design your
                            dearms...</h1>
                    </div>
                </section>




                <section id="container">
                    <div className="main">

                        <div className="container-content">
                            <h2 title="Website Development Process uttara dhaka Bangladesh"><i
                                className="fa fa-bars"></i>Our process of custom web design &amp; web application
                                development project is very simple and straight forward to understand...</h2><br/>
                            <p><img
                                src={DevelopmentChart}
                                className="img wow zoomIn animated" data-wow-delay=".3s"
                                title="Website Development Process uttara dhaka Bangladesh"
                                alt="Website Development Process uttara dhaka Bangladesh"
                                style={{visibility: "visible", animationDelay: "0.3s"}}/></p>
                            <ul className="process-list">
                                <li className="wow fadeInRight animated" data-wow-delay=".99s"
                                    style={{visibility: "visible", animationDelay: "0.99s"}}><i
                                    className="fa fa-check-square"></i><strong>Step 1 -</strong> The Client provides us
                                    their requirements of the website or web application. If they do not have any
                                    documentation, we help them prepare it.
                                </li>
                                <br/>
                                    <li className="wow fadeInRight animated" data-wow-delay="1.2s"
                                        style={{visibility: "visible", animationDelay: "1.2s"}}><i
                                        className="fa fa-check-square"></i><strong>Step 2 -</strong> Our Business
                                        Analysts comprehend the most useful information from the available requirements
                                        and present it in a more formal Project Action Plan with detailed description of
                                        all possibile modules and tasks of the development project.
                                    </li>
                                    <br/>
                                        <li className="wow fadeInRight animated" data-wow-delay="1.4s"
                                            style={{visibility: "visible", animationDelay: "1.4s"}}><i
                                            className="fa fa-check-square"></i><strong>Step 3 -</strong> We get Client's
                                            approval on the specifications.
                                        </li>
                                        <br/>
                                            <li className="wow fadeInRight animated" data-wow-delay="1.6s"
                                                style={{visibility: "visible", animationDelay: "1.6s"}}><i
                                                className="fa fa-check-square"></i><strong>Step 4 -</strong> Requirement
                                                specifications are then discussed with the Project Managers and
                                                development Team Leads to estimate the development time and cost.
                                            </li>
                                            <br/>
                                                <li className="wow fadeInRight animated" data-wow-delay="1.8s"
                                                    style={{visibility: "visible", animationDelay: "1.8s"}}><i
                                                    className="fa fa-check-square"></i><strong>Step 5 -</strong> A
                                                    comprehensive quote with the development contract is sent to the
                                                    client. This is followed by web meetings to discuss and negotiate
                                                    the scope of the project, finalize the development, maintenance and
                                                    marketing costs and seal the deal.
                                                </li>
                                                <br/>
                                                    <li className="wow fadeInRight animated" data-wow-delay=".99s"
                                                        style={{visibility: "visible", animationDelay: "0.99s"}}><i
                                                        className="fa fa-check-square"></i><strong>Step 6
                                                        -</strong> Advance milestone payments are made by the client.
                                                    </li>
                                                    <br/>
                                                        <li className="wow fadeInRight animated" data-wow-delay="1.2s"
                                                            style={{visibility: "visible", animationDelay: "1.2s"}}><i
                                                            className="fa fa-check-square"></i><strong>Step 7
                                                            -</strong> Development Begins. We follow a weekly deployment
                                                            cycle. The client gets regular and timely updates from our
                                                            Project Manager, who is available to assist the client at
                                                            priority - including on holidays.
                                                        </li>
                                                        <br/>
                                                            <li className="wow fadeInRight animated"
                                                                data-wow-delay="1.4s"
                                                                style={{visibility: "visible", animationDelay: "1.4s"}}><i
                                                                className="fa fa-check-square"></i><strong>Step 8
                                                                -</strong> Alpha and Beta releases are shown to the
                                                                client during the development phase. Each release is
                                                                followed by a milestone payment commitment from the
                                                                client.
                                                            </li>
                                                            <br/>
                                                                <li className="wow fadeInRight animated"
                                                                    data-wow-delay="1.6s"
                                                                    style={{visibility: "visible", animationDelay: "1.6s"}}>
                                                                    <i className="fa fa-check-square"></i><strong>Step 9
                                                                    -</strong> Once all the tasks are finished according
                                                                    to the Project Action Plan, thorough load and
                                                                    regression tests are performed and the code is
                                                                    transferred to client's host against the remainder
                                                                    of funds. The client may then conduct independent
                                                                    user acceptance tests. We provide free support on
                                                                    bugs for three weeks after deployment.
                                                                </li>
                                                                <br/>
                                                                    <li className="wow fadeInRight animated"
                                                                        data-wow-delay="1.8s"
                                                                        style={{visibility: "visible", animationDelay: "1.8s"}}>
                                                                        <i className="fa fa-check-square"></i><strong>Step
                                                                        10 -</strong> Reviews/Testimonials are exchanged
                                                                        with the client and the project is signed off.
                                                                    </li>
                            </ul>
                            <br/>

                                <h2 title="Website Development Process uttara dhaka Bangladesh"><i
                                    className="fa fa-bars"></i>Our Developmental process benefits a large section of
                                    clients. Our process explains the benefit of...</h2><br/>
                                <ul className="list">
                                    <li><i className="fa fa-check-square"></i>New Products to existing customers</li>
                                    <li><i className="fa fa-check-square"></i>Existing Products to new customers or</li>
                                    <li><i className="fa fa-check-square"></i>New Products to new customers</li>
                                </ul>


                        </div>





                    </div>
                </section>

            </>
        );
    }
}

export default DevelopmentProcessComponent;
