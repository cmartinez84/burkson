import React from 'react';
import Img from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberFormat from 'react-number-format';



import './RealEstate.css'
import loader from './../../assets/loader3.gif';



const PropertyTile =(props)=>{

  const imagePlaceholder = <img className="loader" src={loader}/>
  const croppedImageBackground = {
    background: "url("+props.property.imageURL+") center center no-repeat",
    backgroundSize: "cover"
  }
  const isSelectedProperty=()=>{
    if(props.property === props.selectedProperty){
      return true;
    }
    else {
      return false;
    }
  }
  return (

    <div className={`property-tile col-sm-4 ${isSelectedProperty() ?'selected-property-tile': null }`}>
      <div className="property-tile-inset">
        <div style={croppedImageBackground} className="property-tile-image-wrapper">
        </div>
          <div className="property-tile-pric3e h5">
            <NumberFormat value={props.property.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
          <div></div>
          <div className="property-tile-street-address"></div>
          <div className="property-tile-details">
            <FontAwesomeIcon icon="bed"/>{props.property.bedroomCt}br  <FontAwesomeIcon icon="bath"/>{props.property.bathroomCt}ba {props.property.area} sq ft
          </div>
          <div className="property-tile-street-address address">
          {props.property.street}
          </div>
          <div className="property-tile-city-state address">
            {props.property.city}, {props.property.state} {props.property.zip}
          </div>
      </div>

    </div>
  )

}

export default PropertyTile;
