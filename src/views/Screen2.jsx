import React, { useState } from "react";
import "../stylesheets/screen2.css";
import Cube from "../components/Cube";
import blockInfo from "../data/blockInfo";
import transactions from "../data/transactions";

import hashIcon from "../assets/hash-copy.svg";
const Screen2 = () => {
  const [blockNo, setBlockNo] = useState(667306);

  return (
    <div className="page__wrapper">
      <div className="screen2__container">
        <div className="block__container">
          <div className="cube__container1">
            {blockInfo.slice(0, 4).map((item) => (
              <Cube
                className="type__a"
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
                className="type__b"
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
                  Block <plaintext id="block_no">{blockNo}</plaintext>
                </p>
              </div>
              <div className="block__details__grid__column2">
                <div className="closeBtn">&#x2716;</div>
              </div>
            </div>
            <div className="block__details__grid__row">
              <div className="block__details__grid__column1">
                <table>
                  <tr>
                    <td>Hash</td>
                    <td id="hash">
                      <plaintext id="hash_value">000000...7c83bfa</plaintext>
                      <img id="hash_icon" src={hashIcon} alt="Hash Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Timestamp</td>
                    <td>
                      21-01-23 08:47 <i>(1 hour ago)</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>1.39 MB</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>3.99 MWU</td>
                  </tr>
                </table>
              </div>
              <div className="block__details__grid__column2">
                <table>
                  <tr>
                    <td>Total fees</td>
                    <td>
                      0.43 BTC (<plaintext id="btc_price">$13,710</plaintext>)
                    </td>
                  </tr>
                  <tr>
                    <td>Subsidy + fees:</td>
                    <td>
                      6.68 BTC (<plaintext id="btc_price">$213,136</plaintext>)
                    </td>
                  </tr>
                  <tr>
                    <td>Miner</td>
                    <td>
                      <p id="spiderpool">SpiderPool</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="block__details__grid__row">
              <div className="block__details__grid__column1">
                <p id="trans_quant">{transactions.length} transactions</p>
              </div>
              <div className="block__details__grid__column2">Pagination</div>
            </div>
            <div className="block__details__grid__row">
              <div className="transaction__details__grid">
                {transactions.map((item) => {
                  return (
                    <>
                      <div className="transaction__details__row">
                        <div className="transction__details__column">
                          <p className="transaction__id">{item.id}</p>
                        </div>
                        <div className="transction__details__column">
                          <p className="transaction__timestamp">
                            {item.timestamp}
                          </p>
                        </div>
                      </div>
                      <div className="transaction__details__row">
                        <div className="transction__details__column1">
                          <table>
                            <tr>
                              <td id="color_blue">
                                bc1qpsdfsdf2ccsdff0972pr...xp8pyvcv34ddfgdfg
                              </td>
                              <td>0.00078228 BTC</td>
                            </tr>
                            <tr>
                              <td>623.1 sat/vB - 68,323 sat (<plaintext id="btc_price">$21.77</plaintext>)</td>
                            </tr>
                          </table>
                        </div>
                        <div className="transction__details__column2">
                          <table>
                            <tr>
                              <td id="color_blue">
                                bc1qpsdfsdf2ccsdff0972pr...xp8pyvcv34ddfgdfg
                              </td>
                              <td>0.00078228 BTC</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
