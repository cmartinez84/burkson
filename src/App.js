import React, { Component } from 'react';
import Employees from './components/Employees';
import RealEstate from './components/RealEstate';
import Pool from './components/Pool';
import Navbar2 from './Navbar';
import logo from './logo.svg';

import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faBed);
library.add(faBath);
library.add(faBell)
library.add(fab)
library.add(faStickyNote)
library.add(faExclamationTriangle)
// library.add(faGitHub);


class App extends Component {
  state = {
    selectedPanel: 'real estate'
  }
  handleSelectPanel=(selectedPanel)=>{
    this.setState({selectedPanel})
  }

  render() {
    const ENUM = {
      'employees': <Employees></Employees>,
      'real estate' : <RealEstate></RealEstate>,
      'pool' : <Pool></Pool>
    }
    return (
      <div>

        <Navbar2
          handleSelectPanel={this.handleSelectPanel}>
        </Navbar2>
        {
        ENUM[this.state.selectedPanel]
        }

      </div>
    );
  }
}

export default App;
