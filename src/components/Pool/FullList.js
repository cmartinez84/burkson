import React from 'react';
import './pool.css'


const FullList = (props) =>
<div>
  <button
    onClick={()=>props.handleNavigate(false)}
    className="btn btn-danger">← Calendar View
  </button>
  <table class="table table-striped pool-full-list">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      {props.daysArray.map((data)=>
        <tr>
          <td>{data.number}</td>
          <td>{data.date}</td>
          <td>{data.swimmer}</td>
        </tr>
      )}
    </tbody>
  </table>
</div>



export default FullList;
