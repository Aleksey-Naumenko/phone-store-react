import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonContainer } from "./Button";
import styled from 'styled-components';


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              To products!
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <FontAwesomeIcon icon={faCartPlus} />
            My chart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
};

const NavWrapper = styled.nav`
  background: #2a2a72;
  .nav-link {
    color: #f3f3f3 !important;
    font-size: 1.3rem;
    text-transform: capitalize;

  }
`;

export default Navbar;
