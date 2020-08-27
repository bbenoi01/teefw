import React, { Component, Fragment } from 'react';
import Individual from './components/Individual';
import Multiple from './components/Multiple';

import { 
    topicToggle,
    calAmpToggle
 } from '../../Actions/appActions';

export default class CalAmp extends Component {

    handleTopicSelect = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    handleCalAmpSelect = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(calAmpToggle(value))
    }

    render() {
        const { calamp } = this.props;

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
                                        <option value="1" selected>CalAmp</option>
                                        <option value="2">GenX</option>
                                        <option value="3">Xirgo</option>
                                        <option value="4">Configs</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {calamp === 'CA1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.handleCalAmpSelect} className='btn btn-outline-danger'>Back</button>
                                            <Individual/>
                                        </Fragment>
                                    ) : calamp === 'CA2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.handleCalAmpSelect} className="btn btn-outline-danger">Back</button>
                                            <Multiple/>
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='CA1' onClick={this.handleCalAmpSelect} className="btn btn-outline-primary">Individual</button>
                                            <button value='CA2' onClick={this.handleCalAmpSelect} className="btn btn-outline-primary">Multiple</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}