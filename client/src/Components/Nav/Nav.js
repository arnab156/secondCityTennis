import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Nav.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <div className="footer">
        <Navbar color="faded" dark>
          <NavbarBrand href="/" className="mr-auto headFont">Second City Tennis</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="headFont" href="/courts">Find Tennis Courts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="https://google.com">Sponsors & Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="https://google.com">SCT By-Laws</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="headFont" href="https://google.com">Social Media</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      </div>
    );
  }
}