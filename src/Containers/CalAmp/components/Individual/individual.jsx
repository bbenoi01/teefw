import React, { Component } from 'react';

export default class Individual extends Component {
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
                        <p><b>2. </b>Enter ESN and click View Device</p>
                        <img src="cai2.PNG" alt="enter esn" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca2'/>
                            <label htmlFor="ca2" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>3. </b>Click Config</p>
                        <img src="cai3.PNG" alt="config" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca3'/>
                            <label htmlFor="ca3" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>4. </b>Enter config in dropdown</p>
                        <img src="cai4.PNG" alt="enter config" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca4'/>
                            <label htmlFor="ca4" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>5. </b>Click on the selected config and click Next</p>
                        <img src="cai5.PNG" alt="selected esn" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca5'/>
                            <label htmlFor="ca5" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>6. </b>Click Continue</p>
                        <img src="cai6.PNG" alt="continue" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca6'/>
                            <label htmlFor="ca6" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>7. </b>From SF, send the following SMS: !R3,49,129</p>
                        <img src="cai7.PNG" alt="SMS" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='ca7'/>
                            <label htmlFor="ca7" className="form-check-label">Done</label>
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