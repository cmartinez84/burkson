import React from 'react';
import moment from 'moment';
import Img from 'react-image'

import thumbnailPlaceholder from './../../assets/blankspace.png'

const TableView =(props)=>{

  return(
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Employee First Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {
            props.employees.slice(props.pageBegin, props.pageEnd).map((person)=>
            <tr className="employee-row" key={person.id.value}>
              <td className="employee-image-cell">
                  <Img
                    src={person.picture.thumbnail}
                    className="employee-thumbnail"
                    loader={<img  src={thumbnailPlaceholder}></img>}>
                  </Img>
              <span className="employee-image-placeholder"></span></td>
              <td><span className="employee-name">{person.name.first} {person.name.last}</span></td>
              <td><span>{person.phone}</span></td>
              <td><a href={`mailto: ${person.email}`}>{person.email}</a></td>
              <td><span> {person.jobTitle}</span></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
    )
}

export default TableView;
