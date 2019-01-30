import React, { Component } from 'react';

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


class NavBarContainer extends Component{
  state={
    collapsed: true
  }

  toggle=() =>{
   this.setState({
     isOpen: !this.state.isOpen
   });
  }

  render(){
    return(
      <div>
             <Navbar color="dark" dark expand="md">
               <NavbarBrand href="/">Chris Martinez</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                 <Nav className="ml-auto" navbar>
                   <NavItem>
                     <NavLink
                       href="#"
                        onClick={ ()=>{this.props.handleSelectPanel('real estate')}}> Real Estate</NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink
                       href="#"
                        onClick={ ()=>{this.props.handleSelectPanel('pool')}}> Pool</NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink
                       href="#"
                        onClick={ ()=>{this.props.handleSelectPanel('employees')}}> Employees</NavLink>
                   </NavItem>
                   <NavItem>
                   <NavLink
                     href="https://github.com/cmartinez84/burkson">
                      <FontAwesomeIcon icon={['fab','github']} /></NavLink>
                  </NavItem>
                 </Nav>
               </Collapse>
             </Navbar>
           </div>    )
  }
}

export default NavBarContainer;
