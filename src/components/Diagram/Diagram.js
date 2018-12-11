import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Diagram.css';

library.add(faIndustry);

const Diagram = () => {
  return(
    <div className="diagram-container">
    <div className="divider"></div>
      <ul className="row custom-row">
        <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>
        <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>  <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>  <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>  <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>  <li className="col-md-2">
          <div className="icon-container">
          <FontAwesomeIcon
            icon="industry"
            size="lg"
          />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Diagram;