import React, {Component} from 'react';
import Slider from "../../../../images/slider5.png";


class HomePageSlider extends Component {
    render() {
        return (
            <>
                <section id="slider">
                    <div className="main">
                        <div className="slider">
                            <div className="slider-left">
                                <h2 title="Creativity How We Decorate Your Space">
                                    <strong>Creativity</strong> is < br/>
                                    How
                                    We Decorate<br/>Your Space</h2>

                                <div style={{clear: "both"}}></div>

                                <p><strong>Innovation</strong> is how we decorate your time</p>
                                <p>Pixel Perfect <strong>Website Development</strong> With a pinch Of Creativity </p>
                            </div>
                            <div className="slider-right">
                                {/*<img src={Slider}*/}

                                {/*     alt="Website Design &amp; Web Hosting Company Dhaka Bangladesh"*/}
                                {/*     />*/}
                            </div>

                        </div>

                        <div className="slider-content">
                            <div className="slider-content-box-1">
                                <h3 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh"><i
                                    className="fa fa-calculator"></i> Billing Department</h3>
                                <table width="100%" align="left" cellPadding="0" cellSpacing="0"
                                       className="slider-content-table">
                                    <tbody>
                                    <tr>
                                        <td width="10%">Telephone</td>
                                        <td width="2%">&nbsp;</td>
                                        <td width="57%">
                                            <div align="right"><small>[10.00am - 6.00pm]</small> +88 02 48956492</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hotline</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right"><small>[10.00am - 6.00pm]</small> +88 01877 825 566</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right">billing[at]unitechbdsoft.com</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="slider-content-box-2">
                                <h3 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh"><i
                                    className="fa fa-life-ring"></i> Support Department</h3>
                                <table width="100%" align="left" cellPadding="0" cellSpacing="0"
                                       className="slider-content-table">
                                    <tbody>
                                    <tr>
                                        <td width="10%">Telephone</td>
                                        <td width="2%">&nbsp;</td>
                                        <td width="57%">
                                            <div align="right"><small>[10.00am - 10.00pm]</small> +88 02 48956492</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hotline</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right"><small>[24/7/365]</small> +88 01977 773 283</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right">support[at]unitechbdsoft.com</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="slider-content-box-3">
                                <h3 title="Website Design &amp; Web Hosting Company Dhaka Bangladesh"><i
                                    className="fa fa-tty"></i> Service Inquiry</h3>
                                <table width="100%" align="left" cellPadding="0" cellSpacing="0"
                                       className="slider-content-table">
                                    <tbody>
                                    <tr>
                                        <td width="10%">Telephone</td>
                                        <td width="2%">&nbsp;</td>
                                        <td width="57%">
                                            <div align="right"><small>[10.00am - 6.00pm]</small> +88 02 48956492</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hotline</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right"><small>[10.00am - 6.00pm]</small> +88 01782 656 388</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right">info[at]unitechbdsoft.com</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </section>

            </>
        );
    }
}

export default HomePageSlider;
