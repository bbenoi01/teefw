import React, { Component } from 'react';

export default class Multiple extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>1. </b>Log into the GenX portal</p>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx1'/>
                            <label htmlFor="gx1" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>2. </b>Click on Search</p>
                        <img src="gx1.PNG" alt="enter esn" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx2'/>
                            <label htmlFor="gx2" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>3. </b>Enter ESNs in search box and click Submit</p>
                        <img src="gx12.PNG" alt="config" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx3'/>
                            <label htmlFor="gx3" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b className='text-danger'>Important! </b>When updating multiple units, only select units that have the same primary config together</p>
                        <img src="gx6.PNG" alt="enter config" width='100%'/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>4. </b>Put a check mark next to ESNs,make note of current primary, secondary, third config and click Configure Devices</p>
                        <img src="gx7.PNG" alt="enter config" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx4'/>
                            <label htmlFor="gx4" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>5. </b>Update Second, Third, and Fourth configs as needed and click Upload</p>
                        <img src="gx8.PNG" alt="selected esn" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx5'/>
                            <label htmlFor="gx5" className="form-check-label">Done</label>
                        </div>
                        <p><b className='text-danger'>Note: </b>Do not change Primary config unless directed by dev or app support</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>6. </b>If you see the following message, the config was sent successfully</p>
                        <img src="gx9.PNG" alt="continue" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx6'/>
                            <label htmlFor="gx6" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-left">
                        <p><b>7. </b>From SF, send the following SMS: RESYNCNOW</p>
                        <img src="gx10.PNG" alt="SMS" width='100%'/>
                        <div className="form-check right">
                            <input type="checkbox" className="form-check-input" id='gx7'/>
                            <label htmlFor="gx7" className="form-check-label">Done</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p><b>Complete</b></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p><b className='text-danger'>Note:</b> When updating GenX units, even if you are only updating one, you must populate all the first three configs.</p>
                    </div>
                </div>
            </div>
        );
    }
}