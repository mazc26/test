import React from 'react';

import './Map.css';

const Map = () => {
  return(
    <div>
      <img 
        className="map"
        src={process.env.PUBLIC_URL + '/map.png'} 
        alt="main-logo"
      />
    </div>
  )
}

export default Map;