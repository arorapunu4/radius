import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import "./header.css";

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          isOpenHeader: false,
          isTourOpen: false,
        };
        this.toggle = this.toggle.bind(this);
      }
  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log(nextProps, "-----nextProps-----");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleHeader = () => {
    this.setState({
      isOpenHeader: !this.state.isOpenHeader
    });
  };

  openTour = () => {
    this.setState({
      isTourOpen: true
    });
  };

  closeTour = () => {
    this.setState({
      isTourOpen: false
    });
  };
  render() { 
console.log(this.props.newData,"---header--")
    return (
      <>
        <Helmet>
    <title>Here's the Title!</title>
    <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
  </Helmet>
  <div className="header-fixed">
        <div className="header-container">
          <div className="main-max-width-container">
            <div className="headerFlex">
              <div className="leftSideContainer  ">
                <div>
                  <a href="#">
                    {" "}
                    <span className="tool-tip" tabindex="0" title="Resources">
                      {" "}
                      Resources
                      <span>
                        <span class="tooltiptext">Coming Soon...</span>
                      </span>
                    </span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span
                      className="tool-tip"
                      tabindex="0"
                      title="Need Assistance?"
                    >
                      {" "}
                      Need Assistance?
                      <span>
                        <span class="tooltiptext">Coming Soon...</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="rightSideContainer  ">
                {/* <div className="notification"><Notifications/></div> */}

                <div className="messages">
                  {/* <Messages /> */}
                </div>
                <div className="selectDropdown">
                  {/* <SelectInput /> */}
                </div>
                <div>
                  <a
                    className="logout-btn"
                    tabindex="0"
                    title="logout"
                    onClick={this.logout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-bar">
          <div className="main-max-width-container">
            <Navbar expand="lg" light>
            <Link to={"/"} >
              <NavbarBrand href="#" tabindex="0">
                <img
                 src={"/assets/images/vcep_logo.png"}
                  className="left"
                />
              </NavbarBrand>
              </Link>
              <NavbarToggler
                onClick={this.toggle}
                className="mt-4 menuButton"
              />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="HeaderPosition" navbar>
                  <NavItem
                    className="nav-item-space active"
                    tabindex="0"
                    title="Account Summary"
                  >
                    <NavLink href="#">Account Dashboard</NavLink>
                  </NavItem>
                    <NavItem className="nav-item-space">
                    <NavLink href="#">
                      {" "}
                      <span
                        className="tool-tip"
                        tabindex="0"
                        title="Contributions"
                      >
                        {" "}
                        Contributions
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item-space">
                    <NavLink href="#">
                      <span
                        className="tool-tip"
                        tabindex="0"
                        title="Investments"
                      >
                        {" "}
                        Investments
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item-space">
                    <NavLink href="#">
                      <span className="tool-tip" tabindex="0" title="Reports">
                        {" "}
                        Reports
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-profile">
                    <NavLink href="#">
                      <span className="tool-tip" tabindex="0" title="Profile">
                        {" "}
                        Profile
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>

                  <NavItem className="hide-desktop">
                    <NavLink href="#">
                      <span className="tool-tip" tabindex="0" title="Resources">
                        Resources
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="hide-desktop">
                    <NavLink href="#">
                      <span
                        className="tool-tip"
                        tabindex="0"
                        title="Need Assistance?"
                      >
                        {" "}
                        Need Assistance?
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="hide-desktop">
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    

      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderMain);