import React from 'react';
import Select from 'react-select';

const PropertyFilters = (props)=>{
  const priceRangeOptions = [
    { value: [0, 10000000000], label: 'Any' },
    { value: [0, 100000], label: '$0-100,000' },
    { value: [100001, 200000], label: '$100,001-200,000' },
    { value: [200001, 300000], label: '$200,001-300,000' },
    { value: [300001, 400000], label: '$300,001-400,000' },
    { value: [400001, 500000], label: '$400,001-500,000' },
    { value: [500001, 600000], label: '$500,001-600,000' },
    { value: [700001, 800000], label: '$700,001-800,000' },
    { value: [800001, 900000], label: '$800,001-900,000' },
    { value: [900001, 1000000], label: '$900,001-1,000,000' },
    { value: [1000000, 1000000000], label: '$1,000,000+' },
  ];

  const bedroomRange = [
    { value: 0, label: 'Any' },
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' },
    { value: 5, label: '5+' },
  ]

  const areaRange = [
    { value: [0, 1000000], label: 'Any' },
    { value: [0, 500], label: '0-500 sq ft' },
    { value: [501, 1000], label: '501 - 1,0000 sq ft' },
    { value: [1001, 2000], label: '1,001- 2,000 sq ft' },
    { value: [2001, 3000], label: '2,001 - 3,000 sq ft' },
    { value: [3001, 4000], label: '300 1- 4,000 sq ft' },
    { value: [4001, 5000], label: '4,001 - 5,000 sq ft' },
  ]

  return(
    <div className="property-filter-container real-estate-col-1">
        {
          // <p className="results-count h4">Filters </p>
        }
      <div className="">
        <label>Bedrooms</label>
        <Select
              value={props.selectBedroomRange}
              options={bedroomRange}
              onChange={props.onValueChange}
              name="selectedBedroomRange"
              className="select-bedrooms"
              placeholder="Any"
        />
      </div>
      <div className="">
        <label>Price</label>
        <Select
              value={props.selectedPriceRange}
              options={priceRangeOptions}
              onChange={props.onValueChange}
              name="selectedPriceRange"
              className="select-price"
              placeholder="Any"
        />
      </div>
      <div className="">
        <label>Area</label>
        <Select
              value={props.selectedAreaRange}
              options={areaRange}
              onChange={props.onValueChange}
              name="selectedAreaRange"
              className="select-sqft"
              placeholder="Any"
        />
      </div>
      <div className="property-filter-button-wrapper ">
        <button
          onClick={props.reformatOutput}
          className="btn btn-info form-control">Apply!</button>
      </div>

    </div>
  )

}

export default PropertyFilters;
