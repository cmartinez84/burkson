import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar =(props)=>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a onClick={()=>{props.handleSelectPanel('real estate')}} className="nav-link" href="#">Real Estate <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a onClick={()=>{props.handleSelectPanel('pool')}} className="nav-link" href="#">Pool <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a onClick={()=>{props.handleSelectPanel('employees')}} className="nav-link" href="#">Employees <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active text-right">
        <a className="nav-link" href="https://github.com/cmartinez84/pre-approve-me"><FontAwesomeIcon icon={['fab','github']} /> <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

export default Navbar;
