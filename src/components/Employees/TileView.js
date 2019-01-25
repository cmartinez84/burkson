import React from 'react';
import moment from 'moment';
import Img from 'react-image'
import Tile from './Tile';

import thumbnailPlaceholder from './../../assets/blankspace.png'

const TileView =(props)=>{
  var arrayWithRows = createColumns();

  function createColumns(){
    var output =[]
    var employeeBatch = props.employees.slice(props.pageBegin, props.pageEnd);
    while (employeeBatch.length > 0) {
      var row = employeeBatch.splice(0,2);
      output.push(row);
    }
    return output;
  }

  return(
    <div>
          {
            arrayWithRows.map(row=>
              <div className="row">
                {row.map(employeeData=>
                  <Tile
                    id={employeeData.id.value}
                    thumbnail={employeeData.picture.thumbnail}
                    firstName={employeeData.name.first}
                    lastName={employeeData.name.last}
                    phone={employeeData.phone}
                    email={employeeData.email}
                    jobTitle={employeeData.jobTitle}
                    hired={employeeData.registered.date}>
                  </Tile>
                  )
                }
              </div>
            )
          }
    </div>
    )
}

export default TileView;
