import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";
import { Helmet } from "react-helmet";
import { Row } from "reactstrap";
import { BalanceCards } from "../../commonComponents/statelessComponents/cardComponent";
import TransactionTable from "../../commonComponents/TransactionTable/TransactionTable"
import {
  PageHeading,
  CTA
} from "../../commonComponents/statelessComponents/cardComponent";
const BalanceCardsConfiguration = [
  {
    heading: "Current Balance",
    balance: 100000,
    text:
      "Balance in your donor-advised fund after the previous day’s trading cycle is completed",
    url: "/",
    buttonName: "View account summary",
    comingSoon: false
  },
  {
    heading: "Available Balance",
    balance: 20000,
    text:
      "Your current balance, minus any pending grants, pending exchanges or assets invested in TIFF",
    url: "",
    buttonName: "View transaction summary",
    comingSoon: true
  }
];
 

class Dashboard2 extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.getAllAccountSummaryBalanceData();
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log(nextProps.TransactionData, "-----nextProps-----");
  }
  render() { 
console.log(this.props.TransactionData,"-----")
if (this.props.TransactionData.IsLoading==true) {
  return (
    <div>
      <div className="loadingContainer">
        <div />
        {"loading.."}
      </div>
    </div>
  );
} else {

    return (
      <>
        <Helmet>
        <title>Transaction Summary Page</title>
          <meta
            name="description"
            content="Lets Do India Transaction Summary Page, here we can see all transaction data"
          /> </Helmet>

  <div className="account-summary">
          <div className="bg-gray-color-container">
            <div className="main-max-width-container">
              <PageHeading data={"Transaction Summary"} />
              <h3>{"John Carson Eco Fund - A024759"}</h3>
              <Row>
                <BalanceCards config={BalanceCardsConfiguration} />
              </Row>
              <Row className="Cta-Wrapper">
                <CTA data={"Transaction Summary"} link={"/page2"} />
                <CTA data={"Manage your account"} />
                <CTA data={"Contribution Activity"} />
                <CTA data={"Exchange Activity"} />
              </Row>
              <Row>
              <TransactionTable data={this.props.TransactionData.FirstData} />
              </Row>
             
            </div>
          </div>
        </div>

      </>
    )
}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard2);