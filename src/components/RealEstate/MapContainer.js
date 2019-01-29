import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  style ={
    width: '100%',
    "max-height": '600px',
  }

  render() {
    return (
      <Map
        style={this.style}
        initialCenter={{
              lat: 45.523062,
              lng: -122.676482
          }}
        google={this.props.google}
        zoom={11}>
        {
            this.props.properties.map(property=>

              <Marker
              position={{lat:  property.lat, lng: property.lng}}>
            </Marker>
          )
        }


        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>dd</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
