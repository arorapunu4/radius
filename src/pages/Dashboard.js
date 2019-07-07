import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";
import {Helmet} from 'react-helmet'
//import { getAllAccountSummaryBalanceData } from "../actions/DashboardData";
import moment from "moment";
class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.getAllAccountSummaryBalanceData();
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log(nextProps, "-----nextProps-----");
  }
  render() { 
console.log(this.props.newData,"-----")
    return (
      <>
        <Helmet>
    <title>Here's the Title!</title>
    <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
  </Helmet>

       <h1>
Hiiii react app
       </h1>

      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);