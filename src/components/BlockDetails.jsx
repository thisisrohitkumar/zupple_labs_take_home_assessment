import React from "react";
import hashIcon from "../assets/hash-copy.svg";
const BlockDetails = () => {
  return (
    <>
      <div className="block__details__grid__column1">
        <table>
          <tbody>
          <tr>
            <td>Hash</td>
            <td id="color_blue">
              000000...7c83bfa
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
          </tbody>
        </table>
      </div>
      <div className="block__details__grid__column2">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlockDetails;
