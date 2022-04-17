import React, {Component} from 'react';

class PaymentMethod extends Component {
    render() {
        return (
            <>
                <section id="container-heading">
                    <div className="page-title">
                        <i className="fa fa-money"
                                                   title="Best Website Design company uttara dhaka Bangladesh"></i> Payment
                        Method Details...
                    </div>
                </section>

                <section id="container">
                    <div className="main">

                        <div className="container-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 title="Best Website Design company uttara dhaka Bangladesh"><i
                                        className="fa fa-bars"></i>Bank Accounts Details...</h2>
                                    <p>
                                        <strong>Account Name:</strong> SM Unitech BD Software Ltd. <br/>
                                        <strong>Account Number:</strong> 0009 111 003 656 <br/>
                                        <strong>Bank Name:</strong> SBAC Bank Limited. <br/>
                                        <strong>Branch:</strong> Uttara Branch. <br/>
                                    </p><br/>

                                </div>
                                <div className="col-md-6">
                                    <h2 title="Best Website Design company uttara dhaka Bangladesh"><i
                                        className="fa fa-bars"></i>Mobile Banking Details...</h2>
                                    <p><strong>bKash (Merchant):</strong> 01531183253 (Payment)</p>
                                    <p><strong>bKash (Personal):</strong> 01977773283 (Send Money)</p>
                                    <p><strong>Nagad (Personal):</strong> 01873323553 (Send Money)</p><br/>
                                </div>

                                <div style={{clear: "both"}}></div>
                                    <br/><br/><br/><br/>
                                </div>


                            </div>


                        </div>



                {/*    </div>*/}
                </section>

            </>
        );
    }
}

export default PaymentMethod;
