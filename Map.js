import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import data from './data.json';

const InfoPage = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setInfoWindowFlag] = useState(true);

  return (
    <div className="mapcontainer">
      <Map
        google={google}
        initialCenter={{
          lat: 39.952584,
          lng: -75.165221,
        }}
        zoom={8}
      >
        {data.map((element, index) => {
          return (
            <Marker
              key={index}
              title={element.name}
              position={{
                lat: element.lat,
                lng: element.lng,
              }}
              onClick={(props, marker) => {
                setSelectedElement(element);
                setActiveMarker(marker);
              }}
            />
          );
        })}
        {selectedElement ? (
          <InfoWindow
            visible={showInfoWindow}
            marker={activeMarker}
            onCloseClick={() => {
              setSelectedElement(null);
            }}
          >
            <div>
              <h1>{selectedElement.name}</h1>
            </div>
          </InfoWindow>
        ) : null}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCR6lur-5JNMcxTTM9ynGUT_Xajx0osyk8',
})(InfoPage);
