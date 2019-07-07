import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";
import { Helmet } from "react-helmet";
import { Row, Col } from "reactstrap";
import "./Dashboard.css";
//import { getAllAccountSummaryBalanceData } from "../actions/DashboardData";
import { BalanceCards } from "../../commonComponents/statelessComponents/cardComponent";
import {
  PageHeading,
  CTA
} from "../../commonComponents/statelessComponents/cardComponent";
import MarketingFeature from "../../commonComponents/Carousal/marketingFeature";
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
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log(nextProps, "-----nextProps-----");
  }

  render() {
    console.log(this.props.newData, "-----");
    return (
      <>
        <Helmet>
          <title>Account Summary</title>
          <meta
            name="description"
            content="Lets Do India Account Summary page"
          />
        </Helmet>

        <div className="account-summary">
          <div className="bg-gray-color-container">
            <div className="main-max-width-container">
              <PageHeading data={"Account Summary"} />
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
                <MarketingFeature />
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
