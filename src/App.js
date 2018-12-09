import React, { Component } from "react";
import './App.css';

import Invoice from './components/Invoice/Invoice';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

library.add(faBell, faQuestionCircle, faSearch);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      notification: 2,
      currentUser: "JS",
      invoiceNumber: 'S456789',
      overViewStatus: "active",
    };
  }

  toggleNavBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="app-container">
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img 
              className="main-logo"
              src={process.env.PUBLIC_URL + '/hexagon.png'} 
              alt="main-logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.isOpen} navbar>
      
            <Nav className="ml-left nav-container" navbar>
                <NavItem>
                  <NavLink href="/components/">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Network</NavLink>
                </NavItem>
                <NavItem className="billing-container">
                  <NavLink
                    className="billing-nav" 
                    href="/components/">Billing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <div className="right-container">
                <NavItem>
                  <NavLink href="#">
                    <FontAwesomeIcon
                      icon="search"
                      size="lg"
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FontAwesomeIcon
                      icon="question-circle"
                      size="lg"
                    />
                  </NavLink>
                </NavItem>
                <NavItem className="notification-container">
                  <NavLink href="#">
                    <FontAwesomeIcon
                      icon="bell"
                      size="lg"
                    />
                    <span 
                      className="notification-number"
                    >
                    {this.state.notification}</span>
                  </NavLink>
                </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="js-dropdown ml-auto">
                  {this.state.currentUser}
                </DropdownToggle>  
                <DropdownToggle nav caret />
                <DropdownMenu right>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem>Change password</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Sign out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </div>
            </Nav>
         
          </Collapse>
        </Navbar>
        <div className="content-container">
          <Invoice 
            invoiceNumber={this.state.invoiceNumber} 
            overViewStatus={this.state.overViewStatus}
            />
        </div>
      </div>
    );
  }
}

export default App;