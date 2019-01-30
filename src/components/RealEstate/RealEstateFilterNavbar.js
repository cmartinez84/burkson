import React, { Component } from 'react';
import Select from 'react-select';
import PropertyFilters from './PropertyFilters';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const priceRangeOptions = [
  { value: [0, 10000000000], label: 'Any' },
  { value: [0, 100000], label: '$0-100,000' },
  { value: [100001, 200000], label: '$100,001-$200,000' },
  { value: [200001, 300000], label: '$200,001-$300,000' },
  { value: [300001, 400000], label: '$300,001-$400,000' },
  { value: [400001, 500000], label: '$400,001-$500,000' },
  { value: [500001, 600000], label: '$500,001-$600,000' },
  { value: [700001, 800000], label: '$700,001-$800,000' },
  { value: [800001, 900000], label: '$800,001-$900,000' },
  { value: [900001, 1000000], label: '$900,001-$1,000,000' },
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



class RealEstateFilterNavbar extends Component{
  state={
    collapsed: true
  }

  toggle=() =>{
   this.setState({
     isOpen: !this.state.isOpen
   });
  }
  preventDefault=(e)=>{
    e.preventDefault();
    console.log(e);
  };

  render(){
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const minPrice = numberWithCommas(this.props.selectedPriceRange[0])
    const maxPrice = numberWithCommas(this.props.selectedPriceRange[1])
    const minArea = numberWithCommas(this.props.selectedAreaRange[0])
    const maxArea = numberWithCommas(this.props.selectedAreaRange[1])
    return(
      <div>
             <Navbar color="light" light expand="sm">


                 <Nav className="mr-auto" navbar>
                   {
                    //  Price
                   }
                   <NavItem>
                  <UncontrolledDropdown className="real-estate-filter-drop-down filter-price" nav   inNavbar >
                    <DropdownToggle nav caret>
                      <span>
                        {`$${minPrice}-$${maxPrice}`}
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Select
                            options={priceRangeOptions}
                            onChange={this.props.onValueChange}
                            name="selectedPriceRange"
                            className="select-price"
                            placeholder="Any"
                      />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                  {
                    // Bedroom
                  }
                  <NavItem>
                  <UncontrolledDropdown className="real-estate-filter-drop-down" nav inNavbar>
                    <DropdownToggle nav caret>
                      <span>
                        {`${this.props.selectedBedroomRange}+ bdr`}
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Select
                            options={bedroomRange}
                            onChange={this.props.onValueChange}
                            name="selectedBedroomRange"
                            className="select-price"
                            placeholder="Any"
                      />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                  {
                    // Area
                  }
                  <NavItem>
                  <UncontrolledDropdown className="real-estate-filter-drop-down filter-area" nav inNavbar>
                    <DropdownToggle nav caret>
                      <span>
                        {`${minArea}sq ft - ${maxArea} sq ft`}
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Select
                            options={areaRange}
                            onChange={this.props.onValueChange}
                            name="selectedAreaRange"
                            className="select-price"
                            placeholder="Any"
                      />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                  <NavItem>
                    <button
                      onClick={this.props.reformatOutput}
                      className="btn btn-info form-control filter-button">Go!</button>
                  </NavItem>
                 </Nav>
             </Navbar>
           </div>    )
  }
}

export default RealEstateFilterNavbar;
