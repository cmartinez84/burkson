import React from 'react';
import moment from 'moment';
import Img from 'react-image'
import thumbnailPlaceholder from './../../assets/blankspace.png'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope)
library.add(faPhone);

const Tile =(props)=>

  <div className=" col-sm-6 employee-tile" key={props.id}>

    <div className="tile-inset row">
      <div className="tile-employee-thumbnail col-sm-3">
          <Img src={props.thumbnail} className="employee-thumbnail"
               loader={<img  src={thumbnailPlaceholder}></img>}>
          </Img>
      </div>
      <div className="tile-employee-info col-sm-8">
        <p className="employee-name employee-name-tile">
          {props.firstName} {props.lastName}
        </p>
        <p className="employee-tile-job-title">{props.jobTitle}</p>
        <div className="employee-tile-contact-info">
          <span><a href={`mailto: ${props.email}`}><FontAwesomeIcon icon="envelope" /></a></span> |
          <span><a href={`mailto: ${props.phone}`}><FontAwesomeIcon icon="phone" /></a></span>
        </div>
      </div>
    </div>
  </div>

export default Tile;



// <span><span>{props.phone}</span></span>
// <span><a href={`mailto: ${props.email}`}>{props.email}</a></span>
// <span><span> {moment(props.hired).format('MMM Do YY')}</span></span>
