import React from "react";
import '../stylesheets/pagination.css'

const Pagination = () => {
  return (
    <>
      <div className="pagination__container">
        <div className="span">
          <i class="fa-solid fa-angles-left"></i>
          <i class="fa-solid fa-angles-left"></i>
        </div>
        <div className="span">
          <i class="fa-solid fa-angles-left"></i>
        </div>
        <div className="span active">1</div>
        <div className="span">2</div>
        <div className="span">3</div>
        <div className="span">4</div>
        <div className="span">5</div>
        <div className="span">...</div>
        <div className="span">208</div>
        <div className="span">
          <i class="fa-solid fa-angles-right"></i>
        </div>
        <div className="span">
          <i class="fa-solid fa-angles-right"></i>
          <i class="fa-solid fa-angles-right"></i>
        </div>
      </div>
    </>
  );
};

export default Pagination;
