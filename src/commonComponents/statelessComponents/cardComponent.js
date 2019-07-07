import React from "react";
import { Card ,Col} from "reactstrap";
import "./cardComponent.css";
import { Link } from 'react-router-dom'

export function BalanceCards(props) {
  return props.config.map((obj, index) => (
    <Col md="6">
    <Card>
    
      <div className="current-balance-container">
      <div className="balance-card">
        <b>Available Balance</b>
        <span className="tool-tip">
          <img
            src={"/assets/images/info.svg"}
            className="mr-icon"
          />
          <span>
            <span class="tooltiptext-i">
              Your balances
            </span>
          </span>
        </span>
        {/* <h1>{this.props.accountData.account_data.availableBalance}</h1> */}

        <h1 className={"large-text"}>
          {"$" +
            parseFloat(obj.balance).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
        </h1>
        <p className="view-transaction">
          <a
            href="#"
            className="link-navigator tool-tip"
            tabindex="0"
            title="View Transaction Summary"
          >
            <span>
              <span class="tooltiptext">Coming Soon...</span>
            </span>{" "}
            <span>VIEW TRANSACTION SUMMARY </span>
            <div className="arrow-animation-blue" />
          </a>
        </p>
      </div>
    </div>
    </Card>
    </Col>
  ));
}
export function PageHeading(props) {
  return  (
    
    <div className="PageHeading">
      <h1>
        {props.data}
      </h1>
    </div>
    );
}
export function CTA(props) {
  return  (
    <Link to={props.link} >
    <div className="Cta">
   
                       
                        <h2>{props.data}</h2>
                        <div className="arrow-animation" />
    </div>
    </Link>
    );
}
