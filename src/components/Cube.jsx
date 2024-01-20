import React from "react";
import "../stylesheets/cube.css";
const Cube = ({className, blockNo, text1, text2, text3, text4, text5}) => {
  return (
    <>
      <div className={className}>
        <p className="block__no">{blockNo}</p>
        <p className="text1">{text1}</p>
        <p className="text2">{text2}</p>
        <p className="text3">{text3}</p>
        <p className="text4">{text4}</p>
        <p className="text5">{text5}</p>
      </div>
    </>
  );
};

export default Cube;
