import React from "react";
import '../stylesheets/transactions.css'
const Transactions = () => {
  return (
    <>
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
              <tr className="alpha">
                <td>
                  <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__right"></i>
                  <p className="beta">Coinbase (Newly Generated Coins)</p>
                  <p className="gamma">s456342^&**&$#%@$524tset2%@$%</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="transction__details__column2">
            <table>
              <tr>
                <td>
                  <p id="color_blue">bc1qpsd72pr...xp8p4ddfgdfg</p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>6.67966301 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__green arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ display: "inline-block" }}>
                    OP_RETURN{" "}
                    <p
                      style={{
                        display: "inline-block",
                        fontSize: ".8rem",
                        backgroundColor: "#2f3246",
                        paddingInline: "5px",
                        width: "fit-content",
                      }}
                    >
                      42^&**&$#%ss@$
                    </p>
                  </p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.00000000 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ display: "inline-block" }}>
                    OP_RETURN{" "}
                    <p
                      style={{
                        display: "inline-block",
                        fontSize: ".8rem",
                        backgroundColor: "#2f3246",
                        paddingInline: "5px",
                        width: "fit-content",
                      }}
                    >
                      42^&**&$#%sdsfs@$524ts
                    </p>
                  </p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.00000000 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ display: "inline-block" }}>
                    OP_RETURN{" "}
                    <p
                      style={{
                        display: "inline-block",
                        fontSize: ".8rem",
                        backgroundColor: "#2f3246",
                        paddingInline: "5px",
                        width: "fit-content",
                      }}
                    >
                      42^&**&$#%sdsfs@$524t
                    </p>
                  </p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.00000000 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__grey arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="total__btc__cell">
                  <p className="total__btc">6.67966301 BTC</p>
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
                  <p id="color_blue">bc1qp0972pr...xp34ddfgdfg</p>
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
                  <p id="color_blue">bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg</p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.00009996 BTC</p>
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
                  <p id="color_blue">bc10sdfs972pr...xp8psffgdfg</p>
                  <p id="multisig">multisig 2 of 3</p>
                </td>
                <td>0.02355332 BTC</td>
              </tr>
              <tr>
                <td>
                  470.0 sat/vB - 90,000 sat (
                  <plaintext id="btc_price">$28.72</plaintext>)
                </td>
              </tr>
            </table>
          </div>
          <div className="transction__details__column2">
            <table>
              <tr>
                <td>
                  <p id="color_blue">bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg</p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.01080726 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__green arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <p id="color_blue">bc1qpsdfsff0972pr...xp8pyvcv34ddfgdfg</p>
                </td>
                <td style={{ float: "right" }}>
                  <p style={{ display: "inline-block" }}>0.01184606 BTC</p>
                  <i class="fa-solid fa-right-long fa-xl arrow__red arrow__margin__left"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="total__btc__cell">
                  <p className="total__btc">0.02265332 BTC</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
