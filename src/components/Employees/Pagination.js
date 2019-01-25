import React from 'react';

const Pagination=(props)=>{

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={()=>{props.handleTraverse(-1)}}>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {
          Array.apply(null, { length: props.totalPages }).map((e, i) => (
            <li
              key={i}
              className={`page-item ${props.selectedPage === i + 1 ?'selected-page': null }`}
              onClick={()=>{props.handleSelectPage(i+1)}}>
                <a className="page-link" href="#">{i+1}</a>
              </li>
          ))
        }
        <li className="page-item" onClick={()=>{props.handleTraverse(1)}}>
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default Pagination
