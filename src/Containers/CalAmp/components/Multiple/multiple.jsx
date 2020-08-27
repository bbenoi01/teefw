import React, { Component } from 'react';

export default class Multiple extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>1. </b>Log into PULS</p>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca1'/>
                            <label htmlFor="ca1" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>2. </b>Hover over MFG and click Advanced</p>
                        <img src="cam2.PNG" alt="advanced" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca2'/>
                            <label htmlFor="ca2" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>3. </b>Enter ESNs and click on Ship Info</p>
                        <img src="cam3.PNG" alt="ship info" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca3'/>
                            <label htmlFor="ca3" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>4. </b>Check current config and verify Cust Name</p>
                        <img src="cam4.PNG" alt="check config and cust name" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca4'/>
                            <label htmlFor="ca4" className="form-check-label">Done</label>
                        </div>
                        <p><b>Note:</b>All CUST NAME must match to do mass update, otherwise you will get an error</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>5. </b>Repeat steps 1 & 2</p>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca5'/>
                            <label htmlFor="ca5" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>6. </b>Enter ESNs and click on Config</p>
                        <img src="cam5.PNG" alt="continue" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca6'/>
                            <label htmlFor="ca6" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>7. </b>Enter config in dropdown, Click on the selected config, and click Next</p>
                        <img src="cam7.PNG" alt="enter config" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca7'/>
                            <label htmlFor="ca7" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>7. </b>From SF, send the following SMS: !R3,49,129</p>
                        <img src="cam8.PNG" alt="SMS" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca8'/>
                            <label htmlFor="ca8" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p><b>Complete</b></p>
                    </div>
                </div>
            </div>
        );
    }
}