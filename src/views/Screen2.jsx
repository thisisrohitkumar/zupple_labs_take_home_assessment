import React, { useState } from "react";
import "../stylesheets/screen2.css";
import Cube from "../components/Cube";
import blockInfo from "../data/blockInfo";
import Pagination from "../components/Pagination";
import BlockDetails from "../components/BlockDetails";
import Transactions from "../components/Transactions";
const Screen2 = () => {
  return (
    <div className="page__wrapper">
      <div className="screen2__container">
        <div className="block__container">
          <div className="cube__container1">
            {blockInfo.slice(0, 4).map((item) => (
              <Cube
                key={item.id}
                className="type__a"
                blockNo=""
                text1={item.text1}
                text2={item.text2}
                text3={item.text3}
                text4={item.text4}
                text5={item.text5}
              />
            ))}
          </div>
          <div className="cube__container2">
            {blockInfo.slice(4, 8).map((item) => (
              <Cube
                key={item.id}
                className="type__b"
                blockNo={item.id}
                text1={item.text1}
                text2={item.text2}
                text3={item.text3}
                text4={item.text4}
                text5={item.text5}
              />
            ))}
          </div>
        </div>

        <div className="block__details__container">
          <div className="block__details__grid">
            <div className="block__details__grid__row">
              <div className="block__details__grid__column1">
                <p id="block_text">
                  Block <plaintext id="block_no">667306</plaintext>
                </p>
              </div>
              <div className="block__details__grid__column2">
                <div className="closeBtn">&#x2716;</div>
              </div>
            </div>
            <div className="block__details__grid__row">
              <BlockDetails />
            </div>
            <div className="block__details__grid__row">
              <div className="block__details__grid__column1">
                <p id="trans_quant">2,075 transactions</p>
              </div>
              <div className="block__details__grid__column2">
                <Pagination />
              </div>
            </div>
            <div className="block__details__grid__row">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
