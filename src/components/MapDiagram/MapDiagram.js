import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Diagram from '../Diagram/Diagram';
import Map from '../Map/Map';

import './MapDiagram.css';

const MapDiagram = () => {
  return(
    <div className="map-diagram-container">
      <div className="tab-container">
        <Tabs>
          <TabList>
            <Tab>Diagram</Tab>
            <Tab>Map</Tab>
          </TabList>
          <div className="map-diagram-title bold">
            Stepper and map
          </div>
          <TabPanel>
            <Diagram />
          </TabPanel>
          <TabPanel>
            <Map />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default MapDiagram;