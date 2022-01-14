import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Nav theme={theme}>
      <Menu>
        <MenuLink href="/" theme={theme}>
          Home
        </MenuLink>
        <MenuLink href="/about" theme={theme}>
          About
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #ffc900;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.background};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
