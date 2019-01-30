import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  style ={
    width: '100%',
    "maxHeight": '600px',
  }
  markerstyle={
    color:'blue',
    height: '100px',
    display: 'none'
  }
  handleMarkerClick=(property, marker, e)=>{
    this.props.handleSelectProperty(property);
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
            this.props.formatOutput.map(row=>
               row.map((property, i)=>
                <Marker
                  onClick={()=>{this.handleMarkerClick(property)}}
                  key={i}
                  position={{lat:  property.lat, lng: property.lng}}
                  >
                 </Marker>)
          )
        }
      </Map>
    );
  }
}
// "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
