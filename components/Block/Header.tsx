import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>LOGO</Logo>
          <NavHolder>
            <Nav to="/">
              <span>Home</span>
            </Nav>
            <Nav to="/about">
              <span>About</span>
            </Nav>
            <Nav to="/contact">
              <span>Contact</span>
            </Nav>
          </NavHolder>
          <Icon> </Icon>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Icon = styled(AiOutlineMenu)`
  font-size: 30px;
  color: white;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

const NavHolder = styled.div`
  display: flex;
  align-items: space-between;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Nav = styled(NavLink)`
  margin: 0px 12px;

  text-decoration: none;
  color: white;

  position: relative;

  span {
    font-weight: bold;
    text-transform: uppercase;
  }

  ::after {
    content: "";
    height: 2px;
    background-color: white;
    position: absolute;
    width: 100%;
    bottom: -3px;
    left: 0;
    opacity: 0;
    transition: all 350ms;
    transform-origin: center left;
    transform: scale(0);
  }
  &.active {
    ::after {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  :hover {
    cursor: pointer;
    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const Logo = styled.div``;

const Main = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  height: 80px;
  width: 100%;
  font-weight: 700;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
