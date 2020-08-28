import React, { Component } from 'react';

import { 
    topicToggle
 } from '../../Actions/appActions';

export default class Xirgo extends Component {

    handleTopicSelect = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    render() {
        return (
            <div className="app">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header">
                                    <b>
                                        Tee's FW Reference Guide
                                    </b>
                                </div>
                                <div className="card-body">
                                    <select onChange={this.handleTopicSelect}>
                                        <option value="">Choose Topic</option>
                                        <option value="1">CalAmp</option>
                                        <option value="2">GenX</option>
                                        <option value="3" selected>Xirgo</option>
                                        <option value="4">Configs</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    <button value='' onClick={this.handleTopicSelect} className="btn btn-outline-danger">Back</button>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>1. </b>Log into App Stream</p>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x1'/>
                                                <label htmlFor="x1" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>2. </b>Log into Device Manager</p>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x2'/>
                                                <label htmlFor="x2" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>3. </b>Click on Device Management</p>
                                            <img src="x1.PNG" alt="device management" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x3'/>
                                                <label htmlFor="x3" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>4. </b>Click the arrow in the search bar</p>
                                            <img src="x2.PNG" alt="search bar" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x4'/>
                                                <label htmlFor="x4" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>5. </b>Enter ESN(s) in ESN List box and click the magnifying glass</p>
                                            <img src="x3.PNG" alt="esn list" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x5'/>
                                                <label htmlFor="x5" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>6. </b>Put check marks next to the ESN(s) you want to up date and click the dropdown above</p>
                                            <img src="x4.PNG" alt="selected esn" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x6'/>
                                                <label htmlFor="x6" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>7. </b>Click Update</p>
                                            <img src="x5.PNG" alt="update" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x7'/>
                                                <label htmlFor="x7" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>8. </b>Select the required options from their appropiate dropdowns and click Begin Update</p>
                                            <img src="x6.PNG" alt="SMS" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x8'/>
                                                <label htmlFor="x8" className="form-check-label">Done</label>
                                            </div>
                                            <p><b className='text-danger'>Important!</b> The 4 items you will be updating most often are Bootloader, Firmware, Script, and Parameter set.
                                                Even if you only need to update 1 of the 4 options, you still need to update anything that comes <b className='text-info'>UNDER </b>
                                                it. For example, if you are updating the Firmware you would also populate the Script and Parameter Set. If you are just updating the
                                                Script, you would also populate the Parameter Set.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>9. </b>The status section shows which options have been chosen</p>
                                            <img src="x7.PNG" alt="status" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x9'/>
                                                <label htmlFor="x9" className="form-check-label">Done</label>
                                            </div>
                                            <p><b className='text-danger'>Note:</b> u - indicates actively updating, * - indicates update aborted</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body text-left">
                                            <p><b>10. </b>From SF, send the following SMS: :udcmd checkin</p>
                                            <img src="x8.PNG" alt="SMS" width='100%'/>
                                            <div className="form-check right">
                                                <input type="checkbox" className="form-check-input" id='x10'/>
                                                <label htmlFor="x10" className="form-check-label">Done</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <p><b>Complete</b></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}