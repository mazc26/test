import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Overview.css';

library.add(faCheck, faTimes);
const Overview = props => {
  return(
    <div>
      <div className="overview-container">
        <span className="invoice-revision-title">OVERVIEW</span>
      </div>
      <div className="overview-content">
        <div className="row custom-row">
          <div className="custom-col col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="overview-column">
                  Status
                </div>
                <div className="overview-column">
                  Method
                </div>
                <div className="overview-column">
                  Capacity
                </div>
                <div className="overview-column">
                  Drayage
                </div>
              </div>
              <div className="col-sm-6">
              <div className="overview-column active-status" >
                {
                  props.overViewStatus === 'active' ? 
                  <span className="active">
                    <FontAwesomeIcon
                      icon="check"
                      size="md"
                    />
                  </span> :
                  <span className="disabled">
                    <FontAwesomeIcon
                      icon="times"
                      size="md"
                    />
                  </span>
                }
                <span 
                  className={props.overViewStatus === 'active' ? 
                  "overview-status active" :
                  "overview-status disabled"
                }
                >{props.overViewStatus}
                </span>
                </div>
                <div className="overview-column">
                  Multimodal
                </div>
                <div className="overview-column">
                  LCL
                </div>
                <div className="overview-column">
                  Pickup, delivery
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col col-sm-6">
          <div className="row">
              <div className="col-sm-6">
                <div className="overview-column">
                  Incoterms
                </div>
                <div className="overview-column">
                  Service options
                </div>
                <div className="overview-column bottom">
                  Hazzardous or forbidden commodities
                </div>
              </div>
              <div className="col-sm-6">
              <div className="overview-column active-status" >
                </div>
                <div className="overview-column bold">
                  FOB
                </div>
                <div className="overview-column bold">
                  Deconsolidation, Custom clearance
                </div>
                <div className="overview-column bold bottom last">
                  Lithium Batteries, Hazmat, Other
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;