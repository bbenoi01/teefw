import React, { Component, Fragment } from 'react';
import Individual from './components/Individual';
import Multiple from './components/Multiple';

import { 
    topicToggle,
    genxToggle
 } from '../../Actions/appActions';

export default class GenX extends Component {

    handleTopicSelect = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    handleGenXSelect = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(genxToggle(value))
    }

    render() {
        const { genx } = this.props;

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
                                        <option value="2" selected>GenX</option>
                                        <option value="3">Xirgo</option>
                                        <option value="4">Configs</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {genx === 'GX1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.handleGenXSelect} className="btn btn-outline-danger">Back</button>
                                            <Individual/>
                                        </Fragment>
                                    ) : genx === 'GX2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.handleGenXSelect} className="btn btn-outline-danger">Back</button>
                                            <Multiple/>
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='GX1' onClick={this.handleGenXSelect} className="btn btn-outline-primary">Individual</button>
                                            <button value='GX2' onClick={this.handleGenXSelect} className="btn btn-outline-primary">Multiple</button>
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