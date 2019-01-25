import React, { Component } from 'react';
import FullList from './FullList';
import './pool.css'
import Calendar from 'react-calendar';
import moment from 'moment';


class Pool extends Component {
  state = {
    daysArray: [],
    curerntUser: null,
    showFullList: false,
    dayOfYear: null
  }
  componentDidMount=()=>{
    this.generateList();
  }
  generateList=()=>{
    var today = moment(new Date(2019, 0, 1));
    var daysArray = [];
    for (var i = 0; i < 366; i++) {
      var swimmer;
      if(i % 50 === 0){
         swimmer = "John and Jack";
      }
      else if (i % 3=== 0) {
        swimmer = "Jack"
      }
      else{
        swimmer = "John"
      }
      var dayData = {
        number: i,
        swimmer: swimmer,
        date: moment(new Date(2019, 0, 1)).add(i-1, 'days').format('MMM Do YY')
      }
      daysArray.push(dayData);
    }
    daysArray.shift();
    this.setState({daysArray});
  }

  handleClickDay=(value)=>{
    var origin = moment(new Date(2019, 0, 1));
    var clickedDate = moment( new Date(value));
    var dayDiff = clickedDate.diff(origin, 'days') +1
    var currentUser;
    if(dayDiff % 50 === 0){
      currentUser = "John and Jack"
    }
    else if (dayDiff % 3 === 0) {
      currentUser = "Jack"
    }
    else{
      currentUser = "John"
    }
    this.setState({currentUser})
  }
  handleNavigate=(bool)=>[
    this.setState({showFullList: bool})
  ]


  render() {
    return (
      <div className="container ">
        {
          !this.state.showFullList ?
          <div className="row pool">
            <div className="col-md-6 pool-col-1">
              <p>Click on a date to find out who is using the pool. Days are counted from January 1, 2019. Hint: Feb 19th is the 50th day of the year</p>
                <Calendar
                  activeStartDate={new Date(2019, 0, 1)}
                  mmaxDate={new Date(2019, 11, 31)}
                  onClickDay={this.handleClickDay}
                  className="pool-calendar"
                  >
                </Calendar>
            </div>
            <div className="col-md-6 pool-col-2">
              {
                !this.state.currentUser ?
                <p className="swimmer-name">{this.state.currentUser} No date selected</p>
                :
                <p className="swimmer-name">{this.state.currentUser}</p>
              }
              <button
                onClick={()=>this.handleNavigate(true)}
                className="btn btn-danger">See printout of days →
              </button>
            </div>
          </div>
          :
          <FullList
            daysArray={this.state.daysArray}
            handleNavigate={this.handleNavigate}
            >

          </FullList>
        }
      </div>
    );
  }
}

export default Pool;
