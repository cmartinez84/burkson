import React from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar2 =(props)=>{

  return(
    <Navbar inverse collapseOnSelect className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Navbar.Header>
        <Navbar.Brand>
          <span>Chris Martinez</span>
        </Navbar.Brand>
      </Navbar.Header>
        <Nav className="undo-flex-column">
          <NavItem className="nav-item my-nav" eventKey={1} href="#" onSelect={ ()=>{props.handleSelectPanel('real estate')}   }>
            Real Estate
          </NavItem>
          <NavItem className="nav-item my-nav" eventKey={2} href="#" onSelect={ ()=>{props.handleSelectPanel('pool')}   }>
            Pool
          </NavItem>
          <NavItem className="nav-item my-nav" eventKey={2} href="#"  onSelect={ ()=>{props.handleSelectPanel('employees')} }    >
            Employees
          </NavItem>
          <NavItem className="nav-item my-nav" href="https://github.com/cmartinez84/burkson">
            <FontAwesomeIcon icon={['fab','github']} />
          </NavItem>
        </Nav>
</Navbar>
  )
}

export default Navbar2;
