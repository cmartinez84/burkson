import React, {Component} from 'react';
import Img from 'react-image'
import PropertyTile from './PropertyTile';
import PropertyFilters from './PropertyFilters';
import MapContainer from './MapContainer';

import RealEstateFilterNavbar from './RealEstateFilterNavbar';

import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';


class RealEstate extends Component{


  state={
    properties: [],
    selectedPriceRange :[0, 1000000000],
    selectedBedroomRange : 0,
    selectedAreaRange:  [0, 1000000],
    formattedOutput: [],
    resultsCount: 0,
    isDataLoaded: false,
  }
  componentDidMount() {
    const url = "https://api.myjson.com/bins/fl0kg";
      fetch(url)
      .then(response => {
        if(!response.ok){
          this.fetchLocalData();
          throw new Error("Looks like our server is down! Don't worry, we have some sample data stored!");
        }
        else{
          return response.json()
        }
      })
      .then(data => {
          this.setState({
            properties: data.results,
            isDataLoaded: true
          });
          this.formatOutput();
        })
        .catch(error => {console.log(error)})
  }

  fetchLocalData=()=>{
    const properties = require('./../../assets/properties.json');
    this.setState({
      properties: properties.results,
      isDataLoaded: true
    });
    this.formatOutput();
  }


  handleValueChange=(selection, range)=>{
    this.setState({
      [range.name]: selection.value
    })
  }
   applyFilters=()=>{
    var filteredByBedroom = this.state.properties.filter(property=>
      property.bedroomCt >= this.state.selectedBedroomRange
    )
    var filteredByPrice = filteredByBedroom.filter(property=>
      property.price >= this.state.selectedPriceRange[0] &&
      property.price <= this.state.selectedPriceRange[1]
    )
    var output = filteredByPrice.filter(property=>
      property.area >= this.state.selectedAreaRange[0] &&
      property.area <= this.state.selectedAreaRange[1]
    )
    return output;
  }
   constructRows=(filteredData)=>{
     filteredData.push({});
     filteredData.push({});
    let output = [];
    for (var i = 2; i < filteredData.length; i+=3) {
      var newRow = [filteredData[i-2], filteredData[i-1], filteredData[i]];
      output.push(newRow);
    }
    return output;
  }
   formatOutput=()=>{
    var filteredData = this.applyFilters();
    var formattedOutput = this.constructRows(filteredData);
    this.setState({
      resultsCount: filteredData.length -2,
      formattedOutput
    });
  }

  render(){
    const override = css`
      width: 200px;
      display: block;
      margin: 0 auto;
      border-color: light;
      text-align: center
    `;

// cols 3 and 8 for grid

    return(
      <div className="container real-estate">
        <RealEstateFilterNavbar
          selectedPriceRange={this.state.selectedPriceRange}
          selectedBedroomRange={this.state.selectedBedroomRange}
          selectedAreaRange={this.state.selectedAreaRange}
          onValueChange={this.handleValueChange}
          reformatOutput={this.formatOutput}
          ></RealEstateFilterNavbar>
        <div className="row ">
          <div className="col-md-4">
              <MapContainer
                properties={this.state.properties}>
              </MapContainer>
          </div>
          <div className="properties col-md-8 ">
            {
              this.state.isDataLoaded ?
                <div className="real-estate-col-2">
                  <p className="results-count h4">{this.state.resultsCount} Reults </p>
                {
                  this.state.formattedOutput.map(row=>
                  <div className="row">
                    {
                      row.map(property=>
                        Object.keys(property).length > 0 ?
                        <PropertyTile property={property}/> : null
                      )
                    }
                  </div>
                  )
                }
                </div>
              :
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={300}
                color={'#95999c'}
                loading={this.state.loading}
              />

            }


          </div>
        </div>

      </div>
    )
  }
}

export default RealEstate;
