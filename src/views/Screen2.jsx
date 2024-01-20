import React, { useState } from "react";
import "../stylesheets/screen2.css";
import Cube from "../components/Cube";
import blockInfo from "../data/blockInfo";

import hashIcon from "../assets/hash-copy.svg";
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
                <p id="trans_quant">2,075 transactions</p>
              </div>
              <div className="block__details__grid__column2">
                <div className="pagination__container">
                  <div className="span"><i class="fa-solid fa-angles-left"></i><i class="fa-solid fa-angles-left"></i></div>
                  <div className="span"><i class="fa-solid fa-angles-left"></i></div>
                  <div className="span active">1</div>
                  <div className="span">2</div>
                  <div className="span">3</div>
                  <div className="span">4</div>
                  <div className="span">5</div>
                  <div className="span">...</div>
                  <div className="span">208</div>
                  <div className="span"><i class="fa-solid fa-angles-right"></i></div>
                  <div className="span"><i class="fa-solid fa-angles-right"></i><i class="fa-solid fa-angles-right"></i></div>
                </div>
              </div>
            </div>
            <div className="block__details__grid__row">
              <div className="transaction__details__grid">
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <p className="transaction__id">
                      23b5548b846s38683dba8300rs66v23b5548b846s38683dba8300rs66v
                    </p>
                  </div>
                  <div className="transction__details__column2">
                    <p className="transaction__timestamp">2021-01-23 08:47</p>
                  </div>
                </div>
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <table>
                      <tr style={{ display: "flex", alignItems: "flex-start" }}>
                        <td s>
                          <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__right"></i>
                          <p style={{display: 'inline-block'}}>Coinbase (Newly Generated Coins)</p>
                          <p style={{marginTop: '5px', marginLeft: '35px', backgroundColor: '#2f3246', paddingInline: '5px', width: 'fit-content'}}>s456342^&**&$#%@$524tset2%@$%</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="transction__details__column2">
                    <table>
                      <tr>
                        <td>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00009996 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__green arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p style={{display: 'inline-block'}}>OP_RETURN <p style={{display: 'inline-block', fontSize: '.8rem', backgroundColor: '#2f3246', paddingInline: '5px', width: 'fit-content'}}>42^&**&$#%sdsfs@$</p></p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00000000 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <p style={{display: 'inline-block'}}>OP_RETURN <p style={{display: 'inline-block', fontSize: '.8rem', backgroundColor: '#2f3246', paddingInline: '5px', width: 'fit-content'}}>42^&**&$#%sdsfs@$524tset2%</p></p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00000000 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <p style={{display: 'inline-block'}}>OP_RETURN <p style={{display: 'inline-block', fontSize: '.8rem', backgroundColor: '#2f3246', paddingInline: '5px', width: 'fit-content'}}>42^&**&$#%sdsfs@$524t</p></p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00000000 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="total__btc__cell">
                          <p className="total__btc">0.00009996 BTC</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <p className="transaction__id">
                      23b5548b846s38683dba8300rs66v23b5548b846s38683dba8300rs66v
                    </p>
                  </div>
                  <div className="transction__details__column2">
                    <p className="transaction__timestamp">2021-01-23 08:47</p>
                  </div>
                </div>
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <table>
                      <tr style={{ display: "flex", alignItems: "flex-start" }}>
                        <td>
                          <i class="fa-solid fa-right-long fa-xl arrow__red arrow__margin__right"></i>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                        </td>
                        <td>0.00078228 BTC</td>
                      </tr>
                      <tr>
                        <td>
                          623.1 sat/vB - 68,323 sat (
                          <plaintext id="btc_price">$21.77</plaintext>)
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="transction__details__column2">
                    <table>
                      <tr>
                        <td>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00009996 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__green arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="total__btc__cell">
                          <p className="total__btc">0.00009996 BTC</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <p className="transaction__id">
                      23b5548b846s38683dba8300rs66v23b5548b846s38683dba8300rs66v
                    </p>
                  </div>
                  <div className="transction__details__column2">
                    <p className="transaction__timestamp">2021-01-23 08:47</p>
                  </div>
                </div>
                <div className="transaction__details__row">
                  <div className="transction__details__column1">
                    <table>
                      <tr style={{ display: "flex", alignItems: "flex-start" }}>
                        <td s>
                          <i class="fa-solid fa-right-long fa-xl arrow__red arrow__margin__right"></i>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                          <p id="multisig">multisig 2 of 3</p>
                        </td>
                        <td>0.00078228 BTC</td>
                      </tr>
                      <tr>
                        <td>
                          623.1 sat/vB - 68,323 sat (
                          <plaintext id="btc_price">$21.77</plaintext>)
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="transction__details__column2">
                    <table>
                      <tr>
                        <td>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00009996 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__green arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p id="color_blue">
                            bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg
                          </p>
                        </td>
                        <td style={{ float: "right" }}>
                          <p style={{ display: "inline-block" }}>
                            0.00009996 BTC
                          </p>
                          <i class="fa-solid fa-right-long fa-xl arrow__red arrow__margin__left"></i>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="total__btc__cell">
                          <p className="total__btc">0.00009996 BTC</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
