import React from 'react';

function ContactComponent() {
    return (
        <>
            <section id="container-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-md-9">
                            <h1 title="Contact Information"><i className="fa fa-map-marker"></i> Contact Information...
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id="container">
                <div className="main">

                    <div className="container-content contact-body">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="map">
                                    <iframe
                                        src="./Contact Information _ Website Design &amp; Web Hosting Company in Uttara Dhaka Bangladesh_files/embed.html"
                                        width="100%" height="436px" frameBorder="0" style={{border:"0"}}
                                        allowFullScreen=""></iframe>
                                </div>

                                <div style={{clear: "both"}}><br/></div>
                                <form method="post" name="form1" encType="application/x-www-form-urlencoded"
                                      onSubmit="return ValidateForm()">
                                    <h4></h4>
                                    <span className="conatct-form-left">
                            <input type="text" placeholder="Name" name="name" className="web-hosting-form"/>
                            <input type="text" placeholder="Email" name="email" className="web-hosting-form"/>
                        </span>


                                    <span className="conatct-form-right">
                            <input type="text" placeholder="Phone" name="contact" className="web-hosting-form"/>
                            <select className="dropdown" name="services">
                                <option value="" selected="selected" disabled="disabled">Service you Interested</option>
								<option value="Domain Registration">Domain Registration</option>
								<option value="BD Domain Registration">BD Domain Registration</option>
								<option value="Web Hosting Services">Web Hosting Services</option>
								<option value="Corporate Email Services">Corporate Email Services</option>
								<option value="Static Website Design">Static Website Design</option>
								<option value="Dynamic Website Development">Dynamic Website Development</option>
								<option value="News Portal Development">News Portal Development</option>
								<option value="eCommerce Development">eCommerce Development</option>
								<option value="Software Development">Software Development</option>
								<option value="Web Application Development">Web Application Development</option>
								<option value="SMS Marketing">SMS Marketing</option>
								<option value="SEO Services">SEO Services</option>
								<option value="Facebook Advertising">Facebook Advertising</option>
                            </select>
                        </span>
                                    <textarea className="message" placeholder="Messgae" name="ltr"></textarea>

                                    <input type="submit" className="button" value="SEND"/>
                                        <input type="reset" className="button" value="RESET"/>


                                </form>

                            </div>

                            <div className="col-md-5">
                                <div className="address address-1">
                                    <h2 title="Corporate Office"><i className="fa fa-home"></i>Office Address...</h2>
                                    Plot #87, BNS Center (4th floor), Suite No. #507/A, <br/>
                                    Dhaka – Mymensingh Highway, Sector #07, <br/>Uttara Model Town, Dhaka-1230,
                                    Bangladesh.
                                </div>

                                <div className="address address-2">
                                    <h2 title="Corporate Sales Section"><i className="fa fa-phone"></i>Sales Section...
                                    </h2>
                                    <strong>Phone:</strong> +88 02 48956492 <small>[10.00am - 6.00pm]</small> <br/>
                                    <strong>Cell:</strong> +88 01782 656 388 <small>[10.00am - 6.00pm]</small> <br/>
                                    <strong>Email:</strong> info[at]unitechbdsoft.com

                                    <div style={{clear: "both"}}><br/></div>

                                    <h2 title="Billing Section"><i className="fa fa-phone"></i>Billing Section...</h2>
                                    <strong>Phone:</strong> +88 02 48956492 <small>[10.00am - 6.00pm]</small> <br/>
                                    <strong>Cell:</strong> +88 01877 825 566 <small>[10.00am - 6.00pm]</small> <br/>
                                    <strong>Email:</strong> billing[at]unitechbdsoft.com

                                    <div style={{clear: "both"}}><br/></div>

                                    <h2 title="Support Section"><i className="fa fa-phone"></i>Support Section...</h2>
                                    <strong>Phone:</strong> +88 02 48956492 <small>[10.00am - 10.00pm]</small> <br/>
                                    <strong>Cell:</strong> +88 01977 773 283 <small>[Existing clients only]</small> <br/>
                                    <strong>Email:</strong> support[at]unitechbdsoft.com
                                </div>
                            </div>

                        </div>

                    </div>



                    <div style={{clear: "both"}}><br/><br/><br/><br/></div>
                </div>
            </section>
        </>
    );
}

export default ContactComponent;
