import React, { Component } from 'react';
import './App.css';
import CalAmp from './Containers/CalAmp';
import GenX from './Containers/GenX';
import Xirgo from './Containers/Xirgo';
import Configs from './Containers/Configs';

import { 
  topicToggle
 } from './Actions/appActions';

export default class App extends Component {

  handleTopicSelect = (e) => {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(topicToggle(value))
  }

  render() {
    const { topic } = this.props;

    switch (topic) {
      case ('1'): {
        return (
          <CalAmp/>
        )
      }

      case ('2'): {
        return (
          <GenX/>
        )
      }

      case ('3'): {
        return (
          <Xirgo/>
        )
      }

      case ('4'): {
        return (
          <Configs/>
        )
      }

      default: {
        return (
          <div
            className="app"
          >
            <div
              className="container-fluid"
            >
              <div
                className="row justify-content-center"
              >
                <div
                  className="col-s-12 col-lg-4"
                >
                  <div
                    className="card border-dark bg-light mb-3"
                  >
                    <div
                      className="card-header"
                    >
                      <b>Tee's FW Reference Guide</b>
                    </div>
                    <div
                      className="card-body"
                    >
                      <select
                        name='topic'
                        onChange={this.handleTopicSelect}
                      >
                        <option value='' selected>Choose Topic</option>
                        <option value='1'>CalAmp</option>
                        <option value='2'>GenX</option>
                        <option value='3'>Xirgo</option>
                        <option value='4'>Configs</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}