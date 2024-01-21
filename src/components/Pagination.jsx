import React from "react";
import '../stylesheets/pagination.css'

const Pagination = () => {
  return (
    <>
      <div className="pagination__container">
        <div className="page">
          <i className="fa-solid fa-angles-left"></i>
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div className="page">
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div className="page active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
        <div className="page">4</div>
        <div className="page">5</div>
        <div className="page">...</div>
        <div className="page">208</div>
        <div className="page">
          <i className="fa-solid fa-angles-right"></i>
        </div>
        <div className="page">
          <i className="fa-solid fa-angles-right"></i>
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>
    </>
  );
};

export default Pagination;
