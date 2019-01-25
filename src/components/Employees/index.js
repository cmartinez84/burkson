import React, { Component } from 'react';
import Pagination from './Pagination';
import TableView from './TableView';
import TileView from './TileView';
import { ClipLoader } from 'react-spinners';

import moment from 'moment';
import { css } from '@emotion/core';
import './employees.css';

class Employees extends Component {
  state = {
    employees: [],
    selectedPage: 1,
    pageLength: 10,
    windowHeight: 0,
    windowWidth: 0
  }


  componentDidMount() {
    const url = "https://api.myjson.com/bins/d22kk";
      fetch(url)
      .then(response => {
        if(!response.ok){
          this.fetchLocalData();
          throw new Error("Looks like randomuser.com is down! Don't worry, we have some sample data stored!");
        }
        else{
          return response.json()
        }
      })
      .then(data => {
          this.setState({employees: data.results})
        })
        .catch(error => {console.log(error)})

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ windowWidth: update_width, windowHeight: update_height });
    }
  }


  fetchLocalData=()=>{
    const employees = require('./../../assets/employees.json');
    this.setState({employees: employees.results});
  }


  handleTraverse=(value)=>{
    var totalPages = Math.ceil(this.state.employees.length/ this.state.pageLength);
    var newPage = this.state.selectedPage + value;
    if(newPage > totalPages){
      newPage = totalPages
    }
    else if (newPage <= 0) {
      newPage = 1
    }
    this.setState({selectedPage: newPage});
  }

  handleSelectPage=(newPage)=>{
    this.setState({selectedPage: newPage})
  }

  render() {
    var totalPages = Math.ceil(this.state.employees.length/ this.state.pageLength);
    var pageBegin = (this.state.selectedPage - 1) * this.state.pageLength
    var pageEnd =this.state.selectedPage * this.state.pageLength;

    const override = css`
      width: 200px;
      display: block;
      margin: 0 auto;
      border-color: light;
      text-align: center
    `;

    return (
      <div className="employees-container container">
        <h1>Employees</h1>
        <Pagination
          selectedPage={this.state.selectedPage}
          totalPages={totalPages}
          handleSelectPage={this.handleSelectPage}
          handleTraverse={this.handleTraverse}>
        </Pagination>
        {
          this.state.employees.length === 0?
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={300}
            color={'#95999c'}
            loading={this.state.loading}
          />:
           this.state.windowWidth > 767?
              <TableView
                employees={this.state.employees}
                totalPages={totalPages}
                pageBegin={pageBegin}
                pageEnd={pageEnd}>
              </TableView>:

              <TileView
                employees={this.state.employees}
                totalPages={totalPages}
                pageBegin={pageBegin}
                pageEnd={pageEnd}>
              </TileView>
        }
      </div>
    );
  }
}

export default Employees;
