import React, { Component } from 'react';

import { 
    topicToggle
 } from '../../Actions/appActions';

export default class Configs extends Component {

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
                                        <option value="3">Xirgo</option>
                                        <option value="4" selected>Configs</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    <button value='' onClick={this.handleTopicSelect} className="btn btn-outline-danger">Back</button>
                                    <div className="card-body">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <a href="ConfigsWorkbook.xlsx" target='_blank'><p>Config Workbook</p></a>
                                                </div>
                                            </div>
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